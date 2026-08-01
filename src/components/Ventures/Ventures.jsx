import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { venturesData } from '../../data/ahmedData';

const Ventures = () => {
  const handleVentureClick = (venture) => {
    if (venture.externalUrl) {
      window.open(venture.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="ventures" className="py-24 px-6 bg-gray-50 dark:bg-navy/70">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            My <span className="text-gold">Ventures</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Building businesses that create value and opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venturesData.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onClick={() => venture.externalUrl && handleVentureClick(venture)}
              className={`group bg-white dark:bg-navy/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                venture.externalUrl ? 'cursor-pointer' : ''
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {venture.logo && (
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-navy/90 p-2 rounded-xl shadow-lg">
                    <img src={venture.logo} alt="Logo" className="w-12 h-12 object-contain" />
                  </div>
                )}
                {venture.externalUrl && (
                  <div className="absolute bottom-4 left-4 bg-gold/90 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <ExternalLink size={12} />
                    Visit Website
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
                  {venture.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-3">
                  {venture.description}
                </p>
                <div className="inline-flex items-center mt-4 text-gold font-semibold group-hover:gap-2 transition-all">
                  {venture.externalUrl ? 'Visit Website' : 'Learn more'}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
