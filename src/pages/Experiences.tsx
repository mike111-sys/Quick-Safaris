import { motion } from 'framer-motion';
import classic from '../assets/Experiences Page/classic-safari-adventure.webp';
import wilderness from '../assets/Experiences Page/wilderness-culture.webp';
import beach from '../assets/Experiences Page/beach-escape.webp';
import ScrollToTop from '../components/ScrollToTop';

const Experiences = () => {
  const experiences = [
    {
      title: 'Classic Safari Adventure (5 Days)',
      desc: 'Embark on an unforgettable journey through Kenya’s iconic landscapes. Witness the Great Migration in the Maasai Mara, marvel at flamingo-filled Lake Nakuru, and cruise the serene waters of Lake Naivasha. This adventure blends thrilling wildlife encounters with breathtaking scenery, perfect for first-time safari-goers.',
      img: classic,
      alt: 'Classic safari adventure in Maasai Mara',
    },
    {
      title: 'Wilderness & Culture (7 Days)',
      desc: 'Immerse yourself in the untamed beauty of Samburu, the rolling plains of Laikipia, and the misty forests of the Aberdares. Connect with local communities, track rare species like the Grevy’s zebra, and experience the rich cultural tapestry of Kenya’s northern frontier.',
      img: wilderness,
      alt: 'Cultural and wilderness experience in Samburu',
    },
    {
      title: 'Safari & Beach Escape (10 Days)',
      desc: 'Combine the thrill of safari with the tranquility of the coast. Track elephants against the backdrop of Mount Kilimanjaro in Amboseli, explore the vast wilderness of Tsavo, and unwind on the pristine beaches of Zanzibar, where turquoise waters and coral reefs await.',
      img: beach,
      alt: 'Safari and beach escape in Zanzibar',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <ScrollToTop />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-amber-600">
          Craft Your African Adventure
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          At Quickpulse Safaris & Travel, every journey sparks adventure. From thrilling wildlife safaris to vibrant cultural experiences and tranquil coastal escapes, we connect you with Africa’s essence.
        </p>
      </motion.div>

      {/* Experiences Section */}
      <div className="mt-12 space-y-12">


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden max-w-sm  mx-auto"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-6 bg-amber-600 rounded-full"
                  />
                </div>
                <img
                  src={experience.img}
                  alt={experience.alt}
                  className="relative w-full h-full object-cover transition-opacity duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-md text-gray-800">{experience.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{experience.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900">Why Our Experiences?</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our journeys blend adventure, authenticity, and sustainability for unforgettable moments.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Personalized Itineraries',
              desc: 'Tailored journeys reflecting your passions and pace.',
            },
            {
              title: 'Expert Guides',
              desc: 'Local storytellers bring Africa’s landscapes to life.',
            },
            {
              title: 'Sustainable Travel',
              desc: 'Eco-friendly practices support conservation and communities.',
            },
            {
              title: 'Memorable Moments',
              desc: 'From game drives to starlit dinners, we create lasting memories.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-md text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experiences;