import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t, dict } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FaqItem[] = dict.faq.items;

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-brand-charcoal relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {t('faq.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            Have Any Questions?
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/60 dark:text-brand-pink-light/60">
            {t('faq.subtitle')}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-brand-primary/10 dark:border-brand-secondary/15 overflow-hidden transition-shadow duration-200 bg-brand-pink-soft/20 dark:bg-brand-charcoal/50"
              >
                {/* Header question click zone */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-brand-charcoal dark:text-white hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span>{item.q}</span>
                  </div>
                  <span className="p-1 rounded-full bg-brand-pink-light/50 dark:bg-brand-charcoal border border-brand-primary/5">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-primary" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-brand-charcoal/50 dark:text-white/50" />
                    )}
                  </span>
                </button>

                {/* Animated expandable body panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t border-brand-primary/5 text-xs sm:text-sm text-brand-charcoal/75 dark:text-brand-pink-light/70 font-sans leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
