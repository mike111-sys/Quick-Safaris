import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-gray-900' : 'text-gray-800 hover:text-gray-900 hover:bg-gray-100'
  }`

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded bg-emerald-600 inline-flex items-center justify-center text-white font-bold">Q</span>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wide">Quickpulse Safaris</div>
              <div className="text-[10px] text-gray-500">Feel the Pulse of Adventure</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navItemClass} end>Home</NavLink>
            <NavLink to="/about" className={navItemClass}>About</NavLink>
            <NavLink to="/destinations" className={navItemClass}>Destinations</NavLink>
            <NavLink to="/experiences" className={navItemClass}>Experiences</NavLink>
            <NavLink to="/tours" className={navItemClass}>Tours</NavLink>
            <NavLink to="/gallery" className={navItemClass}>Gallery</NavLink>
            <NavLink to="/faq" className={navItemClass}>FAQ</NavLink>
            <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
          </nav>

          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="md:hidden p-2 rounded hover:bg-gray-100">
            {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            <NavLink onClick={() => setOpen(false)} to="/" className={navItemClass} end>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={navItemClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/destinations" className={navItemClass}>Destinations</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/experiences" className={navItemClass}>Experiences</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/tours" className={navItemClass}>Tours</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/gallery" className={navItemClass}>Gallery</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/faq" className={navItemClass}>FAQ</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={navItemClass}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar


