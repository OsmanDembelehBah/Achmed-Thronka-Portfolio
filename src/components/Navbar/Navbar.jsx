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
    { name: 'Ventures', href: '#ventures' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Videos', href: '#videos' },
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
        className={`fixed top-2 md:top-4 left-0 right-0 z-50 px-3 md:px-6 transition-all duration-300`}
      >
        <nav className="container mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1120]/90 backdrop-blur-xl px-3 md:px-8 py-3 md:py-4 shadow-2xl">
          
          {/* Logo - Mobile Friendly */}
          <div className="flex items-center gap-2 md:gap-4">
            <a href="#home" className="text-2xl md:text-5xl font-serif cursor-pointer">
              <span className="text-white">A</span>
              <span className="text-yellow-400">T</span>
            </a>

            <div className="w-px h-6 md:h-12 bg-yellow-500/40"></div>

            <a href="#home" className="cursor-pointer hidden xs:block">
              <h1 className="text-xs md:text-2xl font-bold tracking-wide">
                <span className="text-white">ACHMED </span>
                <span className="text-yellow-400">THRONKA</span>
              </h1>
              <p className="uppercase text-[6px] md:text-[10px] tracking-[3px] md:tracking-[6px] text-gray-400 hidden sm:block">
                Business Executive
              </p>
            </a>
          </div>

          {/* Mobile - Show short name */}
          <div className="flex items-center gap-2 md:hidden">
            <span className="text-xs font-bold text-white">A.THRONKA</span>
          </div>

          {/* Desktop Navigation */}
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

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={toggleDark}
              className="text-white/80 hover:text-yellow-400 transition-colors duration-300 p-1.5 md:p-2"
            >
              {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
            </button>

            <button
              onClick={scrollToContact}
              className="hidden md:flex items-center gap-2 border border-yellow-400 text-yellow-400 px-3 md:px-7 py-1.5 md:py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 text-xs md:text-sm font-medium cursor-pointer"
            >
              <User size={16} />
              <span className="hidden sm:inline">GET IN TOUCH</span>
              <span className="sm:hidden">CONTACT</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white/80 hover:text-yellow-400 transition-colors duration-300 p-1.5"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed top-[62px] md:top-[80px] left-3 right-3 z-40 lg:hidden rounded-2xl border border-white/10 bg-[#0B1120]/98 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-300 text-sm font-medium ${
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
                className="w-full mt-3 flex items-center justify-center gap-2 border border-yellow-400 text-yellow-400 px-4 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm font-medium cursor-pointer"
              >
                <User size={16} />
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
