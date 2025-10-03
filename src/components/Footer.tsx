import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import logo from '../../public/logo.webp'
import logo_blur from '../../public/logo-blur.webp'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-700 to-amber-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="relative w-40 h-16 mb-6"
            >
              <img 
                src={logo_blur} 
                alt="Quickpulse Safaris logo blurred placeholder" 
                className="absolute inset-0 w-full h-full object-contain blur-sm scale-105"
              />
              <img 
                src={logo} 
                alt="Quickpulse Safaris logo" 
                className="relative w-full h-full object-contain transition-opacity duration-700"
                loading="lazy"
              />
            </motion.div>
            <h3 className="text-xl font-bold tracking-tight">Quickpulse Safaris & Travel</h3>
            <p className="mt-3 text-sm text-gray-200 max-w-xs leading-relaxed">
              Crafting unforgettable safaris, cultural journeys, and beach escapes across East Africa, tailored to your dreams.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
                { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
              ].map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" 
                  href={href} 
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 text-white hover:text-emerald-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-100 mb-5">Explore</h4>
            <ul className="space-y-4 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/destinations", label: "Destinations" },
                { to: "/experiences", label: "Experiences" },
                { to: "/tours", label: "Tours" },
                { to: "/gallery", label: "Gallery" },
                { to: "/faq", label: "FAQ" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-gray-200 hover:text-emerald-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-100 mb-5">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li>Wildlife Safaris</li>
              <li>Cultural & Community Tours</li>
              <li>Trekking & Adventure</li>
              <li>Beach Escapes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-100 mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li>Nairobi, Kenya</li>
              <li>
                <a 
                  href="mailto:info@qpsafaris.com" 
                  className="hover:text-emerald-300 transition-colors"
                >
                  info@qpsafaris.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+254112770494" 
                  className="hover:text-emerald-300 transition-colors"
                >
                  +254 112 770 494
                </a>
              </li>
              <li className="flex gap-2">
                <Link 
                  to="/privacy" 
                  className="underline text-gray-200 hover:text-emerald-300 transition-colors"
                >
                  Privacy
                </Link>
                <span>|</span>
                <Link 
                  to="/terms" 
                  className="underline text-gray-200 hover:text-emerald-300 transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-emerald-700/50 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Quickpulse Safaris & Travel. All rights reserved.{' '}
          <span>
            Powered by{' '}
            <a 
              href="https://ujuzicreations.co.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline text-emerald-200 hover:text-emerald-300 transition-colors"
            >
              U.D.C
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer