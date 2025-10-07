import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import logo from '/logo.webp';
import logo_blur from '/logo-blur.webp';
import background_image from '../assets/Destinations/tsavo.webp';

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Amber background (loads instantly) */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-900" />

      {/* Background image (lazy + fade in) */}
      <div className="absolute inset-0 opacity-60">
        <img
          src={background_image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="relative w-48 h-20 mb-6 shadow-sm">
              <img
                src={logo_blur}
                alt="Quickpulse Safaris logo blurred placeholder"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src={logo}
                alt="Quickpulse Safaris logo"
                className="relative w-full h-full object-contain transition-opacity duration-700"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white text-shadow">
              Quickpulse Safaris & Travel
            </h3>
            <p className="mt-3 text-white sm:text-base max-w-xs leading-relaxed text-shadow">
Your gateway to extra-ordinary journeys
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
                { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  className="p-3 rounded-full bg-white/10 hover:bg-amber-300/20 transition-colors"
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6 text-white hover:text-amber-300 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-5 underline text-shadow">Explore</h4>
            <ul className="space-y-6 text-white sm:text-base text-shadow">
              {[
                { to: '/about', label: 'About' },
                { to: '/destinations', label: 'Destinations' },
                { to: '/experiences', label: 'Experiences' },
                { to: '/tours', label: 'Tours' },
                { to: '/faq', label: 'FAQs' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white hover:text-amber-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-5 underline text-shadow">Our Services</h4>
            <ul className="space-y-6 text-white sm:text-base text-shadow">
              <li>Wildlife Safaris</li>
              <li>Cultural & Community Tours</li>
              <li>Trekking & Adventure</li>
              <li>Beach Escapes</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold underline text-white mb-5 text-shadow">Get in Touch</h4>
            <ul className="space-y-6 text-white sm:text-base text-shadow">
              <li>Nairobi, Kenya</li>
              <li>
                <a
                  href="mailto:info@qpsafaris.com"
                  className="hover:text-amber-300 transition-colors"
                >
                  info@qpsafaris.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254112770494"
                  className="hover:text-amber-300 transition-colors"
                >
                  +254 112 770 494
                </a>
              </li>
              <li className="flex gap-2">
                <Link
                  to="/privacy"
                  className="underline text-white hover:text-amber-300 transition-colors"
                >
                  Privacy
                </Link>
                <span>|</span>
                <Link
                  to="/terms"
                  className="underline text-white hover:text-amber-300 transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-amber-300/30 text-center text-white sm:text-base text-shadow"
        >
          © {new Date().getFullYear()} Quickpulse Safaris & Travel. All rights reserved.{' '}
          <span>
            Powered by{' '}
            <a
              href="https://ujuzicreations.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-amber-300 transition-colors"
            >
              U.D.C
            </a>
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;