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
    <section id="contact" className="py-16 px-4 md:py-20 md:px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#0b1a33' }}>
            Contact <span style={{ color: '#d4af37' }}>Me</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base">Let's connect and explore opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gold/10">
                <Mail className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy text-base">Email</div>
                  <a href={`mailto:${contactData.email}`} className="text-gray-700 hover:text-gold transition text-base">
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gold/10">
                <Phone className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy text-base">Phone</div>
                  <a href={`tel:${contactData.phone1}`} className="text-gray-700 hover:text-gold transition text-base block">
                    {contactData.phone1}
                  </a>
                  <a href={`tel:${contactData.phone2}`} className="text-gray-700 hover:text-gold transition text-base block">
                    {contactData.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gold/10">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy text-base">Office</div>
                  <div className="text-gray-700 text-base">{contactData.office}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gold/10">
                <MessageSquare className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy text-base">WhatsApp</div>
                  <a href={`https://wa.me/${contactData.whatsapp.replace(/\s/g, '')}`} className="text-gray-700 hover:text-gold transition text-base">
                    Chat with me
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-base font-semibold text-navy mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <a href={contactData.social.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110">
                  <Facebook size={22} className="text-gold" />
                </a>
                <a href={contactData.social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110">
                  <Instagram size={22} className="text-gold" />
                </a>
                <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110">
                  <Linkedin size={22} className="text-gold" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition resize-none text-base"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-3 bg-gold text-white font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-base hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
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
