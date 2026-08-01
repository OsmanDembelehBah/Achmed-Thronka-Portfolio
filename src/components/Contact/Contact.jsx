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
    <section id="contact" className="py-20 px-6 bg-white dark:bg-navy/95">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            Contact <span className="text-gold">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-base">
            Let's connect and explore opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
                <Mail className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy dark:text-white">Email</div>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-gold transition"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
                <Phone className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy dark:text-white">Phone</div>
                  <a
                    href={`tel:${contactData.phone1}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-gold transition block"
                  >
                    {contactData.phone1}
                  </a>
                  <a
                    href={`tel:${contactData.phone2}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-gold transition block"
                  >
                    {contactData.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy dark:text-white">Office</div>
                  <div className="text-gray-600 dark:text-gray-300">{contactData.office}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
                <MessageSquare className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy dark:text-white">WhatsApp</div>
                  <a
                    href={`https://wa.me/${contactData.whatsapp.replace(/\s/g, '')}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-gold transition"
                  >
                    Chat with me
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-navy dark:text-white mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <a
                  href={contactData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
                >
                  <Facebook size={22} className="text-gold" />
                </a>
                <a
                  href={contactData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
                >
                  <Instagram size={22} className="text-gold" />
                </a>
                <a
                  href={contactData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
                >
                  <Linkedin size={22} className="text-gold" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Proper Size */}
          <div className="bg-white dark:bg-navy/80 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy dark:text-white/70 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-navy dark:text-white placeholder-gray-400 dark:placeholder-white/50 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy dark:text-white/70 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-navy dark:text-white placeholder-gray-400 dark:placeholder-white/50 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy dark:text-white/70 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-navy dark:text-white placeholder-gray-400 dark:placeholder-white/50 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy dark:text-white/70 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry"
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-navy dark:text-white placeholder-gray-400 dark:placeholder-white/50 focus:outline-none focus:border-gold transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className={`w-full py-3 bg-gold text-white font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-base ${
                  formStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                }`}
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
