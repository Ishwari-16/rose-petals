import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp, Send } from 'lucide-react';

export default function FloatingActions() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      
      {/* WhatsApp Chat Floating Button */}
      <motion.a
        href="https://wa.me/917385033689?text=Hello%20Rose%20Petals!%20I%27m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20boutique%20services%20and%20classes."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 p-3 sm:p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-500/20 border border-white/10 group transition-all"
        title="Chat on WhatsApp"
      >
        <span className="text-xs font-semibold uppercase tracking-wider pl-1.5 hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-300">
          WhatsApp Us
        </span>
        <Send className="w-5.5 h-5.5 fill-white" />
      </motion.a>

      {/* Direct Call Floating Button */}
      <motion.a
        href="tel:7385033689"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 p-3 sm:p-4 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white shadow-xl hover:shadow-brand-primary/20 border border-white/10 group transition-all"
        title="Call Chanchal Kirad"
      >
        <span className="text-xs font-semibold uppercase tracking-wider pl-1.5 hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-300">
          Call Boutique
        </span>
        <Phone className="w-5.5 h-5.5 fill-white text-white" />
      </motion.a>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white dark:bg-brand-charcoal text-brand-charcoal dark:text-white hover:text-brand-primary border border-brand-primary/10 dark:border-brand-secondary/15 hover:border-brand-primary/30 shadow-lg hover:scale-105 transition-all cursor-pointer"
            title="Scroll to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
