import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    q: 'When is the best time for a safari?',
    a: 'June to October is ideal for game viewing in East Africa due to dry weather and wildlife migrations. Coastal escapes shine from December to March. We tailor trips year-round to your preferences.',
  },
  {
    q: 'Do you handle flights and transfers?',
    a: 'Yes, we arrange regional flights, airport pickups, ground transfers, and select accommodations to ensure a seamless journey.',
  },
  {
    q: 'Is travel safe?',
    a: 'Your safety is our priority. We partner with vetted guides and accommodations, provide up-to-date advisories, and share travel tips for a secure experience.',
  },
  {
    q: 'Can tours be customized?',
    a: 'Absolutely, every itinerary is adjustable to your dates, budget, travel style, and group size—perfect for solo travelers, couples, families, or groups.',
  },
  {
    q: 'What are the visa requirements for East Africa?',
    a: 'Visa requirements vary by country (e.g., Kenya, Tanzania, Uganda). Most travelers need a tourist visa, often available online or on arrival. We’ll guide you through the process based on your nationality.',
  },
  {
    q: 'What is the typical group size for tours?',
    a: 'Our tours range from private trips for 1-2 people to small groups of up to 12, ensuring a personalized experience. Larger groups can be accommodated upon request.',
  },
  {
    q: 'How do you support sustainable travel?',
    a: 'We prioritize eco-friendly practices, partnering with lodges and operators that support conservation and local communities, minimizing environmental impact.',
  },
  {
    q: 'What payment options are available?',
    a: 'We accept major credit cards, bank transfers, and secure online payments. Flexible payment plans are available, and we’ll provide details during booking.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

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
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Planning your African adventure? Find answers to common questions below or reach out to our team for personalized assistance.
        </p>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`border rounded-lg bg-white shadow-sm ${
                  isOpen ? 'border-amber-600' : 'border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left cursor-pointer flex items-center justify-between p-6 hover:bg-amber-50 transition"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-lg font-medium text-gray-900">{f.q}</span>
                  <span className="text-amber-600 text-xl font-bold">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-600 sm:text-base">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;