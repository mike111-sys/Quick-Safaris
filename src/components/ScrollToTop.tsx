// src/components/ScrollToTop.tsx
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll smoothly to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" })

    // ✅ Force browser repaint to fix "blank until scroll" issue
    const forceRepaint = () => {
      document.body.style.transform = "translateZ(0)"
      setTimeout(() => {
        document.body.style.transform = ""
      }, 50)
    }

    forceRepaint()
  }, [pathname])

  return null
}

export default ScrollToTop
