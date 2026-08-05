import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Instagram, Facebook, Send } from 'lucide-react';
import { contactData } from '../../data/ahmedData';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

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

  // Clean phone string to digits-only for WhatsApp deep links
  const whatsappDigits = contactData.whatsapp ? contactData.whatsapp.replace(/\D/g, '') : '';

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-navy/90">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Contact <span className="text-gold">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">
            Let's connect and explore opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Details Column */}
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-gold/10 shadow-xs">
                <Mail className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Email</div>
                  <a href={`mailto:${contactData.email}`} className="text-slate-700 dark:text-gray-300 hover:text-gold transition break-all text-xs sm:text-sm font-medium">
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-gold/10 shadow-xs">
                <Phone className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Phone</div>
                  <a href={`tel:${contactData.phone1}`} className="text-slate-700 dark:text-gray-300 hover:text-gold transition block text-xs sm:text-sm font-medium">
                    {contactData.phone1}
                  </a>
                  <a href={`tel:${contactData.phone2}`} className="text-slate-700 dark:text-gray-300 hover:text-gold transition block text-xs sm:text-sm font-medium">
                    {contactData.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-gold/10 shadow-xs">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Office</div>
                  <div className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm font-medium leading-relaxed">
                    {contactData.office}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-gold/10 shadow-xs">
                <MessageSquare className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">WhatsApp</div>
                  <a href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-gray-300 hover:text-gold transition text-xs sm:text-sm font-medium">
                    Chat with me directly
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6 justify-start">
              {contactData.social.facebook && (
                <a href={contactData.social.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110 border border-gold/20" aria-label="Facebook">
                  <Facebook size={20} className="text-gold" />
                </a>
              )}
              {contactData.social.instagram && (
                <a href={contactData.social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110 border border-gold/20" aria-label="Instagram">
                  <Instagram size={20} className="text-gold" />
                </a>
              )}
              {contactData.social.linkedin && (
                <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110 border border-gold/20" aria-label="LinkedIn">
                  <Linkedin size={20} className="text-gold" />
                </a>
              )}
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-slate-50 dark:bg-slate-900/90 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Name" 
                  className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition text-sm sm:text-base" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Email" 
                  className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition text-sm sm:text-base" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  placeholder="Subject" 
                  className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition text-sm sm:text-base" 
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Message" 
                  className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition text-sm sm:text-base resize-none" 
                />
              </div>
              <button 
                type="submit" 
                disabled={formStatus === 'loading'} 
                className="w-full py-3.5 bg-gold text-white font-semibold rounded-xl hover:opacity-95 active:scale-98 transition-all duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {formStatus === 'loading' ? (
                  'Sending...'
                ) : formStatus === 'success' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
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
