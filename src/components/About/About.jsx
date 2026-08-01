import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, educationData, careerData } from '../../data/ahmedData';
import { Award, GraduationCap, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-navy/95">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy dark:text-white">
            About <span className="text-gold">Achmed</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 md:mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Entrepreneur · Business Executive · Engineering Professional
          </p>
        </motion.div>

        {/* Biography Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm md:text-base mb-6">
              {aboutData.biography}
            </p>

            {/* Key Stats - Mobile Friendly */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="bg-white/80 dark:bg-white/5 p-4 rounded-xl border border-gold/20">
                <div className="text-2xl md:text-3xl font-bold text-gold">12+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Years of Leadership</div>
              </div>
              <div className="bg-white/80 dark:bg-white/5 p-4 rounded-xl border border-gold/20">
                <div className="text-2xl md:text-3xl font-bold text-gold">3+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Companies Managed</div>
              </div>
            </div>

            {/* Core Values - Mobile Friendly */}
            <div className="mt-6 md:mt-8">
              <h3 className="text-base md:text-lg font-semibold text-navy dark:text-white mb-3">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.values.map((value) => (
                  <span key={value} className="px-3 py-1.5 md:px-4 md:py-2 bg-gold/10 text-gold rounded-full text-xs md:text-sm font-medium">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-6 md:mt-0"
          >
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
              <img
                src={aboutData.image}
                alt="Achmed Thronka"
                className="relative rounded-2xl shadow-premium w-full h-auto max-h-[400px] md:max-h-[500px] object-cover"
              />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-gold text-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg">
                <div className="text-xs md:text-sm font-bold">CEO & Founder</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline - Mobile Friendly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <GraduationCap className="text-gold" size={24} />
            <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-white">Education</h3>
          </div>
          <div className="space-y-3 md:space-y-4">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-navy/50 p-4 md:p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 md:gap-4">
                  <div>
                    <h4 className="text-sm md:text-lg font-semibold text-navy dark:text-white">{edu.institution}</h4>
                    <p className="text-gold text-xs md:text-sm font-medium">{edu.period}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{edu.location}</span>
                </div>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-300 mt-1 md:mt-2 text-xs md:text-sm">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Timeline - Mobile Friendly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Briefcase className="text-gold" size={24} />
            <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-white">Professional Experience</h3>
          </div>
          <div className="space-y-3 md:space-y-4">
            {careerData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-navy/50 p-4 md:p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 md:gap-4">
                  <div>
                    <h4 className="text-sm md:text-lg font-semibold text-navy dark:text-white">{job.company}</h4>
                    <p className="text-gold text-xs md:text-sm font-medium">{job.position}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{job.period}</span>
                </div>
                {job.description && (
                  <p className="text-gray-600 dark:text-gray-300 mt-1 md:mt-2 text-xs md:text-sm">{job.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
