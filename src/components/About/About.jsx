import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, educationData, careerData } from '../../data/ahmedData';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" style={{ padding: '4rem 1.5rem', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0b1a33' }}>
            About <span style={{ color: '#d4af37' }}>Achmed</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
            Entrepreneur · Business Executive · Engineering Professional
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ color: '#1e293b', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1rem' }}>
                Achmed Thronka is a Sierra Leonean entrepreneur, business executive and engineering professional with over twelve years of experience in business leadership, operations management, hospitality and engineering.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                He is the <strong style={{ color: '#d4af37' }}>CEO and Founder</strong> of White Dove Electrical Engineering Company, a company committed to providing innovative electrical engineering solutions and supporting infrastructure development in Sierra Leone.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                He currently serves as the <strong style={{ color: '#d4af37' }}>General Manager</strong> of Grand Leone Group, where he oversees business operations, strategic planning, customer experience and organizational growth.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                His passion for leadership, innovation and organizational management has enabled him to successfully manage businesses across multiple industries including hospitality, gaming, engineering and corporate administration.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Throughout his professional journey, he has consistently demonstrated integrity, discipline, professionalism and an unwavering commitment to excellence.
              </p>
              <p>
                He strongly believes in empowering young professionals, creating employment opportunities and contributing to Sierra Leone's economic development through entrepreneurship and responsible leadership.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(212,175,55,0.2)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d4af37' }}>12+</div>
                <div style={{ fontSize: '0.8rem', color: '#475569' }}>Years of Leadership</div>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(212,175,55,0.2)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d4af37' }}>3+</div>
                <div style={{ fontSize: '0.8rem', color: '#475569' }}>Companies Managed</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#0b1a33', marginBottom: '0.75rem' }}>Core Values</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {aboutData.values.map((value) => (
                  <span key={value} style={{ padding: '0.4rem 1rem', backgroundColor: 'rgba(212,175,55,0.1)', color: '#d4af37', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '500' }}>
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
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
              <div style={{ position: 'absolute', inset: '-1rem', backgroundColor: 'rgba(212,175,55,0.05)', borderRadius: '1.5rem', filter: 'blur(20px)' }} />
              <img
                src={aboutData.image}
                alt="Achmed Thronka"
                loading="lazy"
                style={{ position: 'relative', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '-0.5rem', right: '-0.5rem', backgroundColor: '#d4af37', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.75rem', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>CEO & Founder</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <GraduationCap style={{ color: '#d4af37' }} size={24} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0b1a33' }}>Education</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(212,175,55,0.1)' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#0b1a33' }}>{edu.institution}</h4>
                    <p style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: '500' }}>{edu.period}</p>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{edu.location}</span>
                </div>
                {edu.description && (
                  <p style={{ color: '#475569', marginTop: '0.5rem', fontSize: '0.85rem' }}>{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Briefcase style={{ color: '#d4af37' }} size={24} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0b1a33' }}>Professional Experience</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {careerData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(212,175,55,0.1)' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#0b1a33' }}>{job.company}</h4>
                    <p style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: '500' }}>{job.position}</p>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{job.period}</span>
                </div>
                {job.description && (
                  <p style={{ color: '#475569', marginTop: '0.5rem', fontSize: '0.85rem' }}>{job.description}</p>
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
