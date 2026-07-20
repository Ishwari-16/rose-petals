import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const { t, dict } = useLanguage();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const testimonials = dict.testimonials.items;

  // Auto-advance testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection('left');
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[index];

  // Dynamic slides variants
  const variants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-white dark:bg-brand-charcoal relative overflow-hidden">
      {/* Background radial accent to ground the testimonials */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {t('testimonials.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            Loved By Our Clients
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/60 dark:text-brand-pink-light/60">
            {t('testimonials.ratingText')}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonial Core Card and Slider */}
        <div className="relative min-h-[280px] sm:min-h-[220px] flex items-center justify-center">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full text-center p-8 sm:p-12 rounded-3xl glass-card-light dark:glass-card-dark border border-brand-primary/10 shadow-lg relative"
            >
              {/* Floating Quote graphic */}
              <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-brand-secondary bg-white dark:bg-brand-charcoal rounded-full p-2.5 shadow-md border border-brand-primary/15" />

              <div className="space-y-6">
                
                {/* Gold 5 Stars */}
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent text-glow-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg font-serif italic text-brand-charcoal/85 dark:text-brand-pink-light/90 leading-relaxed max-w-2xl mx-auto">
                  "{activeTestimonial?.text}"
                </p>

                {/* Profile detail */}
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold font-sans text-brand-charcoal dark:text-white">
                    {activeTestimonial?.name}
                  </h4>
                  <span className="text-[11px] font-sans text-brand-primary dark:text-brand-secondary uppercase tracking-widest font-medium">
                    {activeTestimonial?.role}
                  </span>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-brand-charcoal text-brand-charcoal dark:text-white hover:text-brand-primary border border-brand-primary/10 hover:border-brand-primary/30 shadow-md hover:scale-105 active:scale-95 transition-all z-20"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-brand-charcoal text-brand-charcoal dark:text-white hover:text-brand-primary border border-brand-primary/10 hover:border-brand-primary/30 shadow-md hover:scale-105 active:scale-95 transition-all z-20"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 'right' : 'left');
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === i ? 'w-6 bg-brand-primary' : 'w-2 bg-brand-primary/20 dark:bg-brand-secondary/25'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
