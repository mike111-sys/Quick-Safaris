import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  User,
  Mail,
  Globe,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const API = import.meta.env.VITE_API_URL;

type Blog = {
  id: number;
  title: string;
  content: string;
  cover_image: string | null;
  content_images: string[];
  created_at: string;
};

type Props = { id: string };

const BlogDetail: React.FC<Props> = ({ id }) => {
  // Scroll to top whenever the blog id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("idle");

    const payload = {
      access_key: "9d626b45-f38f-46a2-a00a-0e5d95e9ccd1",
      subject: `New Comment on Blog: ${blog?.title}`,
      from_name: "Debtime Blog",
      name: formData.name,
      email: formData.email,
      website: formData.website,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", website: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  useEffect(() => {
    fetch(`${API}/api/blogs`)
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  useEffect(() => {
    if (id) {
      fetch(`${API}/api/blogs/${id}`)
        .then((res) => res.json())
        .then(setBlog);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-yellow-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  // Find current index for navigation
  const currentIndex = blogs.findIndex((b) => b.id === Number(id));
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  // Function to render content with embedded images and formatting
  const renderContentWithImages = (content: string) => {
    let renderedContent = content;

    const imagePlaceholderRegex = /\[IMAGE:([^\]]+)\]/g;
    const matches = Array.from(content.matchAll(imagePlaceholderRegex));

    for (let i = matches.length - 1; i >= 0; i--) {
      const match = matches[i];
      const imageName = match[1];
      const placeholder = match[0];

      const nextMatch = matches[i + 1];
      const isConsecutive = nextMatch && nextMatch.index! - match.index! < 50;

      if (isConsecutive && i < matches.length - 1) {
        continue;
      }

      const prevMatch = matches[i - 1];
      const isPartOfGroup = prevMatch && match.index! - prevMatch.index! < 50;

      if (isPartOfGroup) {
        const groupStart = i - 1;
        const groupEnd = i;
        const groupImages = [];

        for (let j = groupStart; j <= groupEnd; j++) {
          if (j >= 0 && j < matches.length) {
            groupImages.push(matches[j][1]);
          }
        }

        const gridImages = groupImages
          .map(
            (imgName, index) => `
          <div class="bg-gray-200 rounded-lg p-3 shadow-sm">
            <img 
            loading="lazy"
            src="${API}/api/uploads/blog-images/${imgName}" 
                 alt="Blog image ${index + 1}" 
                 class="w-full h-48 md:h-56 object-contain rounded-lg shadow-sm hover:scale-105 transition-transform duration-700" />
          </div>
        `
          )
          .join("");

        const gridElement = `
          <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            ${gridImages}
          </div>
        `;

        const firstPlaceholder = matches[groupStart][0];
        renderedContent = renderedContent.replace(
          firstPlaceholder,
          gridElement
        );

        for (let j = groupStart + 1; j <= groupEnd; j++) {
          if (j < matches.length) {
            const otherPlaceholder = matches[j][0];
            renderedContent = renderedContent.replace(otherPlaceholder, "");
          }
        }

        i = groupStart;
      } else {
        const imageElement = `
          <div class="my-8 flex justify-center">
            <div class="bg-gray-200 rounded-lg p-4 max-w-3xl shadow-sm">
              <img
              loading="lazy"
              src="${API}/api/uploads/blog-images/${imageName}" 
                   alt="Blog image" 
                   class="w-full h-64 md:h-80 object-contain rounded-lg shadow-sm hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        `;
        renderedContent = renderedContent.replace(placeholder, imageElement);
      }
    }

    renderedContent = renderedContent
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-800">$1</em>')
      .replace(/__(.*?)__/g, '<u class="underline decoration-2 decoration-yellow-600">$1</u>');

    return renderedContent;
  };

  const renderBlogContent = () => {
    const paragraphs = blog.content.split("\n");

    return paragraphs.map((paragraph, index) => {
      if (paragraph.includes("[IMAGE:")) {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            dangerouslySetInnerHTML={{
              __html: renderContentWithImages(paragraph),
            }}
          />
        );
      } else if (paragraph.trim()) {
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="mb-6 leading-relaxed text-gray-600 text-lg"
            dangerouslySetInnerHTML={{
              __html: renderContentWithImages(paragraph),
            }}
          />
        );
      } else {
        return <br key={index} />;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-24 h-24 bg-yellow-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-gray-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
      </div>

      <section className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate("/blog")}
            className="group cursor-pointer mb-8 inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-yellow-50 text-yellow-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </motion.button>

          {/* Cover Image */}
          {blog.cover_image && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img
                  loading="lazy"
                  src={`${API}/api/uploads/blog-images/${blog.cover_image}`}
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-contain rounded-lg shadow-sm hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          )}

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 leading-tight mb-6">
              {blog.title}
            </h1>

            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-lg text-sm font-medium border border-yellow-200">
              <Calendar className="w-4 h-4 text-yellow-600" />
              {new Date(blog.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-white rounded-lg p-8 md:p-12 shadow-md border border-gray-200 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              {renderBlogContent()}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-center mb-16"
          >
            {prevBlog ? (
              <button
                onClick={() => navigate(`/blog/${prevBlog.id}`)}
                className="group cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="truncate">Previous: {prevBlog.title}</span>
              </button>
            ) : (
              <div className="w-full"></div>
            )}

            {nextBlog && (
              <button
                onClick={() => navigate(`/blog/${nextBlog.id}`)}
                className="group cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 justify-end"
              >
                <span className="truncate">Next: {nextBlog.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </motion.div>

          {/* Comment Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="bg-white rounded-lg p-8 shadow-md border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Share Your Thoughts
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
                    <User className="w-4 h-4 text-yellow-600" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
                    <Mail className="w-4 h-4 text-yellow-600" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
                  <Globe className="w-4 h-4 text-yellow-600" />
                  Website (optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Your Comment
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                  placeholder="Share your thoughts about this blog..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <button
                  type="submit"
                  className="group cursor-pointer w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 justify-center"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  Submit Comment
                </button>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-yellow-600 font-medium"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Comment submitted successfully!
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-red-600 font-medium"
                  >
                    <AlertCircle className="w-5 h-5" />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;