import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaComments, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 200); // Show after scrolling 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButtons && (
        <>
          {/* Left-side Book Now button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed flex gap-1 md:gap-4 bottom-6 left-1 sm:left-6 z-[999]"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex cursor-pointer items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-amber-700 transition"
              >
                <FaCalendarCheck />
                <span>Book Now</span>
              </motion.button>
            </Link>

            {/* Send Message */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex cursor-pointer items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-cyan-600 transition"
              >
                <FaComments />
                <span>Message</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right-side buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-1 sm:right-6 flex flex-col items-end gap-3 z-[999]"
          >
            {/* Scroll to Top */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center cursor-pointer justify-center bg-yellow-400 text-white w-10 h-10 rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
              <FaArrowUp />
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;
