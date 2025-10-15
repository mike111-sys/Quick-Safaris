import React, { useState } from 'react';
import { Trash2, User, Mail, MessageSquare } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  email: string;
  content: string;
  created_at: string;
};

type Props = {
  testimonials: Testimonial[];
  handleAddTestimonial: (testimonial: Omit<Testimonial, 'id' | 'created_at' | 'is_approved'>) => Promise<void>;
  handleDeleteTestimonial: (id: number) => Promise<void>;
};

const TestimonialManager: React.FC<Props> = ({
  testimonials,
  handleAddTestimonial,
  handleDeleteTestimonial,
}) => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    email: '',
    content: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAddTestimonial(newTestimonial);
    setNewTestimonial({ name: '', email: '', content: '' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-2xl border border-yellow-100">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mb-4 shadow-lg">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-yellow-900 mb-2">Manage Testimonials</h3>
        <p className="text-yellow-600 text-sm">Add and manage client testimonials</p>
      </div>

      {/* Add Testimonial Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-yellow-50 p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-yellow-700 mb-1">Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-4 h-4 text-yellow-400" />
              </div>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                className="pl-10 w-full rounded-lg border border-yellow-200 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Client name"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-yellow-700 mb-1">Email (optional)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-4 h-4 text-yellow-400" />
              </div>
              <input
                type="email"
                value={newTestimonial.email}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, email: e.target.value })}
                className="pl-10 w-full rounded-lg border border-yellow-200 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="client@example.com"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-yellow-700 mb-1">Testimonial</label>
          <textarea
            value={newTestimonial.content}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
            className="w-full rounded-lg border border-yellow-200 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
            placeholder="What they say about your service..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 font-medium shadow-lg"
        >
          Add Testimonial
        </button>
      </form>

      {/* Testimonials List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-yellow-900">All Testimonials</h4>
          <div className="text-sm text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
            {testimonials.length} {testimonials.length === 1 ? 'testimonial' : 'testimonials'}
          </div>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-12 bg-yellow-50/50 rounded-xl border border-yellow-100">
            <MessageSquare className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
            <p className="text-yellow-600 font-medium mb-1">No testimonials yet</p>
            <p className="text-yellow-400 text-sm">Add your first testimonial above</p>
          </div>
        ) : (
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`p-4 bg-white border-2 rounded-xl ${
           'border-green-100'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-yellow-900">{testimonial.name}</h4>
                    {testimonial.email && (
                      <p className="text-xs text-yellow-500">{testimonial.email}</p>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDeleteTestimonial(testimonial.id)}
                      className="p-1 cursor-pointer  rounded-full bg-red-100 text-red-500 hover:bg-red-200"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-2">"{testimonial.content}"</p>
                <p className="text-xs text-gray-400">
                  {new Date(testimonial.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialManager;