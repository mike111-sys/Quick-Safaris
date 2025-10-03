import { motion } from 'framer-motion';

const Terms = () => {
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
          Terms & Conditions
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          By booking with Quickpulse Safaris & Travel, you agree to the following terms, ensuring a smooth and enjoyable travel experience. Please read carefully.
        </p>
      </motion.div>

      {/* Terms Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 max-w-4xl mx-auto space-y-8"
      >
        {/* Booking Confirmation */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="booking-confirmation">
            Booking Confirmation
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            To secure your booking, you must complete the booking form and pay the required deposit. Final confirmation is subject to availability and receipt of payment.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>A deposit (typically 30% of the total cost) is required at booking.</li>
            <li>Full payment is due 60 days before departure, unless otherwise specified.</li>
            <li>Bookings are not confirmed until we issue a written confirmation.</li>
          </ul>
        </div>

        {/* Payments & Cancellations */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="payments-cancellations">
            Payments & Cancellations
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            We aim to provide flexible payment and cancellation policies, but specific terms depend on our suppliers and your travel dates.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Deposits are non-refundable unless otherwise stated.</li>
            <li>Cancellations 60+ days before departure may incur a 20-50% fee of the total cost.</li>
            <li>Cancellations within 30 days of departure may incur a 100% fee.</li>
            <li>Refunds are processed within 30 days, subject to supplier policies.</li>
          </ul>
        </div>

        {/* Travel Documents */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="travel-documents">
            Travel Documents
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            You are responsible for ensuring all travel documents are valid and appropriate for your itinerary. We can provide guidance but are not liable for issues arising from non-compliance.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Valid passport (with at least 6 months’ validity and blank pages).</li>
            <li>Visas for each country in your itinerary (e.g., Kenya, Tanzania).</li>
            <li>Vaccinations or health certificates as required (e.g., yellow fever).</li>
            <li>Comprehensive travel insurance covering medical emergencies and cancellations.</li>
          </ul>
        </div>

        {/* Liability */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="liability">
            Liability
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            We act as an intermediary between you and our trusted partners, striving to ensure a safe and enjoyable experience. However, we are not liable for events beyond our control.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Unforeseen events such as weather, natural disasters, or political unrest.</li>
            <li>Delays, cancellations, or changes caused by airlines, lodges, or third parties.</li>
            <li>Personal injuries or property loss, unless directly caused by our negligence.</li>
          </ul>
        </div>

        {/* Changes to Itinerary */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="itinerary-changes">
            Changes to Itinerary
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            We strive to deliver your itinerary as planned, but changes may occur due to operational or safety reasons.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>We may substitute accommodations or activities of similar quality if needed.</li>
            <li>You will be notified of significant changes as soon as possible.</li>
            <li>No refunds are guaranteed for minor itinerary adjustments.</li>
          </ul>
        </div>

        {/* Health and Safety */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="health-safety">
            Health and Safety
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            Your safety is our priority, but travel involves inherent risks, particularly in remote areas.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>You must follow safety instructions from guides and local authorities.</li>
            <li>Disclose any medical conditions that may affect your travel.</li>
            <li>We are not responsible for health issues arising from personal choices or pre-existing conditions.</li>
          </ul>
        </div>

        {/* Dispute Resolution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="dispute-resolution">
            Dispute Resolution
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            Any disputes will be handled fairly and in accordance with applicable laws.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 sm:text-base space-y-2">
            <li>Contact us first to resolve issues amicably at{' '}
              <a
                href="mailto:info@qpsafaris.com"
                className="text-amber-600 hover:text-amber-700 transition"
              >
                info@qpsafaris.com
              </a>.
            </li>
            <li>Disputes are governed by the laws of Kenya.</li>
            <li>Mediation or arbitration may be used before legal proceedings.</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900" id="contact-us">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600 sm:text-base">
            For questions about these terms or your booking, reach out to our team at{' '}
            <a
              href="mailto:info@qpsafaris.com"
              className="text-amber-600 hover:text-amber-700 transition"
            >
              info@qpsafaris.com
            </a>.
          </p>
        </div>

        {/* Effective Date */}
        <p className="mt-8 text-sm text-gray-500 text-center">
          Effective date: October 3, 2025
        </p>
      </motion.div>
    </section>
  );
};

export default Terms;