import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage('');

    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      alert('Please fill out all required fields: ' + missingFields.join(', '));
      setIsSubmitting(false);
      return;
    }

    const formPayload = {
      access_key: '9d626b45-f38f-46a2-a00a-0e5d95e9ccd1',
      ...formData,
      subject: 'New Contact Message from Quickpulse Safaris',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage('Your message has been sent successfully!');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred while submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-amber-600">
          Get in Touch with Quickpulse Safaris
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions or need help planning your African adventure? Reach out to our team, and we’ll respond promptly to assist you.
        </p>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-sm"
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Name */}
            <div className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            {/* Column 2: Email */}
            <div className="space-y-8">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address <span className="text-amber-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            {/* Full-width field: Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-amber-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                placeholder="Tell us how we can assist you with your travel plans..."
                required
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:justify-between sm:items-center mt-8 gap-4">
              <p className="text-sm text-gray-600 text-center sm:text-left">
                <span className="text-amber-600">*</span> Required fields
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full cursor-pointer sm:w-auto px-6 py-3 rounded font-medium text-sm sm:text-base transition
                    ${isSubmitting ? 'bg-amber-400 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700 text-white'}
                  `}
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
                <Link
                  to="/"
                  className="w-full sm:w-auto px-6 py-3 rounded border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition sm:text-base text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </form>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 text-center text-green-600 font-semibold bg-green-50 border border-green-200 py-3 rounded-md"
          >
            {successMessage}
          </motion.div>
        )}
      </motion.div>

      {/* Contact Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900">Contact Us Directly</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Prefer to reach out directly? Our team is here to help you plan your journey.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:info@qpsafaris.com"
              className="text-amber-600 hover:text-amber-700 transition"
            >
              info@qpsafaris.com
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Phone:</span>{' '}
            <a
              href="tel:+254704041059"
              className="text-amber-600 hover:text-amber-700 transition"
            >
              +254 704 041 059
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;