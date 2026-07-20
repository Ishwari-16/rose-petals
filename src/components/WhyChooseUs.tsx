import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Target, Users, BookOpen, Coins, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const { t, dict } = useLanguage();

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Target className="w-6 h-6" />;
      case 1: return <Users className="w-6 h-6" />;
      case 2: return <BookOpen className="w-6 h-6" />;
      case 3: return <Coins className="w-6 h-6" />;
      case 4: return <ShieldCheck className="w-6 h-6" />;
      default: return <Heart className="w-6 h-6" />;
    }
  };

  const colors = [
    'from-pink-500/10 to-rose-500/15 text-pink-600 dark:text-pink-400',
    'from-purple-500/10 to-indigo-500/15 text-purple-600 dark:text-purple-400',
    'from-amber-500/10 to-yellow-500/15 text-amber-600 dark:text-amber-400',
    'from-emerald-500/10 to-teal-500/15 text-emerald-600 dark:text-emerald-400',
    'from-blue-500/10 to-cyan-500/15 text-blue-600 dark:text-blue-400',
    'from-rose-500/10 to-red-500/15 text-rose-600 dark:text-rose-400',
  ];

  return (
    <section className="py-24 bg-white dark:bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {t('whyUs.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            Designed for Your Absolute Success
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/65 dark:text-brand-pink-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {t('whyUs.subtitle')}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Features Bento-Like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.whyUs.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-brand-charcoal/40 backdrop-blur-md border border-white/40 dark:border-brand-primary/10 hover:border-brand-primary/20 dark:hover:border-brand-secondary/20 hover:bg-white/85 dark:hover:bg-brand-charcoal/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-4">
                {/* Icon block with dynamic background gradient */}
                <div className={`p-3.5 rounded-2xl w-fit bg-linear-to-br ${colors[index % colors.length]}`}>
                  {getIcon(index)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-brand-charcoal dark:text-white group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/65 dark:text-brand-pink-light/65 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom decorative accent */}
              <div className="mt-6 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
                <span className="text-[10px] font-sans tracking-widest text-brand-charcoal/40 dark:text-brand-pink-light/40 uppercase">
                  Rose Petals Excellence
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
