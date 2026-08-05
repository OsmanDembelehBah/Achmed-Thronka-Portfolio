import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '../../data/ahmedData';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const categories = useMemo(() => {
    return ['All', ...new Set(galleryImages.map((item) => item.category))];
  }, []);

  const filteredItems = useMemo(() => {
    return filter === 'All'
      ? galleryImages
      : galleryImages.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-navy/90">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white">
            Photo <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">
            Capturing moments of leadership, business, and impact
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 ${
                filter === category
                  ? 'bg-gold text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gold/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* CSS Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid cursor-pointer group mb-4"
                onClick={() => setLightbox(item.src)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 dark:bg-navy/50">
                  <img
                    src={item.src}
                    alt={`Gallery ${item.category}`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 sm:bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-100 sm:opacity-0 group-hover:opacity-100">
                    <span className="text-white text-xs sm:text-sm font-medium bg-black/60 backdrop-blur-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                      View Photo
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightbox}
                  alt="Enlarged view"
                  className="rounded-xl shadow-2xl max-w-full max-h-[80vh] object-contain"
                />
                <button
                  aria-label="Close image"
                  className="absolute -top-12 right-0 sm:top-2 sm:right-2 text-white/80 hover:text-white p-2.5 bg-black/60 rounded-full transition-all border border-white/20"
                  onClick={() => setLightbox(null)}
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
