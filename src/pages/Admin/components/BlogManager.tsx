// components/BlogManager.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FaBlog } from 'react-icons/fa';

const API = import.meta.env.VITE_API_URL;

type Blog = { 
  id: number; 
  title: string; 
  content: string; 
  cover_image: string | null;
  content_images: string[];
  created_at: string; 
};

type Props = {
  blogs: Blog[];
  newBlog: { title: string; content: string; cover_image: File | null; content_images: string[] };
  setNewBlog: React.Dispatch<React.SetStateAction<{ title: string; content: string; cover_image: File | null; content_images: string[] }>>;
  handleAddBlog: (e: React.FormEvent) => void;
  handleDeleteBlog: (id: number) => void;
  handleUpdateBlog: (id: number, blogData: { title: string; content: string; cover_image: File | null; content_images: string[] }) => Promise<void>;
};

const BlogManager: React.FC<Props> = ({ 
  blogs, 
  newBlog, 
  setNewBlog, 
  handleAddBlog, 
  handleDeleteBlog,
  handleUpdateBlog 
}) => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageUploadProgress, setImageUploadProgress] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contentImageInputRef = useRef<HTMLInputElement>(null);

  // Reset form when editingBlog changes
  useEffect(() => {
    if (editingBlog) {
      setNewBlog({
        title: editingBlog.title,
        content: editingBlog.content,
        cover_image: null, // Reset cover image file input
        content_images: editingBlog.content_images || []
      });
    } else {
      setNewBlog({
        title: '',
        content: '',
        cover_image: null,
        content_images: []
      });
    }
  }, [editingBlog, setNewBlog]);

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewBlog(prev => ({ ...prev, cover_image: file }));
  };

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setImageUploadProgress('Uploading image...');

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`${API}/api/blogs/upload-image`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setNewBlog(prev => ({
          ...prev,
          content_images: [...prev.content_images, data.filename]
        }));
        setImageUploadProgress('Image uploaded successfully!');
        setTimeout(() => setImageUploadProgress(''), 2000);
      } else {
        setImageUploadProgress('Upload failed');
        setTimeout(() => setImageUploadProgress(''), 2000);
      }
    } catch (error) {
      setImageUploadProgress('Upload failed');
      setTimeout(() => setImageUploadProgress(''), 2000);
    } finally {
      setUploadingImage(false);
    }
  };

  const removeContentImage = (index: number) => {
    setNewBlog(prev => ({
      ...prev,
      content_images: prev.content_images.filter((_, i) => i !== index)
    }));
  };

  const insertImageAtCursor = () => {
    contentImageInputRef.current?.click();
  };

  const insertImagePlaceholder = (imageName: string) => {
    const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const before = text.substring(0, start);
      const after = text.substring(end);
      
      const imagePlaceholder = `\n\n[IMAGE:${imageName}]\n\n`;
      const newText = before + imagePlaceholder + after;
      setNewBlog(prev => ({ ...prev, content: newText }));
      
      setTimeout(() => {
        textarea.focus();
        const newPosition = start + imagePlaceholder.length;
        textarea.setSelectionRange(newPosition, newPosition);
      }, 0);
    }
  };

  const insertParagraph = () => {
    const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const before = text.substring(0, start);
      const after = text.substring(end);
      
      const newText = before + '\n\n' + after;
      setNewBlog(prev => ({ ...prev, content: newText }));
      
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + 2, start + 2);
      }, 0);
    }
  };

  const formatText = (format: 'bold' | 'italic' | 'underline') => {
    const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);
      const text = textarea.value;
      const before = text.substring(0, start);
      const after = text.substring(end);
      
      let formattedText = '';
      switch (format) {
        case 'bold':
          formattedText = `**${selectedText}**`;
          break;
        case 'italic':
          formattedText = `*${selectedText}*`;
          break;
        case 'underline':
          formattedText = `__${selectedText}__`;
          break;
      }
      
      const newText = before + formattedText + after;
      setNewBlog(prev => ({ ...prev, content: newText }));
      
      setTimeout(() => {
        textarea.focus();
        const newPosition = start + formattedText.length;
        textarea.setSelectionRange(newPosition, newPosition);
      }, 0);
    }
  };

  const renderContentPreview = (content: string, images: string[]) => {
    let renderedContent = content;
    
    images.forEach((imageName, index) => {
      const placeholder = `[IMAGE:${imageName}]`;
      const imageElement = `<img loading='lazy' src="${API}/api/uploads/blog-images/${imageName}" alt="Blog image ${index + 1}" class="w-full h-64 object-cover rounded-lg my-4" />`;
      renderedContent = renderedContent.replace(placeholder, imageElement);
    });

    renderedContent = renderedContent
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/__(.*?)__/g, '<u>$1</u>');

    return renderedContent;
  };

  const handleEditClick = (blog: Blog) => {
    setEditingBlog(blog);
    // Scroll to form
    document.getElementById('blog-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingBlog(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingBlog) {
        await handleUpdateBlog(editingBlog.id, newBlog);
        setEditingBlog(null);
      } else {
        handleAddBlog(e);
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
       {/* Header */}
       <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mb-4 shadow-lg">
          <FaBlog className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-yellow-900 mb-2">Manage Blogs</h3>
      </div>

      {/* Add/Edit Blog Form */}
      <form id="blog-form" onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-semibold text-yellow-400">
            {editingBlog ? `Edit Blog: ${editingBlog.title}` : 'Add New Blog'}
          </h4>
          {editingBlog && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="px-4 py-2 cursor-pointer bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Cancel Edit
            </button>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={newBlog.title}
            onChange={e => setNewBlog({ ...newBlog, title: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          {newBlog.cover_image && (
            <p className="text-sm text-green-600 mt-1">✓ New cover image selected: {newBlog.cover_image.name}</p>
          )}
          {editingBlog && editingBlog.cover_image && !newBlog.cover_image && (
            <p className="text-sm text-gray-600 mt-1">
              Current cover image: {editingBlog.cover_image}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <div className="mb-2 flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={insertParagraph}
              className="px-3 cursor-pointer py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Add Paragraph
            </button>
            <button
              type="button"
              onClick={() => formatText('bold')}
              className="px-3 cursor-pointer py-1 bg-yellow-200 text-yellow-700 rounded hover:bg-yellow-300 transition-colors font-bold"
            >
              Bold
            </button>
            <button
              type="button"
              onClick={() => formatText('italic')}
              className="px-3 cursor-pointer py-1 bg-yellow-200 text-yellow-700 rounded hover:bg-yellow-300 transition-colors italic"
            >
              Italic
            </button>
            <button
              type="button"
              onClick={() => formatText('underline')}
              className="px-3 py-1 cursor-pointer bg-yellow-200 text-yellow-700 rounded hover:bg-yellow-300 transition-colors underline"
            >
              Underline
            </button>
            <button
              type="button"
              onClick={insertImageAtCursor}
              disabled={uploadingImage}
              className="px-3 py-1 bg-green-200 cursor-pointer text-green-700 rounded hover:bg-green-300 transition-colors disabled:opacity-50"
            >
              {uploadingImage ? 'Uploading...' : 'Upload Image'}
            </button>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="px-3 py-1 cursor-pointer bg-purple-200 text-purple-700 rounded hover:bg-purple-300 transition-colors"
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            <input
              ref={contentImageInputRef}
              type="file"
              accept="image/*"
              onChange={handleContentImageUpload}
              className="hidden"
            />
          </div>
          {imageUploadProgress && (
            <p className="text-sm text-yellow-600 mb-2">{imageUploadProgress}</p>
          )}
          
          {/* Available Images for Insertion */}
          {newBlog.content_images.length > 0 && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium mb-2">Available Images (click to insert):</p>
              <div className="flex gap-2 flex-wrap">
                {newBlog.content_images.map((imageName, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => insertImagePlaceholder(imageName)}
                    className="relative cursor-pointer group"
                  >
                    <img
                      loading='lazy'
                      src={`${API}/api/uploads/blog-images/${imageName}`}
                      alt={`Image ${index + 1}`}
                      className="w-16 h-16 object-cover rounded border-2 border-transparent group-hover:border-yellow-500 transition-colors"
                    />
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                         onClick={(e) => { e.stopPropagation(); removeContentImage(index); }}>
                      ×
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <textarea
            id="blog-content"
            placeholder="Write your blog content here... Use the buttons above to add paragraphs, format text, and insert images. Formatting: **bold**, *italic*, __underline__. Images will be inserted as [IMAGE:filename] placeholders."
            value={newBlog.content}
            onChange={e => setNewBlog({ ...newBlog, content: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent h-64 resize-y"
            required
          />
        </div>

        {/* Content Preview */}
        {showPreview && newBlog.content && (
          <div className="border rounded-lg p-4 bg-gray-50">
            <h4 className="font-medium mb-3">Content Preview:</h4>
            <div className="prose max-w-none">
              {newBlog.content.split('\n').map((paragraph, index) => (
                <div key={index}>
                  {paragraph.includes('[IMAGE:') ? (
                    <div dangerouslySetInnerHTML={{
                      __html: renderContentPreview(paragraph, newBlog.content_images)
                    }} />
                  ) : paragraph.trim() ? (
                    <p className="mb-4" dangerouslySetInnerHTML={{
                      __html: renderContentPreview(paragraph, [])
                    }} />
                  ) : (
                    <br />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition-colors font-medium disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : editingBlog ? 'Update Blog' : 'Add Blog'}
        </button>
      </form>

      {/* Existing Blogs */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Existing Blogs</h4>
        <div className="space-y-4">
          {blogs.map(blog => (
            <div key={blog.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                {blog.cover_image && (
                  <img
                    loading='lazy'
                    src={`${API}/api/uploads/blog-images/${blog.cover_image}`}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div>
                  <h5 className="font-medium">{blog.title}</h5>
                  <p className="text-sm text-gray-500">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditClick(blog)}
                  className="px-4 cursor-pointer py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="px-4 cursor-pointer py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogManager;