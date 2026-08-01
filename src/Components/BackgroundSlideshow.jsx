import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "../data/slides";

const BackgroundSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Prevent setting interval if slides array is empty or undefined
    if (!slides || slides.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Safeguard against missing slide data
  const currentSlide = slides && slides.length > 0 ? slides[index] : "";

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentSlide})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
    </div>
  );
};

export default BackgroundSlideshow;
