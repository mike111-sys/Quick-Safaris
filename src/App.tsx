import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import Tours from "./pages/Tours";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/blog/Blog";
import Admin from "./pages/Admin/pages/Admin";

const AppContent = () => {
  const location = useLocation();
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [routeLoading, setRouteLoading] = useState(false);

  // --- Handle initial loading on home ---
  useEffect(() => {
    if (location.pathname === "/") {
      const allLoaded = logoLoaded && heroLoaded;

      if (allLoaded) {
        // Everything loaded, show app
        const timer = setTimeout(() => setIsReady(true), 400); // short fade delay
        return () => clearTimeout(timer);
      } else {
        // Safety timeout (e.g., if image fails to load)
        const fallback = setTimeout(() => setIsReady(true), 4000);
        return () => clearTimeout(fallback);
      }
    } else {
      setIsReady(true);
    }
  }, [logoLoaded, heroLoaded, location.pathname]);

  // --- Route transition loader ---
  useEffect(() => {
    if (isReady) {
      setRouteLoading(true);
      const timer = setTimeout(() => setRouteLoading(false), 200);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isReady]);

  // --- Show Loader before everything else ---
  if (!isReady || routeLoading) {
    return <Loader />;
  }

  return (
    <div
      className={`${
        isReady ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
