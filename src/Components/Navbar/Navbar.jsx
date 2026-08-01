import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
// Adjust this path if your folder is named 'Contest' instead of 'Context'
import { useTheme } from "../Context/ThemeContext";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  const { dark, toggleDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.a
              href="#home"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl font-bold text-white tracking-wider gold-glow">
                Ahmed <span className="text-gold">Thronka</span>
              </span>
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks &&
                navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative px-3 py-2 text-sm font-medium text-white/70 hover:text-gold transition-colors duration-300 rounded-md hover:bg-white/5 group"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
                  </motion.a>
                ))}

              <motion.button
                onClick={toggleDark}
                className="ml-2 p-2 text-white/70 hover:text-gold rounded-full hover:bg-white/5 transition-colors duration-300"
                aria-label={
                  dark ? "Switch to light mode" : "Switch to dark mode"
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <motion.button
                onClick={toggleDark}
                className="p-2 text-white/70 hover:text-gold rounded-full hover:bg-white/5 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white/70 hover:text-gold rounded-full hover:bg-white/5 transition-colors duration-300"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full z-40 md:hidden glass border-b border-white/10 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navLinks &&
                navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition-all duration-300 text-base font-medium"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </motion.a>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
