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

  return (
    <section id="contact" style={{ padding: '4rem 1.5rem', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0b1a33' }}>
            Contact <span style={{ color: '#d4af37' }}>Me</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
            Let's connect and explore opportunities
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Contact Info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}>
                <Mail style={{ color: '#d4af37', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                <div>
                  <div style={{ fontWeight: '600', color: '#0b1a33', fontSize: '0.875rem' }}>Email</div>
                  <a href={`mailto:${contactData.email}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem' }}>
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}>
                <Phone style={{ color: '#d4af37', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                <div>
                  <div style={{ fontWeight: '600', color: '#0b1a33', fontSize: '0.875rem' }}>Phone</div>
                  <a href={`tel:${contactData.phone1}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', display: 'block' }}>
                    {contactData.phone1}
                  </a>
                  <a href={`tel:${contactData.phone2}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', display: 'block' }}>
                    {contactData.phone2}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}>
                <MapPin style={{ color: '#d4af37', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                <div>
                  <div style={{ fontWeight: '600', color: '#0b1a33', fontSize: '0.875rem' }}>Office</div>
                  <div style={{ color: '#475569', fontSize: '0.875rem' }}>{contactData.office}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}>
                <MessageSquare style={{ color: '#d4af37', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                <div>
                  <div style={{ fontWeight: '600', color: '#0b1a33', fontSize: '0.875rem' }}>WhatsApp</div>
                  <a href={`https://wa.me/${contactData.whatsapp.replace(/\s/g, '')}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem' }}>
                    Chat with me
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#0b1a33', marginBottom: '0.75rem' }}>Connect with me</h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href={contactData.social.facebook} target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem', backgroundColor: 'rgba(212,175,55,0.1)', borderRadius: '9999px', transition: 'all 0.3s' }}>
                  <Facebook size={20} style={{ color: '#d4af37' }} />
                </a>
                <a href={contactData.social.instagram} target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem', backgroundColor: 'rgba(212,175,55,0.1)', borderRadius: '9999px', transition: 'all 0.3s' }}>
                  <Instagram size={20} style={{ color: '#d4af37' }} />
                </a>
                <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem', backgroundColor: 'rgba(212,175,55,0.1)', borderRadius: '9999px', transition: 'all 0.3s' }}>
                  <Linkedin size={20} style={{ color: '#d4af37' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#0b1a33', marginBottom: '0.25rem' }}>
                  Your Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', color: '#0b1a33', outline: 'none', fontSize: '0.875rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#0b1a33', marginBottom: '0.25rem' }}>
                  Email Address <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', color: '#0b1a33', outline: 'none', fontSize: '0.875rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#0b1a33', marginBottom: '0.25rem' }}>
                  Subject <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', color: '#0b1a33', outline: 'none', fontSize: '0.875rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#0b1a33', marginBottom: '0.25rem' }}>
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', color: '#0b1a33', outline: 'none', resize: 'vertical', fontSize: '0.875rem' }}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#d4af37',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  opacity: formStatus === 'loading' ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem'
                }}
              >
                {formStatus === 'loading' ? (
                  'Sending...'
                ) : formStatus === 'success' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <Send size={18} />
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
