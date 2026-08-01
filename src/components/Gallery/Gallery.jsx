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
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: '#f1f5f9' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#0b1a33' }}>
            Photo <span style={{ color: '#d4af37' }}>Gallery</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Capturing moments of leadership, business, and impact
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gold text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gold/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="masonry-grid space-y-4">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightbox(item.src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <img
                  src={item.src}
                  alt={`Gallery ${item.id}`}
                  loading="lazy"
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs md:text-sm font-medium bg-black/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-4xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightbox}
                  alt="Lightbox"
                  className="rounded-2xl shadow-2xl w-full h-full object-contain"
                  loading="lazy"
                />
                <button
                  className="absolute top-4 right-4 text-white/70 hover:text-white p-2 bg-black/50 rounded-full transition-all"
                  onClick={() => setLightbox(null)}
                >
                  <X size={32} />
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
