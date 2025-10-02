import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'When is the best time for a safari?', a: 'June to October offer prime game viewing in East Africa, while coastal escapes shine December to March. We tailor trips year-round to your preferences.' },
  { q: 'Do you handle flights and transfers?', a: 'Yes. We can arrange regional flights, airport pickups, ground transfers, and select accommodations to streamline your journey.' },
  { q: 'Is travel safe?', a: 'Your safety is our priority. We partner with vetted guides and accommodations and share up-to-date advisories and travel tips.' },
  { q: 'Can tours be customized?', a: 'Absolutely. Every itinerary can be adjusted to your dates, budget, style, and pace—solo, couples, families, or groups.' },
]

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="mt-6 divide-y">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="py-4">
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left flex items-center justify-between">
                <span className="font-medium">{f.q}</span>
                <span className="text-gray-500">{isOpen ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden text-gray-600 pt-2">
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ


