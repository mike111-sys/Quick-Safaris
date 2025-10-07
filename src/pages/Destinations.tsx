import { motion } from 'framer-motion';
import amboseli from '../assets/Destinations/amboseli.webp';
import maasai from '../assets/Destinations/maasai-mara.webp';
import serengeti from '../assets/Destinations/serengeti.webp';
import zanzibar from '../assets/Destinations/zanzibar.webp';
import gorilla from '../assets/Destinations/gorilla-trekking.webp';
import diani from '../assets/Destinations/diani.webp';
import cultural_tour from '../assets/Destinations/cultural-tours.webp';
import tsavo from '../assets/Destinations/tsavo.webp';
import samburu from '../assets/Destinations/samburu.webp';
import ngorongoro from '../assets/Destinations/ngorongoro.webp';
import ScrollToTop from '../components/ScrollToTop';

const Destinations = () => {
  const regions = [
    {
      title: 'Kenya',
      items: [
        { name: 'Maasai Mara', img: maasai, alt: 'Maasai Mara wildlife reserve' },
        { name: 'Amboseli', img: amboseli, alt: 'Amboseli National Park with Mount Kilimanjaro' },
        { name: 'Samburu', img: samburu, alt: 'Samburu National Reserve' },
        { name: 'Tsavo', img: tsavo, alt: 'Tsavo National Park' },
        { name: 'Diani Beach', img: diani, alt: 'Diani Beach coastline' },
      ],
    },
    {
      title: 'Tanzania',
      items: [
        { name: 'Serengeti', img: serengeti, alt: 'Serengeti National Park' },
        { name: 'Ngorongoro Crater', img: ngorongoro, alt: 'Ngorongoro Crater landscape' },
        { name: 'Zanzibar', img: zanzibar, alt: 'Zanzibar beaches' },
      ],
    },
    {
      title: 'Uganda & Rwanda',
      items: [
        { name: 'Gorilla Trekking', img: gorilla, alt: 'Gorilla trekking in Uganda and Rwanda' },
        { name: 'Cultural Tours', img: cultural_tour, alt: 'Cultural tours in Uganda and Rwanda' },
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <ScrollToTop />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-amber-600">Explore Our Top Destinations</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          From iconic reserves and volcanic craters to emerald forests and coral-fringed coasts, find the perfect rhythm for your African adventure.
        </p>
      </motion.div>

      <div className="mt-8 space-y-12">
        {regions.map((region) => (
          <div key={region.title}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-semibold text-2xl text-gray-900"
            >
              {region.title}
            </motion.div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {region.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition ${
                    item.name === 'Maasai Mara' ? 'sm:col-span-1' : 'sm:col-span-1 md:col-span-1'
                  }`}
                >
                  <div className={`relative ${item.name === 'Maasai Mara' ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-8 h-8 bg-amber-600 rounded-full"
                      />
                    </div>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="relative w-full h-full object-cover transition-opacity duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 py-3 text-center">
                    <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;