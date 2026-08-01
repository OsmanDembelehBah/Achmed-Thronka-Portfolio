import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { contactData } from '../../data/ahmedData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = ['Home', 'About', 'Ventures', 'Achievements', 'Gallery', 'Videos', 'Contact'];

  return (
    <footer className="bg-navy/90 text-white/70 py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-gold">Achmed Thronka</span>
            <p className="text-sm text-white/50 mt-1">
              Businessman · Serial Entrepreneur · Business Executive
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={contactData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-gold/20 transition-all hover:text-gold"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href={contactData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-gold/20 transition-all hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={contactData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-gold/20 transition-all hover:text-gold"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="text-center text-xs mt-8 pt-4 border-t border-white/5">
          © {currentYear} Achmed Thronka · Designed with excellence
        </div>
      </div>
    </footer>
  );
};

export default Footer;
