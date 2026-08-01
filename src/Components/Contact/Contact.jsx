import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white/90 dark:bg-navy/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            Contact <span className="text-gold">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Let's connect and explore opportunities
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4 text-gray-700 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <Mail className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href="mailto:ahmed@whitedove.sl"
                    className="hover:text-gold transition"
                  >
                    ahmed@whitedove.sl
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a
                    href="tel:+23276123456"
                    className="hover:text-gold transition"
                  >
                    +232 76 123 456
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold">Office</div>
                  <div>Freetown, Sierra Leone</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare
                  className="text-gold mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <a
                    href="https://wa.me/23276123456"
                    className="hover:text-gold transition"
                  >
                    Chat with me
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
              >
                <Linkedin size={20} className="text-gold" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
              >
                <Twitter size={20} className="text-gold" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
              >
                <Instagram size={20} className="text-gold" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
              >
                <Facebook size={20} className="text-gold" />
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-gold transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-gold transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project or inquiry"
                  className="w-full p-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-gold transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gold text-navy font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
