// src/components/ScrollToTop.tsx
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Give Framer Motion time to render before scrolling
    const timeout = setTimeout(() => {
      // Scroll instantly to top (no smooth to avoid race condition)
      window.scrollTo({ top: 0, behavior: "instant" })

      // Force browser repaint (fixes blank screen issue)
      document.body.style.transform = "translateZ(0)"
      requestAnimationFrame(() => {
        document.body.style.transform = ""
      })
    }, 150) // delay gives animation time to mount

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}

export default ScrollToTop
