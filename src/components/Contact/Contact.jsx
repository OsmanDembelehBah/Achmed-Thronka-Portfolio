import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Linkedin,
  Instagram,
  Facebook,
  Send,
} from 'lucide-react';
import { contactData } from '../../data/ahmedData';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  // Force light background with dark text
  const styles = {
    section: {
      padding: '80px 24px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#0b1a33',
      textAlign: 'center',
      marginBottom: '0.5rem',
    },
    subtitle: {
      color: '#475569',
      textAlign: 'center',
      marginBottom: '3rem',
      fontSize: '1.1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
    },
    infoCard: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      padding: '1.25rem',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      border: '1px solid rgba(212,175,55,0.15)',
      marginBottom: '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    },
    infoLabel: {
      fontWeight: '600',
      color: '#0b1a33',
      fontSize: '0.9rem',
    },
    infoText: {
      color: '#475569',
      fontSize: '0.95rem',
    },
    formContainer: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      border: '1px solid #e2e8f0',
    },
    label: {
      display: 'block',
      fontSize: '0.9rem',
      fontWeight: '500',
      color: '#0b1a33',
      marginBottom: '0.25rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.75rem',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      color: '#0b1a33',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.75rem',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      color: '#0b1a33',
      fontSize: '1rem',
      outline: 'none',
      resize: 'vertical',
      minHeight: '120px',
      transition: 'border-color 0.3s',
    },
    button: {
      width: '100%',
      padding: '0.85rem',
      backgroundColor: '#d4af37',
      color: 'white',
      fontWeight: '600',
      borderRadius: '0.75rem',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    socialLink: {
      padding: '0.75rem',
      backgroundColor: 'rgba(212,175,55,0.1)',
      borderRadius: '9999px',
      display: 'inline-flex',
      transition: 'all 0.3s',
      marginRight: '0.5rem',
    },
    gold: { color: '#d4af37' },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Contact <span style={styles.gold}>Me</span>
        </h2>
        <p style={styles.subtitle}>Let's connect and explore opportunities</p>

        <div style={styles.grid}>
          {/* Left - Contact Info */}
          <div>
            <div style={styles.infoCard}>
              <Mail style={styles.gold} size={22} />
              <div>
                <div style={styles.infoLabel}>Email</div>
                <a href={`mailto:${contactData.email}`} style={{ ...styles.infoText, textDecoration: 'none' }}>
                  {contactData.email}
                </a>
              </div>
            </div>

            <div style={styles.infoCard}>
              <Phone style={styles.gold} size={22} />
              <div>
                <div style={styles.infoLabel}>Phone</div>
                <div style={styles.infoText}>{contactData.phone1}</div>
                <div style={styles.infoText}>{contactData.phone2}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <MapPin style={styles.gold} size={22} />
              <div>
                <div style={styles.infoLabel}>Office</div>
                <div style={styles.infoText}>{contactData.office}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <MessageSquare style={styles.gold} size={22} />
              <div>
                <div style={styles.infoLabel}>WhatsApp</div>
                <a href={`https://wa.me/${contactData.whatsapp.replace(/\s/g, '')}`} style={{ ...styles.infoText, textDecoration: 'none' }}>
                  Chat with me
                </a>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <div style={{ fontWeight: '600', color: '#0b1a33', marginBottom: '0.75rem' }}>Connect with me</div>
              <div>
                <a href={contactData.social.facebook} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <Facebook size={22} style={styles.gold} />
                </a>
                <a href={contactData.social.instagram} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <Instagram size={22} style={styles.gold} />
                </a>
                <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <Linkedin size={22} style={styles.gold} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={styles.label}>Your Name <span style={{ color: '#ef4444' }}>*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  style={styles.input}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={styles.label}>Email Address <span style={{ color: '#ef4444' }}>*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  style={styles.input}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={styles.label}>Subject <span style={{ color: '#ef4444' }}>*</span></label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                  style={styles.input}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={styles.label}>Message <span style={{ color: '#ef4444' }}>*</span></label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry"
                  style={styles.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                style={{
                  ...styles.button,
                  opacity: formStatus === 'loading' ? 0.7 : 1,
                  cursor: formStatus === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {formStatus === 'loading' ? (
                  'Sending...'
                ) : formStatus === 'success' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
