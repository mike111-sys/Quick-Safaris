import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import background_1 from '../assets/amboseli.webp'
import background_2 from '../assets/maasai.webp'
import background_3 from '../assets/serengeti.webp'
import background_4 from '../assets/zanzibar.webp'

// Use the imported images instead of external URLs
const BACKGROUND_IMAGES = [
  background_1, // Amboseli
  background_2, // Maasai Mara
  background_3, // Serengeti
  background_4, // Zanzibar
]

const useImagePreload = (urls: string[]) => {
  useEffect(() => {
    urls.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }, [urls])
}

const Hero = () => {
  const images = useMemo(() => BACKGROUND_IMAGES, [])
  const [index, setIndex] = useState(0)
  useImagePreload(images)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section className="relative h-[91vh] md:h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-2xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold">
            Quickpulse Safaris & Travel
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-gray-100">
            Your gateway to extra-ordinary journeys
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3">
            <Link to="/experiences" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-emerald-600 hover:bg-emerald-700 font-medium">
              Explore Experiences <FaArrowRight />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 font-medium">
              Plan Your Trip
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
