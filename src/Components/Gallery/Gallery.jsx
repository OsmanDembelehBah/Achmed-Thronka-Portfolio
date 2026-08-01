import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// Adjust path if your data folder is at src/data/ (e.g., ../data/gallery)
import { galleryItems } from "../data/gallery";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const categories = useMemo(() => {
    if (!galleryItems) return ["All"];
    return ["All", ...new Set(galleryItems.map((item) => item.category))];
  }, []);

  const filteredItems = useMemo(() => {
    if (!galleryItems) return [];
    return filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50 dark:bg-navy/70">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            Photo <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Capturing moments of leadership, business, and impact
          </p>
        </div>

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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gold text-navy shadow-lg"
                  : "bg-white/20 text-gray-700 dark:text-gray-300 hover:bg-gold/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

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
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.src}
                  alt={`Gallery ${item.id}`}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
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
