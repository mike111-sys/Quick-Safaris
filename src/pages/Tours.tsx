import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type Tour = {
  title: string
  days: number
  highlights: string[]
  image: string
  blurb: string
}

const tours: Tour[] = [
  {
    title: 'Classic Mara Adventure',
    days: 5,
    highlights: ['Masai Mara game drives', 'Lake Naivasha boat ride', 'Lake Nakuru flamingos'],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop',
    blurb: 'Chase golden horizons and witness big cat drama on the endless plains of the Mara.',
  },
  {
    title: 'Kilimanjaro & Amboseli Escape',
    days: 7,
    highlights: ['Amboseli elephants', 'Mt. Kilimanjaro vistas', 'Cultural village visit'],
    image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1600&auto=format&fit=crop',
    blurb: 'Wake to snow-capped peaks and gentle giants roaming beneath the African sky.',
  },
  {
    title: 'Safari to Sands: Tsavo & Zanzibar',
    days: 10,
    highlights: ['Tsavo red elephants', 'Dhow sunset cruise', 'Stone Town exploration'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
    blurb: 'Trade the bush for beach as you glide from savannah thrills to turquoise stills.',
  },
]

const Tours = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="md:flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">Signature Tours</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">Each itinerary balances adventure with comfort, crafted by experts and tailored to your pace. Customize any package to match your dates, budget, and travel style.</p>
        </div>
        <Link to="/booking" className="mt-4 md:mt-0 inline-block px-4 py-2 rounded bg-emerald-600 text-white font-medium hover:bg-emerald-700">Plan Your Trip</Link>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((t, i) => (
          <motion.article key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="border rounded-lg overflow-hidden bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <div className="text-sm text-gray-500">{t.days} Days</div>
              </div>
              <p className="mt-2 text-gray-600">{t.blurb}</p>
              <ul className="mt-3 text-sm text-gray-600 space-y-1 list-disc pl-4">
                {t.highlights.map((h) => (<li key={h}>{h}</li>))}
              </ul>
              <div className="mt-4 flex gap-3">
                <Link to="/booking" className="px-3 py-2 rounded bg-gray-900 text-white text-sm hover:bg-black">Get Quote</Link>
                <Link to="/contact" className="px-3 py-2 rounded border text-sm hover:bg-gray-50">Ask a Question</Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Tours


