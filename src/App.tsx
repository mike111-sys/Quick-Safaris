import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import Tours from './pages/Tours'
import FAQ from './pages/FAQ'
import Booking from './pages/Booking'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const AppContent = () => {
  const location = useLocation()
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // Wait until both are ready
  useEffect(() => {
    if (logoLoaded && heroLoaded && location.pathname === '/') {
      const timer = setTimeout(() => setIsReady(true), 400)
      return () => clearTimeout(timer)
    } else if (location.pathname !== '/') {
      // For other pages, load immediately
      setIsReady(true)
    }
  }, [logoLoaded, heroLoaded, location.pathname])

  return (
    <>
      <AnimatePresence>{!isReady && <Loader key="loader" />}</AnimatePresence>

      <div className={`${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        <Navbar onLogoLoaded={() => setLogoLoaded(true)} />

        <main className="flex-1">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home onHeroLoaded={() => setHeroLoaded(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
