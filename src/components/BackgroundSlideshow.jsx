import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slideshowImages } from '../data/ahmedData';

const BackgroundSlideshow = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, index]);

  return (
    <div 
      className="fixed inset-0 -z-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: `url(${slideshowImages[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(8px) scale(1.1)',
              transform: 'scale(1.1)'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={slideshowImages[index]}
              alt="Background"
              className="h-full max-h-screen w-auto object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors duration-300 bg-black/30 hover:bg-black/50 p-2 rounded-full backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors duration-300 bg-black/30 hover:bg-black/50 p-2 rounded-full backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slideshowImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlideshow;
