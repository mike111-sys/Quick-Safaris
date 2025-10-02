import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import background_1 from '../assets/amboseli.webp'
import background_2 from '../assets/maasai.webp'
import background_3 from '../assets/serengeti.webp'
import background_4 from '../assets/zanzibar.webp'
import background_1_blur from '../assets/amboseli-blur.webp'
import background_2_blur from '../assets/maasai-blur.webp'
import background_3_blur from '../assets/serengeti-blur.webp'
import background_4_blur from '../assets/zanzibar-blur.webp'

interface Image {
  full: string;
  blur: string;
}

const BACKGROUND_IMAGES: Image[] = [
  { full: background_1, blur: background_1_blur }, // Amboseli
  { full: background_2, blur: background_2_blur }, // Maasai Mara
  { full: background_3, blur: background_3_blur }, // Serengeti
  { full: background_4, blur: background_4_blur }, // Zanzibar
]

const useNextImagePreload = (images: Image[], index: number) => {
  useEffect(() => {
    const nextIndex = (index + 1) % images.length
    const img = new Image()
    img.src = images[nextIndex].full
  }, [index, images])
}


const Hero = () => {
  const images = useMemo(() => BACKGROUND_IMAGES, [])
  const [index, setIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.9, left: 0, behavior: 'smooth' })
  }
  

  useNextImagePreload(images, index)

  useEffect(() => {
    const img = new Image()
    img.src = images[index].full
    img.onload = () => setIsLoaded(true)
  }, [index, images])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
      setIsLoaded(false)
    }, 5000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section className="relative h-[91vh] md:h-[92vh] w-full overflow-hidden">
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
              backgroundImage: `url(${isLoaded ? images[index].full : images[index].blur})`,
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
            className="mt-8 flex flex-wrap gap-5">
            <Link to="/experiences" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-emerald-600 hover:bg-emerald-700 font-medium">
              Explore Experiences <FaArrowRight />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 font-medium">
              Plan Your Trip
            </Link>
          </motion.div>
          <motion.button
  onClick={handleScrollDown}
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.55, duration: 0.6 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 flex items-center justify-center w-12 h-12 rounded-full border border-white/40 text-white/90 hover:text-white hover:border-white cursor-pointer"
>
  <FaArrowDown className="animate-bounce" />
</motion.button>



        </div>
      </div>
    </section>
  )
}

export default Hero