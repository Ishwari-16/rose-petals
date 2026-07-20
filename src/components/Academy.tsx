import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { GraduationCap, Clock, Check, Calendar, AlertTriangle, ArrowRight, BookOpen, Sparkles, Send } from 'lucide-react';

export default function Academy() {
  const { t, dict } = useLanguage();

  const syllabusPoints = dict.classes.features;

  const getSyllabusIcon = (index: number) => {
    switch (index % 3) {
      case 0: return <GraduationCap className="w-5 h-5 text-brand-primary" />;
      case 1: return <BookOpen className="w-5 h-5 text-brand-secondary" />;
      default: return <Sparkles className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section id="classes" className="py-24 bg-brand-pink-soft/50 dark:bg-brand-charcoal/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,128,171,0.07),transparent_50%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {t('classes.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            Start Your Fashion Design Journey
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/65 dark:text-brand-pink-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {t('classes.subtitle')}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Outer Grid: Levels (Timeline) on Left, Curriculum & Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Timeline Levels */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-brand-primary" />
              <span>{t('classes.timelineTitle')}</span>
            </h3>

            {/* Timeline element */}
            <div className="relative border-l-2 border-brand-primary/20 dark:border-brand-secondary/20 pl-6 sm:pl-8 ml-4 space-y-12">
              {dict.classes.levels.map((lvl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline bullet */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white dark:bg-brand-charcoal border-4 border-brand-primary dark:border-brand-secondary flex items-center justify-center text-[10px] sm:text-xs font-serif font-bold text-brand-primary dark:text-brand-secondary shadow-sm group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </div>

                  {/* Level Details Card */}
                  <div className="p-6 rounded-2xl glass-card-light dark:glass-card-dark border border-brand-primary/5 shadow-xs hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-sans tracking-widest font-bold uppercase text-brand-primary dark:text-brand-secondary">
                        {lvl.level}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary dark:text-brand-secondary text-xs font-medium font-sans w-fit">
                        Duration: {lvl.duration}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-brand-charcoal dark:text-white group-hover:text-brand-primary transition-colors mb-2">
                      {lvl.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal/70 dark:text-brand-pink-light/75 leading-relaxed font-sans">
                      {lvl.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Features, Timings, Admission Form Alert */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-brand-primary" />
              <span>{t('classes.curriculumTitle')}</span>
            </h3>

            {/* Curriculum grid bullet list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {syllabusPoints.map((point, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white dark:bg-brand-charcoal border border-brand-primary/5 hover:border-brand-primary/25 shadow-xs flex items-start gap-3 transition-colors group"
                >
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-brand-pink-light dark:bg-brand-charcoal/40 text-brand-primary flex items-center justify-center transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    {getSyllabusIcon(index)}
                  </div>
                  <span className="text-xs sm:text-sm text-brand-charcoal/80 dark:text-brand-pink-light/85 font-sans leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Admission Open Announcement Board */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-brand-primary/10 to-brand-secondary/15 dark:from-brand-primary/5 dark:to-brand-secondary/10 border border-brand-primary/15 relative overflow-hidden space-y-4">
              {/* Highlight background text */}
              <div className="absolute -right-6 -bottom-6 opacity-5 dark:opacity-10 text-brand-primary rotate-12">
                <GraduationCap className="w-40 h-40" />
              </div>

              <div className="flex items-center gap-2 text-brand-primary dark:text-brand-secondary">
                <Clock className="w-5 h-5" />
                <span className="font-sans text-sm font-semibold tracking-wider uppercase">
                  {t('classes.timingLabel')}
                </span>
              </div>

              <div className="space-y-1">
                <span className="block text-xl sm:text-2xl font-serif font-bold text-brand-charcoal dark:text-white">
                  {t('classes.timingValue')}
                </span>
                <p className="text-xs text-brand-charcoal/60 dark:text-brand-pink-light/65">
                  100% Practical direct classroom sessions with sewing machines.
                </p>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/10 text-amber-800 dark:text-amber-400 w-fit">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-[11px] font-sans font-medium">
                  {t('classes.limitedSeats')}
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href={`https://wa.me/917385033689?text=${encodeURIComponent(
                    "Hello Rose Petals Academy! I am interested in joining your Tailoring Classes. Please share the details regarding batch admission, fees, and starting dates."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:brightness-110 text-white font-bold text-xs tracking-wider uppercase text-center shadow-lg shadow-brand-secondary/30 hover:shadow-brand-secondary/50 flex items-center justify-center gap-2 group transition-all duration-300 hover:translate-y-[-1px]"
                >
                  <span>{t('classes.ctaJoin')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="tel:9579175296"
                  className="text-xs font-semibold text-brand-charcoal dark:text-brand-pink-light uppercase tracking-wider hover:text-brand-primary transition-colors flex items-center gap-1.5"
                >
                  <span>Call Admissions</span>
                  <span>9579175296</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
