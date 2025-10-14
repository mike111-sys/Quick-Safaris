import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '/logo.webp'
import Logo_blur from '/logo-blur.webp'

interface NavbarProps {
  onLogoLoaded?: () => void
}

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
    isActive 
      ? 'text-gray-900 bg-gradient-to-r from-emerald-50 to-cyan-50 shadow-sm border border-emerald-200/50' 
      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/80'
  }`

const desktopNavItemClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
    isActive 
      ? 'text-gray-900 bg-gradient-to-r from-emerald-50 to-cyan-50 shadow-sm border border-emerald-200/50' 
      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 hover:shadow-sm'
  }`

  const Navbar: React.FC<NavbarProps> = ({ onLogoLoaded }) => {
 const [open, setOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showResources, setShowResources] = useState(false)

  

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo Section with Blur Loading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="relative h-10 w-16 sm:h-12 sm:w-18 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300">
                {/* Blur placeholder */}
                <img 
                  src={Logo_blur} 
                  alt="Quickpulse Safaris" 
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Actual logo */}
                <img 
                  src={Logo} 
                  onLoad={() => {
                    setImageLoaded(true)
                    onLogoLoaded?.() // ✅ notify parent that main logo loaded
                  }}                  alt="Quickpulse Safaris" 
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading='lazy'
                />
              </div>
              
              <div className="leading-tight">
                <div className="text-sm sm:text-base font-bold tracking-tight bg-gradient-to-r from-amber-600 to-cyan-600 bg-clip-text text-transparent">
                  Quickpulse Safaris
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-700 font-medium tracking-wide">
                  Feel the Pulse of Adventure
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <NavLink to="/" className={desktopNavItemClass} end>Home</NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavLink to="/about" className={desktopNavItemClass}>About</NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <NavLink to="/destinations" className={desktopNavItemClass}>Destinations</NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <NavLink to="/experiences" className={desktopNavItemClass}>Experiences</NavLink>
            </motion.div>
            
           
           {/* Resource Hub Dropdown */}
<div 
  className="relative"
  onMouseEnter={() => setShowResources(true)} 
  onMouseLeave={() => setShowResources(false)}
>
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.7 }}
  >
    <button
      className="px-4 py-2.5 rounded-xl text-nowrap text-sm font-semibold transition-all duration-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 hover:shadow-sm flex items-center gap-1"
    >
      Resource Hub
      <svg
        className={`w-4 h-4 transition-transform duration-300 ${
          showResources ? 'rotate-180' : ''
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </motion.div>

  <AnimatePresence>
    {showResources && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-40"
      >
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `block px-4 py-2 text-sm rounded-t-xl transition-all ${
              isActive
                ? 'bg-emerald-50 text-emerald-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-50'
            }`
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `block px-4 py-2 text-sm rounded-b-xl transition-all ${
              isActive
                ? 'bg-emerald-50 text-emerald-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-50'
            }`
          }
        >
          FAQs
        </NavLink>
      </motion.div>
    )}
  </AnimatePresence>
</div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <NavLink to="/testimonials" className={desktopNavItemClass}>Testimonials</NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <NavLink to="/contact" className={desktopNavItemClass}>Contact</NavLink>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen((v) => !v)} 
            aria-label="Toggle menu" 
            className="lg:hidden cursor-pointer p-2 sm:p-2.5 rounded-xl hover:bg-gray-100/80 transition-all duration-300 border border-transparent hover:border-gray-200 flex-shrink-0"
          >
            {open ? (
              <FaTimes className="h-5 w-5 text-gray-700" />
            ) : (
              <FaBars className="h-5 w-5 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 1000, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="px-4 py-3 space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <NavLink onClick={() => setOpen(false)} to="/" className={navItemClass} end>
                  Home
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <NavLink onClick={() => setOpen(false)} to="/about" className={navItemClass}>
                  About
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <NavLink onClick={() => setOpen(false)} to="/destinations" className={navItemClass}>
                  Destinations
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <NavLink onClick={() => setOpen(false)} to="/experiences" className={navItemClass}>
                  Experiences
                </NavLink>
              </motion.div>
             
             
             {/* Resource Hub (Mobile Dropdown) */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: 0.7 }}
>
  <details className="group">
    <summary className="flex justify-between items-center cursor-pointer px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50/80">
      Resource Hub
      <svg
        className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div className="pl-6 space-y-1">
      <NavLink onClick={() => setOpen(false)} to="/blog" className={navItemClass}>
        Blogs
      </NavLink>
      <NavLink onClick={() => setOpen(false)} to="/faq" className={navItemClass}>
        FAQs
      </NavLink>
    </div>
  </details>
</motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <NavLink onClick={() => setOpen(false)} to="/testimonials" className={navItemClass}>
                 Testimonials
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <NavLink onClick={() => setOpen(false)} to="/contact" className={navItemClass}>
                  Contact
                </NavLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar