import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { dark, toggleDark } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#ventures' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Gallery', href: '#gallery' },
  ];

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, navLinks]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.4, 
          ease: 'easeInOut' 
        }}
        className={`fixed top-4 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${
          scrolled ? 'top-2' : 'top-4'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1120]/80 backdrop-blur-xl px-4 md:px-8 py-4 shadow-2xl">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#home" className="text-3xl md:text-5xl font-serif cursor-pointer">
              <span className="text-white">A</span>
              <span className="text-yellow-400">T</span>
            </a>

            <div className="w-px h-8 md:h-12 bg-yellow-500/40"></div>

            <a href="#home" className="cursor-pointer">
              <h1 className="text-base md:text-2xl font-bold tracking-wide">
                <span className="text-white">ACHMED </span>
                <span className="text-yellow-400">THRONKA</span>
              </h1>
              <p className="uppercase text-[8px] md:text-[10px] tracking-[4px] md:tracking-[6px] text-gray-400">
                Business Executive
              </p>
            </a>
          </div>

          {/* Desktop Navigation - Contact removed */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`relative text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-yellow-400' 
                        : 'text-white hover:text-yellow-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-3 h-[3px] w-full bg-yellow-400" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Side - Get In Touch Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="text-white/80 hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              {dark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>

            <button
              onClick={scrollToContact}
              className="hidden lg:flex items-center gap-2 border border-yellow-400 text-yellow-400 px-4 md:px-7 py-2 md:py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm md:text-base font-medium cursor-pointer"
            >
              <User size={18} />
              GET IN TOUCH
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white/80 hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[72px] md:top-[80px] left-4 right-4 z-40 lg:hidden rounded-2xl border border-white/10 bg-[#0B1120]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-300 text-base font-medium ${
                    activeSection === link.href.substring(1)
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-white/80 hover:text-yellow-400 hover:bg-white/5'
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={scrollToContact}
                className="w-full mt-4 flex items-center justify-center gap-2 border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 text-base font-medium cursor-pointer"
              >
                <User size={18} />
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
