import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { profileImage } from '../../data/ahmedData';

const Hero = () => {
  const words = [
    'Businessman',
    'Serial Entrepreneur',
    'CEO of White Dove',
    'General Manager',
    'Business Executive',
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 md:px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-gold/20 rounded-full text-gold text-xs md:text-sm font-semibold mb-4"
          >
            Welcome to my world
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            Achmed <span className="text-gold">Thronka</span>
          </h1>

          <div className="text-lg md:text-2xl text-gold mt-3 font-light h-12">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block min-w-[200px]"
            >
              {words[wordIndex]}
            </motion.span>
          </div>

          <p className="text-white/70 mt-4 md:mt-6 max-w-lg leading-relaxed text-sm md:text-base">
            Leading with integrity, innovation, and excellence. Building
            businesses that make a difference in Sierra Leone and beyond.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
            <a
              href="#about"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-gold text-navy font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 inline-block text-sm md:text-base"
            >
              Explore My Journey
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-2.5 md:py-3 border border-white/30 text-white rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 inline-block text-sm md:text-base"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-2xl animate-pulse" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={profileImage}
                alt="Achmed Thronka"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
