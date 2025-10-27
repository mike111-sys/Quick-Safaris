import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaArrowUp, FaCalendarCheck, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const whatsappTexts = ["WhatsApp Us", "Chat Now", "Get in Touch"];
  const bookTexts = ["Book Now", "Reserve Tour", "Book Trip", "Get Started"];

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % whatsappTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const textVariants: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <AnimatePresence>
      {showButtons && (
        <>
          {/* Left-side buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-6 left-4 sm:left-6 z-[999] flex flex-col gap-3"
          >
            {/* WhatsApp Button - Top */}
            <motion.div variants={itemVariants}>
              <a
                href="https://wa.me/254704041059?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex cursor-pointer items-center gap-2.5 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-4 rounded-full shadow-2xl hover:from-green-500 hover:to-green-700 transition-all duration-300 min-w-[180px]"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <FaWhatsapp className="text-2xl" />
                  </motion.div>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIndex}
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="font-semibold text-base"
                    >
                      {whatsappTexts[textIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </a>
            </motion.div>

            {/* Book Now Button - Bottom */}
            <motion.div variants={itemVariants}>
              <Link to="/tours">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(217, 119, 6, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex cursor-pointer items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-3 rounded-full shadow-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 min-w-[160px]"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <FaCalendarCheck className="text-xl" />
                  </motion.div>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIndex}
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="font-semibold text-sm"
                    >
                      {bookTexts[textIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right-side Scroll to Top button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="fixed bottom-6 right-4 sm:right-6 z-[999]"
          >
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 10px 30px rgba(245, 158, 11, 0.4)",
                rotate: 360
              }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex cursor-pointer items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-white w-14 h-14 rounded-full shadow-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowUp className="text-xl" />
              </motion.div>
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;