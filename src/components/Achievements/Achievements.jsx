import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../data/ahmedData';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50 dark:bg-navy/70">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            Key <span className="text-gold">Achievements</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-base">
            A track record of excellence and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievementsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white dark:bg-navy/60 p-6 rounded-2xl shadow-lg border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
