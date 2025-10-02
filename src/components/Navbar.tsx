import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import Logo from '../../public/logo.webp'
import Logo_blur from '../../public/logo-blur.webp'

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

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo Section with Blur Loading */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative h-10 w-16 sm:h-12 sm:w-18 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300">
              {/* Blur placeholder */}
              <img 
                src={Logo_blur} 
                alt="Quickpulse Safaris" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* Actual logo */}
              <img 
                src={Logo} 
                alt="Quickpulse Safaris" 
                onLoad={() => setImageLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Gradient overlay */}
            </div>
            
            <div className="leading-tight">
              <div className="text-sm sm:text-base font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Quickpulse Safaris
              </div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium tracking-wide">
                Feel the Pulse of Adventure
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <NavLink to="/" className={desktopNavItemClass} end>Home</NavLink>
            <NavLink to="/about" className={desktopNavItemClass}>About</NavLink>
            <NavLink to="/destinations" className={desktopNavItemClass}>Destinations</NavLink>
            <NavLink to="/experiences" className={desktopNavItemClass}>Experiences</NavLink>
            <NavLink to="/tours" className={desktopNavItemClass}>Tours</NavLink>
            <NavLink to="/gallery" className={desktopNavItemClass}>Gallery</NavLink>
            <NavLink to="/faq" className={desktopNavItemClass}>FAQ</NavLink>
            <NavLink to="/contact" className={desktopNavItemClass}>Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen((v) => !v)} 
            aria-label="Toggle menu" 
            className="lg:hidden p-2 sm:p-2.5 rounded-xl hover:bg-gray-100/80 transition-all duration-300 border border-transparent hover:border-gray-200 flex-shrink-0"
          >
            {open ? (
              <FaTimes className="h-5 w-5 text-gray-700" />
            ) : (
              <FaBars className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

     {/* Mobile Menu */}
<div
  className={`lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ${
    open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <nav className="px-4 py-3 space-y-1">
    <NavLink onClick={() => setOpen(false)} to="/" className={navItemClass} end>
      Home
    </NavLink>
    <NavLink onClick={() => setOpen(false)} to="/about" className={navItemClass}>
      About
    </NavLink>
    <NavLink onClick={() => setOpen(false)} to="/destinations" className={navItemClass}>
      Destinations
    </NavLink>
    <NavLink onClick={() => setOpen(false)} to="/experiences" className={navItemClass}>
      Experiences
    </NavLink>
    <NavLink onClick={() => setOpen(false)} to="/tours" className={navItemClass}>
      Tours
    </NavLink>
    <NavLink onClick={() => setOpen(false)} to="/gallery" className={navItemClass}>
      Gallery
    </NavLink>
    <NavLink onClick={() => setOpen(false)} to="/faq" className={navItemClass}>
      FAQ
    </NavLink>
    <NavLink onClick={() => setOpen(false)} to="/contact" className={navItemClass}>
      Contact
    </NavLink>
  </nav>
</div>

    </header>
  )
}

export default Navbar