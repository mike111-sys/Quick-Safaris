import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertCircle, Quote, User, ChevronLeft, ChevronRight } from 'lucide-react';

const API = import.meta.env.VITE_API_URL;

type Testimonial = {
  id: number;
  name: string;
  email: string;
  content: string;
  created_at: string;
};

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API}/api/testimonials`);
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        // Sort by created_at descending (latest first)
        const sortedData = [...data].sort((a, b) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setTestimonials(sortedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 13000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  if (loading) {
    return (
      <section className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-50 relative overflow-hidden min-h-screen flex items-center">
        <div className="relative z-10 text-center py-8 sm:py-12 bg-white rounded-lg shadow-md border border-gray-200 w-full mx-2 sm:mx-0">
          <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 animate-spin mx-auto mb-3" />
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Loading Testimonials</h2>
          <p className="text-xs sm:text-sm text-gray-600">Fetching client feedback...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-50 relative overflow-hidden min-h-screen flex items-center">
        <div className="relative z-10 text-center py-8 sm:py-12 bg-white rounded-lg shadow-md border border-gray-200 w-full mx-2 sm:mx-0">
          <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 mx-auto mb-3" />
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Error Loading Testimonials</h2>
          <p className="text-xs sm:text-sm text-red-600 mb-4 px-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 cursor-pointer py-2 sm:px-5 sm:py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-5 sm:py-12 bg-gray-50 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-amber-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-8 sm:right-20 w-20 h-20 sm:w-28 sm:h-28 bg-gray-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 px-2"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-600 leading-tight mb-3 sm:mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto px-2"
          >
            Discover the impact of our debt management services through the words of our valued clients.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        {testimonials.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-8 sm:py-12 bg-white rounded-lg border border-gray-200 shadow-md mx-2 sm:mx-0"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">No Testimonials Yet</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">Check back later for client feedback.</p>
          </motion.div>
        ) : (
          <div className="relative max-w-4xl mx-auto px-2 xs:px-4">
            {/* Main Testimonial Card */}
            <div className="relative min-h-80 xs:min-h-96 sm:min-h-[28rem] md:min-h-[32rem] overflow-visible">
            <AnimatePresence initial={false} custom={direction} mode="wait">
    <motion.div
      key={currentIndex}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="absolute w-full h-full"
    >
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-4 xs:p-6 sm:p-8 md:p-12 h-full flex flex-col">
        <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-200 mb-4 sm:mb-6 flex-shrink-0" />
        
        {/* Updated testimonial content with scrollable area */}
        <div className="flex-grow mb-4 sm:mb-6 md:mb-8 overflow-hidden">
          <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-700 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 xs:gap-0 flex-shrink-0">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-amber-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
              <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 truncate">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                {new Date(testimonials[currentIndex].created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
          
          {/* Counter */}
          <div className="text-xs sm:text-sm font-medium text-gray-500 self-end xs:self-auto flex-shrink-0">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
        
        <div className="h-1 bg-gradient-to-r from-blue-600 to-amber-500 mt-4 sm:mt-6 rounded-full flex-shrink-0"></div>
      </div>
    </motion.div>
  </AnimatePresence>
</div>

            {/* Navigation Buttons */}
            {testimonials.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-2 xs:-translate-x-3 sm:-translate-x-4 md:-translate-x-12 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-2 xs:translate-x-3 sm:translate-x-4 md:translate-x-12 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" />
                </button>
              </>
            )}

            {/* Pagination Dots */}
            {testimonials.length > 1 && (
              <div className="flex justify-center gap-1 xs:gap-2 mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-1.5 xs:h-2 cursor-pointer rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-6 xs:w-8 bg-blue-600'
                        : 'w-1.5 xs:w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;