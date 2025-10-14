// pages/Admin.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import AdminLogin from '../components/AdminLogin';
import ChangePasswordForm from '../components/ChangePasswordForm';
import BlogManager from '../components/BlogManager';
import TestimonialManager from '../components/TestimonialManager';
import { FaChevronUp, FaBlog, FaComments, FaKey, FaChartLine, FaSignOutAlt } from 'react-icons/fa';

const API = import.meta.env.VITE_API_URL;

const Admin: React.FC = () => {
  const [token, setToken] = useState(localStorage.getItem('jwt'));
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [changePw, setChangePw] = useState({ oldPassword: '', newPassword: '' });
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [newBlog, setNewBlog] = useState({ 
    title: '', 
    content: '', 
    cover_image: null as File | null,
    content_images: [] as string[]
  });
  const [message, setMessage] = useState('');

  const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });
  
    return res;
  };

  useEffect(() => {
    if (token) {
      fetchWithAuth(`${API}/api/blogs`).then(res => res.json()).then(setBlogs);
      fetchWithAuth(`${API}/api/testimonials`).then(res => res.json()).then(setTestimonials);
    }
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const res = await fetch(`${API}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('jwt', data.token);
      setToken(data.token);
    } else {
      setMessage(data.message || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setToken(null);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
  
    try {
      const res = await fetchWithAuth(`${API}/api/admin/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changePw)
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        toast.error(data.message || 'Something went wrong');
        return;
      }
  
      toast.success(data.message || 'Password changed successfully');
      setChangePw({ oldPassword: '', newPassword: '' });
  
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error(error);
    }
  };
  
  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', newBlog.title);
    formData.append('content', newBlog.content);
    formData.append('content_images', JSON.stringify(newBlog.content_images));
  
    if (newBlog.cover_image) {
      formData.append('cover_image', newBlog.cover_image);
    }
  
    try {
      const res = await fetchWithAuth(`${API}/api/blogs`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
  
      const data = await res.json();
  
      if (res.ok) {
        toast.success(data.message || 'Blog added successfully!');
        setNewBlog({ title: '', content: '', cover_image: null, content_images: [] });
        fetchWithAuth(`${API}/api/blogs`).then(res => res.json()).then(setBlogs);
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
  
    } catch (error) {
      toast.error('Network error/Session Expired. Please Sign In again.');
      console.error(error);
    }
  };
  
  const handleUpdateBlog = async (id: number, blogData: { title: string; content: string; cover_image: File | null; content_images: string[] }) => {
    const formData = new FormData();
    formData.append('title', blogData.title);
    formData.append('content', blogData.content);
    formData.append('content_images', JSON.stringify(blogData.content_images));
    
    if (blogData.cover_image) {
      formData.append('cover_image', blogData.cover_image);
    }
  
    try {
      const res = await fetchWithAuth(`${API}/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
  
      const data = await res.json();
  
      if (res.ok) {
        toast.success(data.message || 'Blog updated successfully!');
        // Refresh the blogs list
        fetchWithAuth(`${API}/api/blogs`).then(res => res.json()).then(setBlogs);
      } else {
        toast.error(data.message || 'Failed to update blog');
      }
    } catch (error) {
      toast.error('Network error/Session Expired. Please Sign In again.');
      console.error('Error updating blog:', error);
    }
  };

  const handleDeleteBlog = async (id: number) => {
    setMessage('');
  
    try {
      const res = await fetchWithAuth(`${API}/api/blogs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
  
      const data = await res.json();
  
      if (res.ok) {
        toast.success(data.message || 'Blog deleted successfully!');
        fetchWithAuth(`${API}/api/blogs`)
          .then(res => res.json())
          .then(setBlogs);
      } else {
        toast.error(data.message || 'Failed to delete the blog.');
      }
    } catch (error) {
      toast.error('Network error/Session Expired. Please Sign In again.');
      console.error(error);
    }
  };

  const handleAddTestimonial = async (testimonial: any) => {
    try {
      const res = await fetchWithAuth(`${API}/api/testimonials`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(testimonial)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        toast.success(data.message || 'Testimonial added successfully!');
        fetchWithAuth(`${API}/api/testimonials`).then(res => res.json()).then(setTestimonials);
      } else {
        toast.error(data.message || 'Failed to add testimonial');
      }
    } catch (error) {
      toast.error('Network error/Session Expired. Please Sign In again.');
      console.error(error);
    }
  };

  const handleDeleteTestimonial = async (id: any) => {
    try {
      const res = await fetchWithAuth(`${API}/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const data = await res.json();
      
      if (res.ok) {
        toast.success(data.message || 'Testimonial deleted successfully!');
        fetchWithAuth(`${API}/api/testimonials`).then(res => res.json()).then(setTestimonials);
      } else {
        toast.error(data.message || 'Failed to delete testimonial');
      }
    } catch (error) {
      toast.error('Network error/Session Expired. Please Sign In again.');
      console.error(error);
    }
  };

  if (!token) {
    return (
      <section className='mt-20'>
        <AdminLogin 
          loginData={loginData}
          setLoginData={setLoginData}
          handleLogin={handleLogin}
          message={message}
        />
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Sticky Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaChartLine className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-500">Manage your content efficiently</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl font-medium cursor-pointer"
            >
              <FaSignOutAlt className="w-4 h-4" />
              Logout
            </motion.button>
          </div>
        </div>
      </motion.div>

      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FaBlog className="w-6 h-6" />
                </div>
                <span className="text-4xl font-bold">{blogs.length}</span>
              </div>
              <p className="text-blue-100 font-medium text-lg">Total Blogs</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FaComments className="w-6 h-6" />
                </div>
                <span className="text-4xl font-bold">{testimonials.length}</span>
              </div>
              <p className="text-indigo-100 font-medium text-lg">Testimonials</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FaKey className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">Active</span>
              </div>
              <p className="text-purple-100 font-medium text-lg">Secure Session</p>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Password Section - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPasswordForm(prev => !prev)}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaKey className="w-4 h-4" />
                {showPasswordForm ? 'Hide Password Form' : 'Change Password'}
              </motion.button>

              <AnimatePresence>
                {showPasswordForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: 'auto', scale: 1 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChangePasswordForm 
                      changePw={changePw}
                      setChangePw={setChangePw}
                      handleChangePassword={handleChangePassword}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

           {/* Blog & Testimonial Managers Side by Side */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:col-span-3">
  {/* Blog Manager */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
    className="bg-white rounded-2xl shadow-md p-6"
  >
    <BlogManager
      blogs={blogs}
      newBlog={newBlog}
      setNewBlog={setNewBlog}
      handleAddBlog={handleAddBlog}
      handleUpdateBlog={handleUpdateBlog}
      handleDeleteBlog={handleDeleteBlog}
    />
  </motion.div>

  {/* Testimonial Manager */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 }}
    className="bg-white rounded-2xl shadow-md p-6"
  >
    <TestimonialManager
      testimonials={testimonials}
      handleAddTestimonial={handleAddTestimonial}
      handleDeleteTestimonial={handleDeleteTestimonial}
    />
  </motion.div>
</div>

          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-200 cursor-pointer z-40"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
};

export default Admin;