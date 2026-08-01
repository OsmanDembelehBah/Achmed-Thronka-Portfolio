import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { contactData } from '../../data/ahmedData';

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  // TODO: Replace these with your EmailJS credentials
  // Sign up at https://www.emailjs.com/ to get your credentials
  const EMAILJS_SERVICE_ID = 'service_xxxxxxxx'; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxx'; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx'; // Replace with your public key

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus('loading');
    setErrorMessage('');

    try {
      // If EmailJS is configured, send the email
      if (EMAILJS_SERVICE_ID !== 'service_xxxxxxxx') {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
      } else {
        // Fallback: Simulate sending (for demo)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Email would be sent to:', contactData.email);
        console.log('Form data:', formData);
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-navy/90">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            Contact <span className="text-gold">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Let's connect and explore opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl hover:shadow-md transition-all border border-gold/10 hover:border-gold/30">
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

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl hover:shadow-md transition-all border border-gold/10 hover:border-gold/30">
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

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl hover:shadow-md transition-all border border-gold/10 hover:border-gold/30">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy dark:text-white">Office</div>
                  <div className="text-gray-600 dark:text-gray-300">{contactData.office}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl hover:shadow-md transition-all border border-gold/10 hover:border-gold/30">
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

            {/* Social Links - Updated: Facebook, Instagram, LinkedIn only */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-navy dark:text-white mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <a
                  href={contactData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-gold" />
                </a>
                <a
                  href={contactData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-gold" />
                </a>
                <a
                  href={contactData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 rounded-full hover:bg-gold/20 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-gold" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-navy/5 to-gold/5 dark:from-navy/80 dark:to-navy/90 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200 dark:border-white/10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy dark:text-white/70 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full p-3 rounded-xl bg-white dark:bg-white/10 border ${
                    errors.name ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                  } text-navy dark:text-white placeholder-gray-400 dark:placeholder-white/50 focus:outline-none focus:border-gold transition`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.name}
                  </p>
                )}
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
                  placeholder="Enter your email"
                  className={`w-full p-3 rounded-xl bg-white dark:bg-white/10 border ${
                    errors.email ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                  } text-navy dark:text-white placeholder-gray-400 dark:placeholder-white/50 focus:outline-none focus:border-gold transition`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
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
                  placeholder="Enter subject"
                  className={`w-full p-3 rounded-xl bg-white dark:bg-white/10 border ${
                    errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                  } text-navy dark:text-white placeholder-gray-400 dark:placeholder-white/50 focus:outline-none focus:border-gold transition`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy dark:text-white/70 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry"
                  className={`w-full p-3 rounded-xl bg-white dark:bg-white/10 border ${
                    errors.message ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                  } text-navy dark:text-white placeholder-gray-400 dark:placeholder-white/50 focus:outline-none focus:border-gold transition resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className={`w-full px-8 py-3 bg-gold text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-glow flex items-center justify-center gap-2 ${
                  formStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                {formStatus === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <AlertCircle size={20} />
                    {errorMessage || 'Failed to send. Please try again.'}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm text-center mt-2"
                >
                  ✓ Your message has been sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
