import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomeSections = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">About Quickpulse</h2>
            <p className="mt-3 text-gray-600">We craft authentic safaris & travel experiences across Africa — from wildlife encounters and cultural immersions to luxury getaways and adventure expeditions. Every journey is tailored to you.</p>
            <Link to="/about" className="inline-block mt-4 px-4 py-2 rounded bg-gray-900 text-white hover:bg-black">Learn More</Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-video rounded-lg overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1600&auto=format&fit=crop" alt="Safari jeep" />
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Wildlife Safaris', 'Cultural & Community Tours', 'Trekking & Adventure', 'Luxury & Mid-Range Packages', 'Beach Escapes', 'Travel Logistics'].map((s) => (
              <div key={s} className="border rounded-lg p-6 bg-white">
                <div className="font-semibold">{s}</div>
                <p className="mt-2 text-gray-600">Tailored to your style and budget with expert guides and seamless planning.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Why Travel With Us?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Tailor-Made', desc: 'Every journey fits your style & budget.' },
            { title: 'Expert Guides', desc: 'Local knowledge, passion, and safety first.' },
            { title: 'Eco-Friendly', desc: 'Supporting conservation & communities.' },
            { title: 'Seamless Travel', desc: 'We handle everything end-to-end.' },
          ].map((c) => (
            <div key={c.title} className="border rounded-lg p-6">
              <div className="font-semibold">{c.title}</div>
              <p className="mt-2 text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-2xl md:text-3xl font-bold">Ready to Feel the Pulse of Adventure?</div>
            <p className="text-emerald-50">Let’s plan a trip you’ll remember forever.</p>
          </div>
          <Link to="/contact" className="px-5 py-3 rounded bg-white text-emerald-700 font-medium hover:bg-gray-100">Plan Your Trip</Link>
        </div>
      </section>
    </div>
  )
}

export default HomeSections


