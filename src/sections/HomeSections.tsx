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
import tailor_made from '../assets/Home Sections/tailor.webp'
import tailor_made_blur from '../assets/Home Sections/tailor-blur.webp'
import eco_friendly from '../assets/Home Sections/eco.webp'
import eco_friendly_blur from '../assets/Home Sections/eco-blur.webp'
import expert_guides from '../assets/Home Sections/expert.webp'
import expert_guides_blur from '../assets/Home Sections/expert-blur.webp'
import seamless from '../assets/Home Sections/travels.webp'
import seamless_blur from '../assets/Home Sections/travels-blur.webp'


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
            className="aspect-video rounded-lg overflow-hidden relative"
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
                <div className="relative aspect-[4/3] w-full">
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
  <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
    {[
      { title: 'Expert Guides', desc: 'Local knowledge, passion, and safety first.', image: expert_guides, blur: expert_guides_blur, alt: 'Expert guides' },
      { title: 'Eco-Friendly', desc: 'Supporting conservation & communities.', image: eco_friendly, blur: eco_friendly_blur, alt: 'Eco friendly' },
      { title: 'Seamless Travel', desc: 'We handle everything end-to-end.', image: seamless, blur: seamless_blur, alt: 'Seamless travel' },
      { title: 'Tailor-Made', desc: 'Every journey fits your style & budget.', image: tailor_made, blur: tailor_made_blur, alt: 'Tailor made' }

    ].map((c, i) => (
      <motion.div 
        key={c.title} 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full">
          <img 
            src={c.blur} 
            alt={`${c.alt} blurred`} 
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-105"
          />
          <img 
            src={c.image} 
            alt={c.alt} 
            className="relative w-full h-full object-cover transition-opacity duration-700"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="p-6">
          <div className="font-semibold">{c.title}</div>
          <p className="mt-2 text-gray-600">{c.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
    </div>
  )
}

export default HomeSections