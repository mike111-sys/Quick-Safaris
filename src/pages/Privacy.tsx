import { motion } from 'framer-motion';

const Privacy = () => {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          At Quickpulse Safaris & Travel, we value your privacy. This policy outlines how we collect, use, and protect your personal information to ensure a secure and personalized experience.
        </p>
      </motion.div>

      {/* Privacy Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 max-w-4xl mx-auto space-y-8"
      >
        {/* Information We Collect */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="info-collected">
            Information We Collect
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            We collect only the information necessary to provide you with a seamless travel planning experience. This includes:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Contact details you provide, such as name, email address, and phone number.</li>
            <li>Trip preferences, including destinations, travel dates, and accommodation choices submitted via our forms.</li>
            <li>Messages or special requests shared through our contact or booking forms.</li>
            <li>Website usage data, such as pages visited, to improve our services.</li>
          </ul>
        </div>

        {/* How We Use Your Data */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="data-use">
            How We Use Your Data
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            Your information helps us craft personalized travel experiences and improve our services. We use it to:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Plan and manage your travel arrangements, including bookings and itineraries.</li>
            <li>Respond to your inquiries, provide quotes, and offer tailored recommendations.</li>
            <li>Enhance our website functionality and user experience based on usage patterns.</li>
            <li>Send you updates about your trip or relevant travel information, with your consent.</li>
          </ul>
        </div>

        {/* Data Sharing */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="data-sharing">
            Data Sharing
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            We share your information only when necessary to fulfill your travel plans or comply with legal requirements. This includes:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Trusted partners like lodges, tour operators, or airlines to coordinate your trip.</li>
            <li>Service providers for payment processing or website analytics, who are bound by strict confidentiality agreements.</li>
            <li>Authorities, if required by law or to protect our rights.</li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="data-security">
            Data Security
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            We take your data security seriously, employing industry-standard measures to protect it, such as:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Secure encryption for data transmission (e.g., SSL/TLS).</li>
            <li>Restricted access to your information within our team.</li>
            <li>Regular audits to ensure our systems remain secure.</li>
          </ul>
        </div>

        {/* Cookies and Tracking */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="cookies-tracking">
            Cookies and Tracking
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            Our website uses cookies to enhance your experience. These include:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Essential cookies for website functionality (e.g., form submissions).</li>
            <li>Analytics cookies to understand how you interact with our site.</li>
            <li>You can manage cookie preferences via your browser settings.</li>
          </ul>
        </div>

        {/* Your Rights */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="your-rights">
            Your Rights
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            You have control over your personal information. Your rights include:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Accessing the data we hold about you.</li>
            <li>Requesting corrections to inaccurate or incomplete information.</li>
            <li>Requesting deletion of your data, subject to legal obligations.</li>
            <li>Opting out of marketing communications at any time.</li>
          </ul>
          <p className="mt-4 text-gray-600 sm:text-base">
            To exercise these rights, contact us at{' '}
            <a
              href="mailto:info@qpsafaris.com"
              className="text-amber-600 hover:text-amber-700 transition"
            >
              info@qpsafaris.com
            </a>.
          </p>
        </div>

      
      </motion.div>
    </section>
  );
};

export default Privacy;