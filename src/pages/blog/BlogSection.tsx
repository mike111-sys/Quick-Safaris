import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const API = import.meta.env.VITE_API_URL;

type Blog = {
  id: number;
  title: string;
  cover_image: string | null;
  created_at: string;
};

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Fetch blogs
  useEffect(() => {
    fetch(`${API}/api/blogs`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched blogs:', data); // Debug log
        setBlogs(data);
      })
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-20 right-10 w-24 h-24 bg-amber-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-gray-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-yellow-600"
          >
            Latest Blog Posts
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
Explore expert insights on travel, adventure, and unforgettable safari experiences.
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden cursor-pointer min-h-[300px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {blog.cover_image ? (
                    <img
                      loading="lazy"
                      src={`${API}/api/uploads/blog-images/${blog.cover_image}`}
                      alt={blog.title}
                      className="w-full h-full object-contain rounded-t-lg transition-opacity duration-700"
                      onError={(e) => {
                        console.log('Image failed to load:', blog.cover_image); // Debug log
                        e.currentTarget.className = 'hidden';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const placeholder = document.createElement('div');
                          placeholder.className =
                            'w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg flex-col text-yellow-600 font-medium';
                          placeholder.innerHTML = `
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6.5 17.5l3.5-4.5 2.5 3.01L16.5 11l4.5 6.5H6.5z"/>
                            </svg>
                            <span class="mt-1 text-xs">Blog Image</span>
                          `;
                          parent.appendChild(placeholder);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg flex-col text-yellow-600 font-medium">
                      <BookOpen className="w-6 h-6" />
                      <span className="mt-1 text-xs">Blog Image N/A</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[48px]">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 text-yellow-600" />
                    <span>
                      {new Date(blog.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium text-yellow-600">Read More</span>
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-yellow-600"></div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto border border-gray-200 shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coming Soon!</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Exciting blogs about Safaris and Adventures crafted for you.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-yellow-600 font-medium text-sm">
                <Sparkles className="w-3 h-3" />
                Stay tuned for insightful content
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;