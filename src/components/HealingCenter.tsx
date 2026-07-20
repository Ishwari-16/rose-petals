import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Sparkles, Compass, Shield, Heart, Eye, Send, Moon, Sun, Award } from 'lucide-react';

export default function HealingCenter() {
  const { t, dict } = useLanguage();

  const getHealingIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5 text-brand-gold-muted animate-[spin_8s_linear_infinite]" />;
      case 1: return <Award className="w-5 h-5 text-brand-gold-muted" />;
      case 2: return <Sparkles className="w-5 h-5 text-brand-gold-muted animate-pulse" />;
      case 3: return <Heart className="w-5 h-5 text-brand-gold-muted" />;
      default: return <Shield className="w-5 h-5 text-brand-gold-muted" />;
    }
  };

  const spiritualCta = () => {
    const text = encodeURIComponent(
      "Hello! I am interested in booking an Astro Hindvi / Shubharambh Healing consultation with Chanchal Ma'am. Please let me know the availability and details for Numerology / Spiritual Healing."
    );
    return `https://wa.me/919579175296?text=${text}`;
  };

  return (
    <section
      id="healing"
      className="py-24 bg-brand-charcoal dark:bg-black text-white relative overflow-hidden"
    >
      {/* Decorative stars and nebula background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Small floating cosmic elements */}
      <div className="absolute top-1/3 left-12 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-8 w-44 h-44 bg-brand-accent/5 rounded-full blur-3xl animate-float-slower" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-accent text-glow-gold block">
            {t('healing.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            {t('healing.title')}
          </h2>
          <p className="text-xs sm:text-sm text-brand-pink-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {t('healing.subtitle')}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-accent to-brand-secondary mx-auto rounded-full mt-4 shadow-md shadow-brand-accent/20" />
        </div>

        {/* Asymmetrical Layout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Healing Center intro card */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-3xl glass-card-dark border-2 border-brand-accent/20 relative overflow-hidden shadow-2xl"
            >
              {/* Star corner details */}
              <div className="absolute -top-3 -left-3 text-brand-accent/20">
                <Moon className="w-16 h-16 animate-float-slow" />
              </div>

              <div className="relative space-y-6">
                <span className="px-3.5 py-1.5 rounded-full border border-brand-accent/30 text-[10px] font-sans uppercase text-brand-accent tracking-widest bg-brand-charcoal/40 font-semibold inline-block">
                  Astro Hindvi Division
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-semibold leading-tight text-white">
                  Shubharambh Healing Center
                </h3>

                <p className="text-xs sm:text-sm text-brand-pink-light/80 leading-relaxed font-sans font-normal">
                  {t('healing.intro')}
                </p>

                {/* Healing parameters badges */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-accent text-glow-gold" />
                    <span className="text-xs text-brand-pink-light/90">Numerological Vibrational Alignments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-accent text-glow-gold" />
                    <span className="text-xs text-brand-pink-light/90">Signature Pattern Corrections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-accent text-glow-gold" />
                    <span className="text-xs text-brand-pink-light/90">Energy Balancing & Space Cleansing</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase text-brand-pink-light/50 tracking-wider">Consultation Helpline</span>
                      <a href="tel:9579175296" className="text-base font-bold text-brand-accent font-sans hover:underline">
                        +91 9579175296
                      </a>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-brand-primary/20 text-brand-secondary uppercase tracking-widest border border-brand-primary/10">
                      Private Slots
                    </span>
                  </div>

                  <a
                    href={spiritualCta()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-brand-accent to-brand-secondary text-brand-charcoal font-bold text-xs uppercase tracking-widest text-center shadow-lg hover:shadow-brand-accent/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4.5 h-4.5 fill-brand-charcoal text-brand-charcoal" />
                    <span>{t('healing.ctaConsult')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Healing Services list */}
          <div className="lg:col-span-7 space-y-4">
            {dict.healing.services.map((serv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-brand-charcoal/70 border border-brand-accent/5 hover:border-brand-accent/30 hover:bg-brand-charcoal hover:shadow-lg hover:translate-x-1.5 transition-all duration-300 flex items-start gap-4 group"
              >
                {/* Spiritual Icon frame */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/25 transition-colors flex-shrink-0">
                  {getHealingIcon(index)}
                </div>

                {/* Service Details */}
                <div className="space-y-1.5">
                  <h4 className="text-base font-serif font-bold text-white group-hover:text-brand-accent transition-colors">
                    {serv.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-pink-light/70 font-sans leading-relaxed">
                    {serv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
