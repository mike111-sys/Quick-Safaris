import { motion } from 'framer-motion'
import image_1 from '../assets/About Page/image-1.webp'
import image_2 from '../assets/About Page/image-2.webp'
import image_3 from '../assets/About Page/image-3.webp'
import image_4 from '../assets/About Page/image-4.webp'

const About = () => {
  const images = [
    { src: image_1, alt: 'African safari landscape' },
    { src: image_2, alt: 'Cultural village experience' },
    { src: image_3, alt: 'Wildlife encounter' },
    { src: image_4, alt: 'Adventure expedition' },
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-600">
            Discover the Heart of Quickpulse Safaris & Travel
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At Quickpulse Safaris & Travel, we don’t just plan trips, we craft transformative journeys that connect you with the soul of Africa.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1">
        <div className="grid  md:grid-cols-2 gap-8 sm:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-center md:text-start font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded with a passion for showcasing Africa’s unparalleled beauty, Quickpulse Safaris & Travel was born from a desire to create authentic, immersive experiences. Our journey began in the heart of Nairobi, Kenya, inspired by the call of the wild and the rich cultural heritage that surrounds us. Over the years, we’ve grown into a trusted name in bespoke travel, curating adventures that blend wildlife safaris, cultural explorations, adrenaline-pumping expeditions, and serene beach escapes.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every itinerary we design is a love letter to Africa, a continent that pulses with life, diversity, and wonder. Whether it’s tracking the Big Five across the Serengeti, sharing stories with Maasai communities, or unwinding on the pristine shores of Zanzibar, we’re here to make your journey unforgettable.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-12 h-12 bg-amber-600 rounded-full"
              />
            </div>
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="relative w-full h-full object-cover transition-opacity duration-700"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl text-center md:text-start font-bold text-gray-900">Our Mission & Vision</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Our Mission</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    To craft extraordinary travel experiences that inspire a deep appreciation for Africa’s natural wonders and cultural heritage. We are committed to sustainable tourism that supports conservation efforts and empowers local communities, ensuring every journey leaves a positive impact.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Our Vision</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    To redefine travel by creating personalized, meaningful adventures that connect travelers with the heart of Africa. We aim to be the leading curator of authentic experiences, fostering a global community united by a love for exploration and respect for the planet.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 bg-amber-600 rounded-full"
                />
              </div>
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="relative w-full h-full object-cover transition-opacity duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Quickpulse?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At Quickpulse Safaris & Travel, we believe travel is more than just a destination—it’s a story, a connection, a moment that stays with you forever. Here’s what sets us apart:
          </p>
        </motion.div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Tailor-Made Adventures',
              desc: 'Your journey, your way. We design every trip to match your pace, style, and budget, ensuring a personalized experience that feels uniquely yours.',
            },
            {
              title: 'Expert Local Guides',
              desc: 'Our guides are storytellers, conservationists, and locals who bring Africa’s landscapes and cultures to life with passion and expertise.',
            },
            {
              title: 'Sustainable Tourism',
              desc: 'We’re committed to eco-friendly travel that protects wildlife, preserves natural habitats, and supports the communities we visit.',
            },
            {
              title: 'Seamless Planning',
              desc: 'From handpicked lodges to flawless logistics, we handle every detail so you can focus on the adventure and make memories that last a lifetime.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl text-center md:text-start font-bold text-gray-900">Our Core Values</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our values guide everything we do, from the way we design your journey to how we engage with the world around us. At Quickpulse, we believe in:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                <li><span className="font-semibold">Authenticity:</span> Creating genuine experiences that connect you with Africa’s true essence.</li>
                <li><span className="font-semibold">Sustainability:</span> Protecting the environment and supporting local communities for future generations.</li>
                <li><span className="font-semibold">Excellence:</span> Delivering exceptional service with attention to every detail.</li>
                <li><span className="font-semibold">Adventure:</span> Inspiring bold, transformative journeys that push boundaries and spark wonder.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 bg-amber-600 rounded-full"
                />
              </div>
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="relative w-full h-full object-cover transition-opacity duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
  )
}

export default About