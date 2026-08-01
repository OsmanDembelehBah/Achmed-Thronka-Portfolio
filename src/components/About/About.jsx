import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, educationData, careerData } from '../../data/ahmedData';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-navy/95">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            About <span className="text-gold">Achmed</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-base md:text-lg">
            Entrepreneur · Business Executive · Engineering Professional
          </p>
        </motion.div>

        {/* Biography Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg space-y-4">
              <p>
                Achmed Thronka is a Sierra Leonean entrepreneur, business executive and engineering professional with over twelve years of experience in business leadership, operations management, hospitality and engineering.
              </p>
              <p>
                He is the <strong className="text-gold">CEO and Founder</strong> of White Dove Electrical Engineering Company, a company committed to providing innovative electrical engineering solutions and supporting infrastructure development in Sierra Leone.
              </p>
              <p>
                He currently serves as the <strong className="text-gold">General Manager</strong> of Grand Leone Group, where he oversees business operations, strategic planning, customer experience and organizational growth.
              </p>
              <p>
                His passion for leadership, innovation and organizational management has enabled him to successfully manage businesses across multiple industries including hospitality, gaming, engineering and corporate administration.
              </p>
              <p>
                Throughout his professional journey, he has consistently demonstrated integrity, discipline, professionalism and an unwavering commitment to excellence.
              </p>
              <p>
                He strongly believes in empowering young professionals, creating employment opportunities and contributing to Sierra Leone's economic development through entrepreneurship and responsible leadership.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/80 dark:bg-white/5 p-5 rounded-xl border border-gold/20">
                <div className="text-3xl md:text-4xl font-bold text-gold">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years of Leadership</div>
              </div>
              <div className="bg-white/80 dark:bg-white/5 p-5 rounded-xl border border-gold/20">
                <div className="text-3xl md:text-4xl font-bold text-gold">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Companies Managed</div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-navy dark:text-white mb-3">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.values.map((value) => (
                  <span key={value} className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
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
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
              <img
                src={aboutData.image}
                alt="Achmed Thronka"
                className="relative rounded-2xl shadow-premium w-full h-auto max-h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-sm font-bold">CEO & Founder</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-gold" size={28} />
            <h3 className="text-2xl font-bold text-navy dark:text-white">Education</h3>
          </div>
          <div className="space-y-4">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-navy/50 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-navy dark:text-white">{edu.institution}</h4>
                    <p className="text-gold text-sm font-medium">{edu.period}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</span>
                </div>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-gold" size={28} />
            <h3 className="text-2xl font-bold text-navy dark:text-white">Professional Experience</h3>
          </div>
          <div className="space-y-4">
            {careerData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-navy/50 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-navy dark:text-white">{job.company}</h4>
                    <p className="text-gold text-sm font-medium">{job.position}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
                </div>
                {job.description && (
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{job.description}</p>
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
