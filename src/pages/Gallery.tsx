import { motion } from 'framer-motion'

const IMAGES = [
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534313299-7c3c69a4f905?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519669011783-4eaa95fa0ed2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-9f53f6db0e4d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-3 text-gray-600">A glimpse of the wild — from sweeping savannahs to powder-soft beaches.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {IMAGES.map((src, i) => (
          <motion.div key={src} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="aspect-square overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src={src} alt="Gallery" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gallery


