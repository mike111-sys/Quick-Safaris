import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import image from '../assets/Home Sections/safari.webp'
import image_blur from '../assets/Home Sections/safari-blur.webp'
import beach from '../assets/Home Sections/beach.webp'
import beach_blur from '../assets/Home Sections/beach-blur.webp'
import cultural from '../assets/Home Sections/community.webp'
import cultural_blur from '../assets/Home Sections/community-blur.webp'
import adventure from '../assets/Home Sections/travel.webp'
import adventure_blur from '../assets/Home Sections/travel-blur.webp'
import luxury from '../assets/Home Sections/luxury.webp'
import luxury_blur from '../assets/Home Sections/luxury-blur.webp'
import wildlife from '../assets/Home Sections/wildlife.webp'
import wildlife_blur from '../assets/Home Sections/wildlife-blur.webp'
import trekking from '../assets/Home Sections/trekking.webp'
import trekking_blur from '../assets/Home Sections/trekking-blur.webp'
import { Compass, Leaf, Plane, MapPin, Building2 } from "lucide-react";


const HomeSections = () => {
  const services = [
    { name: 'Wildlife Safaris', image: wildlife, imageBlur: wildlife_blur, alt: 'Wildlife safari' },
    { name: 'Cultural & Community Tours', image: cultural, imageBlur: cultural_blur, alt: 'Cultural tour' },
    { name: 'Travel Logistics', image: adventure, imageBlur: adventure_blur, alt: 'Travel logistics' },
    { name: 'Trekking & Adventure', image: trekking, imageBlur: trekking_blur, alt: 'Adventure trekking' },
    { name: 'Luxury & Mid-Range Packages', image: luxury, imageBlur: luxury_blur, alt: 'Luxury travel' },
    { name: 'Beach Escapes', image: beach, imageBlur: beach_blur, alt: 'Beach escape' }
  ]

  

  return (
    <div>
      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl  md:text-3xl font-bold">About Quickpulse</h2>
            <p className="mt-3 text-gray-600">
              We craft authentic safaris & travel experiences across Africa, 
              from wildlife encounters and cultural immersions to luxury getaways 
              and adventure expeditions. Every journey is tailored to you.
            </p>
            <Link 
              to="/about" 
              className="inline-block mt-4 px-4 py-2 rounded bg-amber-600 text-white hover:bg-amber-700 transition"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Image with Blur Loading */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7, delay: 0.2 }} 
            className="aspect-[3/2] rounded-lg overflow-hidden relative"
          >
            <img 
              src={image_blur} 
              alt="Safari jeep blurred placeholder" 
              className="absolute inset-0 w-full h-full object-cover blur-lg scale-105"
            />
            <img 
              src={image} 
              alt="Safari jeep" 
              className="relative w-full h-full object-cover transition-opacity duration-700"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl text-center font-bold">Our Services</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={s.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border rounded-lg bg-white shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="relative aspect-[5/4] w-full">
                  <img 
                    src={s.imageBlur} 
                    alt={`${s.alt} blurred placeholder`} 
                    className="absolute inset-0 w-full h-full object-cover blur-lg scale-105"
                  />
                  <img 
                    src={s.image} 
                    alt={s.alt} 
                    className="relative w-full h-full object-cover transition-opacity duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="font-semibold">{s.name}</div>
                  <p className="mt-2 text-gray-600">
                    Tailored to your style and budget with expert guides and seamless planning.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* Why Travel Section */}
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-2xl md:text-3xl text-center font-bold">Why Travel With Us?</h2>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {[
      { title: 'Expert Guides', desc: 'Local knowledge, passion, and safety first.', icon: <Compass className="w-12 h-12 text-amber-500 animate-spin-slow" /> },
      { title: 'Eco-Friendly', desc: 'Supporting conservation & communities.', icon: <Leaf className="w-12 h-12 text-green-600 animate-bounce" /> },
      { title: 'Seamless Travel', desc: 'We handle everything end-to-end.', icon: <Plane className="w-12 h-12 text-sky-500 animate-float" /> },
      { title: 'Tailor-Made', desc: 'Every journey fits your style & budget.', icon: <MapPin className="w-12 h-12 text-orange-500 animate-pulse" /> },
      { title: 'Corporate Travel', desc: 'Professional travel management for your team or business.', icon: <Building2 className="w-12 h-12 text-blue-600 animate-spin-slow" /> },
    ].map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="border rounded-lg shadow-sm hover:shadow-lg transition-all bg-white p-6 flex flex-col items-center text-center hover:-translate-y-1"
      >
        <div className="mb-4">{item.icon}</div>
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="mt-2 text-gray-600">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  )
}

export default HomeSections