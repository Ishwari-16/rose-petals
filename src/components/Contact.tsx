import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, Check, Heart, HelpCircle } from 'lucide-react';

export default function Contact() {
  const { t, dict } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'stitching',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Construct highly styled WhatsApp prefilled text
    const interestLabel = formData.interest === 'stitching'
      ? 'Custom Tailoring Services'
      : formData.interest === 'classes'
        ? 'Academy Tailoring Classes'
        : 'Spiritual Consultation (Astro / Healing)';

    const text = encodeURIComponent(
      `*Rose Petals Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Interested In:* ${interestLabel}\n` +
      `*Message:* ${formData.message || 'N/A'}`
    );

    setIsSubmitted(true);
    
    // Redirect to primary boutique number 7385033689 after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/917385033689?text=${text}`, '_blank');
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', interest: 'stitching', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-pink-soft/50 dark:bg-brand-charcoal/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {t('contact.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            We Would Love to Hear From You
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/65 dark:text-brand-pink-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Maps */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Cards Contacts */}
            <div className="p-8 rounded-3xl glass-card-light dark:glass-card-dark border border-brand-primary/10 shadow-lg space-y-6">
              
              {/* Address detail */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50 dark:text-brand-pink-light/50 font-sans">
                    {t('contact.addressLabel')}
                  </h4>
                  <p className="text-sm font-semibold text-brand-charcoal dark:text-white mt-1 leading-relaxed font-sans">
                    {t('contact.address')}
                  </p>
                </div>
              </div>

              {/* Phones detail */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50 dark:text-brand-pink-light/50 font-sans">
                    {t('contact.phoneLabel')}
                  </h4>
                  <div className="space-y-1.5 mt-1">
                    <a href="tel:7385033689" className="block text-sm font-bold text-brand-primary hover:underline font-sans">
                      7385033689 (Boutique)
                    </a>
                    <a href="tel:9579175296" className="block text-sm font-bold text-brand-primary hover:underline font-sans">
                      9579175296 (Classes & Healing)
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours detail */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50 dark:text-brand-pink-light/50 font-sans">
                    {t('contact.hoursLabel')}
                  </h4>
                  <p className="text-sm font-semibold text-brand-charcoal dark:text-white mt-1 font-sans">
                    {t('contact.hoursValue')}
                  </p>
                </div>
              </div>

            </div>

            {/* Active Google Map Embed frame */}
            <div className="rounded-3xl overflow-hidden border border-brand-primary/10 shadow-lg h-72">
              <iframe
                title={t('contact.mapLabel')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.380185966453!2d73.93013259999999!3d18.4915847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16dfb0e6969%3A0xcf036cef6323c8f4!2sRose%20Petals!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-brand-charcoal border border-brand-primary/10 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal dark:text-white mb-6">
                {t('contact.formTitle')}
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-brand-charcoal/65 dark:text-brand-pink-light/70 font-sans uppercase tracking-wider">
                    {t('contact.formName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-primary/10 dark:border-brand-secondary/15 bg-brand-pink-soft/20 dark:bg-brand-charcoal/40 text-sm font-medium text-brand-charcoal dark:text-white focus:outline-hidden focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-brand-charcoal/65 dark:text-brand-pink-light/70 font-sans uppercase tracking-wider">
                    {t('contact.formPhone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your 10-digit mobile number"
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-primary/10 dark:border-brand-secondary/15 bg-brand-pink-soft/20 dark:bg-brand-charcoal/40 text-sm font-medium text-brand-charcoal dark:text-white focus:outline-hidden focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Interest Select category */}
                <div className="space-y-1.5">
                  <label htmlFor="interest" className="text-xs font-semibold text-brand-charcoal/65 dark:text-brand-pink-light/70 font-sans uppercase tracking-wider">
                    What are you looking for?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-primary/10 dark:border-brand-secondary/15 bg-brand-pink-soft/20 dark:bg-brand-charcoal/40 text-sm font-medium text-brand-charcoal dark:text-white focus:outline-hidden focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="stitching" className="dark:bg-brand-charcoal">Custom Stitching (Blouses, Suits, Sarees)</option>
                    <option value="classes" className="dark:bg-brand-charcoal">Tailoring / Fashion Designing Classes</option>
                    <option value="healing" className="dark:bg-brand-charcoal">Spiritual Guidance / Healing Session</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-brand-charcoal/65 dark:text-brand-pink-light/70 font-sans uppercase tracking-wider">
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Specify any details, fabrics, design reference, or class batch requirements..."
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-primary/10 dark:border-brand-secondary/15 bg-brand-pink-soft/20 dark:bg-brand-charcoal/40 text-sm font-medium text-brand-charcoal dark:text-white focus:outline-hidden focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-full text-sm font-bold tracking-widest uppercase text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-emerald-600 shadow-emerald-500/30'
                      : 'bg-gradient-to-r from-brand-primary to-brand-secondary shadow-brand-secondary/20 hover:shadow-brand-secondary/40 hover:scale-[1.01] cursor-pointer active:scale-[0.99]'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4 text-glow-gold animate-bounce" />
                      <span>{t('contact.formSuccess').slice(0, 24)}...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 fill-white text-white" />
                      <span>{t('contact.formSubmit')}</span>
                    </>
                  )}
                </button>
              </form>

              {/* Sub-note */}
              <p className="text-[10px] text-center text-brand-charcoal/50 dark:text-brand-pink-light/40 font-sans mt-4 leading-normal">
                🔒 We respect your privacy. Submitting this form compiles a WhatsApp text. You send it manually in the WhatsApp app.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
