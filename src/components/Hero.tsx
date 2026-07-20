import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, GraduationCap, ArrowRight, Sparkles, Send } from 'lucide-react';

export default function Hero() {
  const { t, language } = useLanguage();
  const [featureIndex, setFeatureIndex] = useState(0);

  const features = [
    "Premium Tailoring",
    "Designer Blouses",
    "Professional Stitching",
    "Tailoring Classes"
  ];

  // Rotate typewriter subheadings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-radial-gradient/5 dark:bg-brand-charcoal/10"
    >
      {/* Decorative luxury abstract glowing backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-secondary/10 dark:bg-brand-primary/5 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-accent/5 dark:bg-brand-secondary/5 rounded-full blur-3xl -z-10 animate-float-slower" />
      
      {/* Absolute grid lines for that Swiss/Modern fashion house structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(194,24,91,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(194,24,91,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Typography Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-light dark:glass-card-dark border border-brand-primary/10 text-brand-primary dark:text-brand-secondary text-xs sm:text-sm font-medium tracking-wider uppercase mx-auto lg:mx-0 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-brand-accent fill-brand-accent animate-pulse" />
              <span>{t('hero.tagline')}</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-brand-charcoal dark:text-white leading-tight">
                Create Your Style <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[size:200%_auto] animate-[pulse_6s_linear_infinite] block mt-1">
                  with Rose Petals
                </span>
              </h1>
              
              {/* Typewriter looping subheading */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2.5">
                <span className="text-base sm:text-xl font-sans font-light text-brand-charcoal/70 dark:text-brand-pink-light/70 uppercase tracking-widest">
                  Specialists In:
                </span>
                <div className="relative overflow-hidden h-full flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={featureIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="text-lg sm:text-2xl font-serif font-semibold text-brand-primary dark:text-brand-secondary tracking-wide border-b-2 border-brand-accent"
                    >
                      {features[featureIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Descriptive Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-charcoal/75 dark:text-brand-pink-light/80 font-sans font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 border-brand-accent pl-4 italic text-left"
            >
              Experience Pune's leading designer boutique and tailor academy. Under the expert guidance of <strong>Chanchal Uday Kirad</strong>, we deliver bespoke royal stitching and offer 100% practical, certified courses that turn beginner sewing lovers into confident boutique entrepreneurs.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Book Appointment CTA */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-lg shadow-brand-secondary/30 hover:shadow-brand-secondary/50 hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>{t('hero.ctaBook')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Academy Classes CTA */}
              <a
                href="#classes"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase text-white dark:text-brand-charcoal bg-brand-charcoal dark:bg-white hover:bg-brand-charcoal/90 dark:hover:bg-white/95 shadow-xl flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all duration-300"
              >
                <GraduationCap className="w-5 h-5 text-brand-primary dark:text-brand-secondary" />
                <span>{t('hero.ctaClasses')}</span>
                <span className="bg-white/20 dark:bg-brand-charcoal/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-tighter">Admission Open</span>
              </a>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/917385033689?text=Hello%20Rose%20Petals%20Boutique!%20I'm%20interested%20in%20your%20boutique%20services%20/%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 hover:bg-emerald-100 dark:hover:bg-emerald-950/40 border border-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2 hover:translate-y-[-2px]"
              >
                <Send className="w-4.5 h-4.5" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick Metrics / Features Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 border-t border-brand-primary/10 dark:border-brand-secondary/10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-brand-primary dark:text-brand-secondary">200+</span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-brand-charcoal/60 dark:text-brand-pink-light/60">Happy Clients</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-brand-primary dark:text-brand-secondary">100%</span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-brand-charcoal/60 dark:text-brand-pink-light/60">Practical Classes</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-brand-primary dark:text-brand-secondary">⭐ 4.5</span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-brand-charcoal/60 dark:text-brand-pink-light/60">Google Rating</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-brand-primary dark:text-brand-secondary">Pune</span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-brand-charcoal/60 dark:text-brand-pink-light/60">Hadapsar Location</span>
              </div>
            </motion.div>

          </div>

          {/* Right Image / Overlapping Collage Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[450px] sm:h-[550px]">
            {/* Background luxury gold rings */}
            <div className="absolute w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full border-2 border-dashed border-brand-accent/20 dark:border-brand-secondary/10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-brand-primary/10 -z-10" />

            {/* Primary Portrait Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute w-[240px] sm:w-[300px] h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-brand-charcoal z-10 img-zoom-container hover:-rotate-1 transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
                alt="Beautiful Woman wearing elegant Indian Designer Wear"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-sm tracking-wider">Bridal & Aari Excellence</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-secondary font-sans">Rose Petals Couture</p>
              </div>
            </motion.div>

            {/* Secondary Overlapping Frame (Creative action view) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50, y: 50 }}
              animate={{ opacity: 1, scale: 1, x: 40, y: 60 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute w-[160px] sm:w-[200px] h-[200px] sm:h-[250px] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-accent/75 z-20 img-zoom-container hover:scale-105 transition-all duration-300 hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
                alt="Detailed tailoring craft"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-brand-primary/20 to-transparent" />
            </motion.div>

            {/* Small Floating Details Card (Sewing details / certification) */}
            <motion.div
              initial={{ opacity: 0, x: -60, y: -80 }}
              animate={{ opacity: 1, x: -70, y: -100 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute left-4 top-1/4 z-30 p-4 rounded-xl glass-card-light dark:glass-card-dark shadow-xl border border-brand-primary/10 flex items-center gap-3 animate-float-slow hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary dark:text-brand-secondary font-bold font-serif text-lg">
                R
              </div>
              <div>
                <p className="text-xs font-bold text-brand-charcoal dark:text-white leading-none">Pune's Best Boutique</p>
                <span className="text-[9px] font-sans text-brand-charcoal/60 dark:text-brand-pink-light/60 mt-1 block">Certified Academy & Stitching</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
