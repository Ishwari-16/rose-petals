import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Tag, Sparkles, Scissors, CheckCircle2, ShoppingBag, Send } from 'lucide-react';
import shopImage from './shop.jpeg';

export default function Brands() {
  const { language } = useLanguage();

  const innerwearBrands = [
    { name: 'Strawberry', category: 'Ladies Innerwear' },
    { name: 'Ratna', category: 'Ladies Innerwear' },
    { name: 'Selsia', category: 'Ladies Innerwear' },
    { name: 'Sindhu', category: 'Ladies Innerwear' },
    { name: 'Saina', category: 'Ladies Innerwear' },
    { name: 'Pooja Ragenee', category: 'Ladies Innerwear' },
    { name: 'Care', category: 'Ladies Innerwear' },
    { name: 'Butter', category: 'Ladies Innerwear' },
    { name: 'Prince', category: 'Ladies Innerwear' },
    { name: 'Smart', category: 'Ladies Innerwear' },
    { name: 'Avenue', category: 'Ladies Innerwear' },
    { name: 'Shagun', category: 'Ladies Innerwear' },
  ];

  const threadBrands = [
    { name: 'Dhanashri (Spun Polyester Thread)', category: 'Sewing & Tailoring Thread' },
    { name: 'Meera Poly', category: 'Sewing & Tailoring Thread' },
    { name: 'Hammer Poly', category: 'Sewing & Tailoring Thread' },
  ];

  const getWhatsappLink = () => {
    const text = encodeURIComponent(
      'Hello Rose Petals Boutique! I visited your website and would like to inquire about ladies innerwear brands and tailoring materials available at your shop.'
    );
    return `https://wa.me/917385033689?text=${text}`;
  };

  return (
    <section id="brands" className="py-24 bg-brand-pink-soft/60 dark:bg-brand-charcoal/40 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/5 dark:bg-brand-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/5 dark:bg-brand-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {language === 'mr' ? 'अॅव्हेलेबल ब्रँड्स' : language === 'hi' ? 'उपलब्ध ब्रांड्स' : 'LADIES INNERWEAR & TAILORING MATERIALS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            {language === 'mr' ? 'आमच्या दुकानातील प्रसिद्ध ब्रँड्स' : language === 'hi' ? 'हमारे स्टोर पर उपलब्ध ब्रांड्स' : 'Available Brands'}
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/65 dark:text-brand-pink-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {language === 'mr'
              ? 'आमच्या बुटीकमध्ये सर्वोत्कृष्ट लेडीज इनरवेअर आणि उच्च दर्जाचे शिलाई धागे उपलब्ध आहेत.'
              : language === 'hi'
              ? 'हमारे बुटीक में बेहतरीन लेडीज इनरवेयर और उच्च गुणवत्ता वाले सिलाई धागे उपलब्ध हैं।'
              : 'Discover top-rated ladies innerwear brands and premium quality tailoring materials available at Rose Petals Boutique.'}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Uploaded Shop Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-primary/15 h-[380px] sm:h-[480px] img-zoom-container group bg-brand-pink-light/30">
              <img
                src={shopImage}
                alt="Rose Petals Boutique Shop & Products"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/85 via-brand-charcoal/30 to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-brand-charcoal/90 backdrop-blur-md text-brand-primary text-xs font-semibold shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-brand-primary text-brand-primary" />
                <span>Original Shop Store</span>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-brand-secondary text-xs uppercase tracking-wider font-semibold">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Quality Guarantee</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
                  Rose Petals Boutique & Store Collection
                </h3>
                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Authentic ladies innerwear, polyester sewing threads, and tailoring accessories stocked directly at our Hadapsar boutique.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Available Brands Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Ladies Innerwear Brands Sub-Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-brand-primary/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Tag className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-charcoal dark:text-white">
                    Ladies Innerwear Brands
                  </h3>
                </div>
                <span className="text-xs font-semibold text-brand-primary dark:text-brand-secondary bg-brand-primary/10 px-2.5 py-1 rounded-full">
                  12 Top Brands
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {innerwearBrands.map((brand, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="p-3.5 rounded-xl glass-card-light dark:glass-card-dark border border-brand-primary/10 shadow-xs hover:shadow-md hover:border-brand-primary/30 transition-all flex items-center gap-2.5 group cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-primary dark:text-brand-secondary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-brand-charcoal dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors font-sans truncate">
                      {brand.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sewing & Tailoring Thread Brands Sub-Section */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-brand-primary/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-brand-secondary/20 text-brand-primary dark:text-brand-secondary">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-charcoal dark:text-white">
                    Sewing & Tailoring Thread
                  </h3>
                </div>
                <span className="text-xs font-semibold text-brand-primary dark:text-brand-secondary bg-brand-primary/10 px-2.5 py-1 rounded-full">
                  Premium Quality
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {threadBrands.map((brand, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="p-3.5 rounded-xl glass-card-light dark:glass-card-dark border border-brand-primary/10 shadow-xs hover:shadow-md hover:border-brand-primary/30 transition-all flex items-center gap-2.5 group cursor-default"
                  >
                    <Sparkles className="w-4 h-4 text-brand-primary dark:text-brand-secondary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-brand-charcoal dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors font-sans leading-tight">
                      {brand.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Inquire via WhatsApp Banner */}
            <div className="pt-2">
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-linear-to-r from-brand-primary to-brand-secondary text-white font-semibold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span>Inquire About Stock & Sizes on WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
