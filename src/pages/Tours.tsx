import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Tours = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tour: '',
    travelDate: '',
    travelers: 1,
    accommodation: '',
    otherAccommodation: '',
    budget: '',
    requests: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Placeholder for form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
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
          Book Your Adventure
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Let Quickpulse Safaris & Travel craft your dream journey. Fill out the form below, and our experts will design a personalized itinerary tailored to your preferences.
        </p>
      </motion.div>

      {/* Booking Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Personal Information */}
          <div className="space-y-8">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                placeholder="John Doe"
                required
              />
            </div>

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
                placeholder="john.doe@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                placeholder="+1 123 456 7890"
              />
            </div>
          </div>

          {/* Column 2: Trip Details */}
          <div className="space-y-8">
            <div>
              <label htmlFor="tour" className="block text-sm font-medium text-gray-700">
                Preferred Tour <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                id="tour"
                name="tour"
                value={formData.tour}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                placeholder="e.g., Maasai Mara, Serengeti, Zanzibar, Amboseli..."
                required
              />
            </div>

            <div>
              <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700">
                Preferred Travel Date <span className="text-amber-600">*</span>
              </label>
              <input
                type="date"
                id="travelDate"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                required
              />
            </div>

            <div>
              <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">
                Number of Travelers <span className="text-amber-600">*</span>
              </label>
              <input
                type="number"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleInputChange}
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                required
              />
            </div>
          </div>

          {/* Full-width fields */}
          <div className="md:col-span-2">
            <label htmlFor="accommodation" className="block text-sm font-medium text-gray-700">
              Accommodation Preference
            </label>
            <select
              id="accommodation"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
            >
              <option value="">Select accommodation type</option>
              <option value="Luxury Lodges">Luxury Lodges</option>
              <option value="Tented Camps">Tented Camps</option>
              <option value="Budget Accommodations">Budget Accommodations</option>
              <option value="Mixed">Mixed (Combination)</option>
              <option value="Other">Other</option>
            </select>

            {/* Conditional "Other" Input Field */}
            {formData.accommodation === 'Other' && (
              <motion.div
                key="otherAccommodation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2"
              >
                <label htmlFor="otherAccommodation" className="block text-sm font-medium text-gray-700">
                  Please specify
                </label>
                <input
                  type="text"
                  id="otherAccommodation"
                  name="otherAccommodation"
                  value={formData.otherAccommodation}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
                  placeholder="E.g., Treehouses, Glamping sites, Boutique hotels..."
                />
              </motion.div>
            )}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget per Person
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
              placeholder="Enter your budget per person, e.g., $3,000"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="requests" className="block text-sm font-medium text-gray-700">
              Special Requests
            </label>
            <textarea
              id="requests"
              name="requests"
              value={formData.requests}
              onChange={handleInputChange}
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-base py-3"
              placeholder="E.g., dietary requirements, accessibility needs, or specific activities"
            />
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row sm:justify-between sm:items-center mt-8 gap-4">
  <p className="text-sm text-gray-600 text-center sm:text-left">
    <span className="text-amber-600">*</span> Required fields
  </p>
  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
    <button
      onClick={handleSubmit}
      className="w-full sm:w-auto px-6 py-3 rounded bg-amber-600 text-white font-medium hover:bg-amber-700 transition text-sm sm:text-base"
    >
      Submit Booking Request
    </button>
    <Link
      to="/contact"
      className="w-full sm:w-auto px-6 py-3 rounded border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition sm:text-base text-center"
    >
      Contact Us
    </Link>
  </div>
</div>

        </div>
      </motion.div>
    </section>
  );
};

export default Tours;