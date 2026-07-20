import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Sparkles, Send, X, Heart, Eye } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export default function Services() {
  const { t, dict } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Load the full list of services from translations dict
  const servicesList: ServiceItem[] = dict.services.items;

  // Prefilled WhatsApp message customizer
  const getWhatsappLink = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hello Rose Petals Boutique! I visited your website and would like to inquire about "${serviceTitle}" services. Could you please share the pricing and details?`
    );
    return `https://wa.me/917385033689?text=${text}`;
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {t('services.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            Premium Tailoring Services
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/65 dark:text-brand-pink-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {t('services.subtitle')}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid with Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-white/40 dark:border-brand-primary/10 bg-white/60 dark:bg-brand-charcoal/40 backdrop-blur-md transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Card Image Container with zoom */}
              <div className="relative h-52 overflow-hidden bg-brand-pink-light/20">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Micro Action Hover Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                  <span className="p-2 rounded-full bg-white/95 text-brand-primary shadow-md hover:scale-110 transition-transform">
                    <Heart className="w-4 h-4 fill-brand-primary" />
                  </span>
                  <span className="p-2 rounded-full bg-white/95 text-brand-charcoal shadow-md hover:scale-110 transition-transform">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                {/* Decorative Needle/Scissors tag */}
                <span className="absolute bottom-3 left-4 bg-brand-primary/90 text-white text-[10px] font-sans tracking-widest uppercase py-1 px-2.5 rounded-md flex items-center gap-1.5 backdrop-blur-xs">
                  <Scissors className="w-3 h-3" />
                  <span>Boutique Crafted</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-base font-serif font-bold text-brand-charcoal dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/65 dark:text-brand-pink-light/65 leading-relaxed line-clamp-3 font-sans">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-primary/5 flex items-center justify-between text-xs font-semibold text-brand-primary dark:text-brand-secondary uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                  <span>View Details</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Boutique Booking CTA Panel */}
        <div className="mt-16 p-8 rounded-3xl glass-card-light dark:glass-card-dark border border-brand-primary/10 shadow-lg text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex p-3 rounded-full bg-brand-primary/10 text-brand-primary mb-2">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal dark:text-white">
            Have a Specific Design in Mind?
          </h3>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 dark:text-brand-pink-light/75 max-w-2xl mx-auto font-sans leading-relaxed">
            Whether it's a beautiful design you saw on Pinterest, an elaborate bridal blouse sketch, or custom Nauvari draping requirement, Chanchal Ma'am will consult with you to select the fabric, draft the patterns, and handcraft it beautifully.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a
              href="https://wa.me/917385033689?text=Hello!%20I'm%20looking%20for%20a%20custom%20designer%20stitching%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/30 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-brand-primary/20 dark:border-brand-secondary/20 hover:bg-brand-pink-light/30 dark:hover:bg-brand-charcoal/40 text-brand-charcoal dark:text-white font-semibold text-sm transition-colors"
            >
              Book In-Person Appointment
            </a>
          </div>
        </div>

        {/* Service Details modal Popup */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm"
              />

              {/* Modal Card content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white dark:bg-brand-charcoal rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full z-10 border border-brand-primary/10 dark:border-brand-secondary/15 flex flex-col md:flex-row"
              >
                {/* Image on left/top */}
                <div className="md:w-1/2 h-56 md:h-auto relative">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/40 to-transparent" />
                </div>

                {/* Body on right/bottom */}
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-brand-pink-light dark:bg-brand-charcoal text-brand-charcoal/60 dark:text-brand-pink-light/60 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-4">
                    <span className="text-[10px] font-sans tracking-widest uppercase text-brand-primary dark:text-brand-secondary font-semibold">
                      Exclusive Services
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal dark:text-white leading-tight">
                      {selectedService.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/70 dark:text-brand-pink-light/75 leading-relaxed font-sans">
                      {selectedService.desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2 text-xs text-brand-charcoal/80 dark:text-brand-pink-light/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        <span>Meticulous custom measurements</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-brand-charcoal/80 dark:text-brand-pink-light/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        <span>High durability premium stitching</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-brand-charcoal/80 dark:text-brand-pink-light/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        <span>100% Fit & Comfort Guarantee</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-primary/5 flex flex-col gap-2.5">
                    <a
                      href={getWhatsappLink(selectedService.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 fill-white" />
                      <span>{t('services.bookCta')}</span>
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-full py-2.5 rounded-xl border border-brand-primary/10 dark:border-brand-secondary/15 text-brand-charcoal/70 dark:text-brand-pink-light/70 font-semibold text-xs tracking-wider uppercase hover:bg-brand-pink-light/30 dark:hover:bg-brand-charcoal/40 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
