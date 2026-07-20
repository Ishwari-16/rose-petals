import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Globe, Sun, Moon, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Monitor scroll state for transparent vs glassmorphism header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.classes'), href: '#classes' },
    { name: t('nav.healing'), href: '#healing' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'hi', label: 'हिंदी', short: 'हिं' },
    { code: 'mr', label: 'मराठी', short: 'म' },
  ] as const;

  const currentLangLabel = languages.find(l => l.code === language)?.label || 'English';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 shadow-lg glass-card-light dark:glass-card-dark bg-white/80 dark:bg-brand-charcoal/80'
          : 'py-5 bg-transparent'
      }`}
    >
      {/* Top accent line matching the Natural Tones theme blueprint */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Elegant Boutique Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-brand-primary to-brand-secondary text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Scissors className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-accent rounded-full border border-white animate-pulse" />
            </div>
            <div>
              <span className="block text-xl font-serif font-bold tracking-wider text-brand-primary dark:text-brand-secondary leading-none">
                Rose Petals
              </span>
              <span className="text-[10px] font-sans tracking-widest text-brand-charcoal/70 dark:text-brand-pink-light/80 block mt-0.5 uppercase">
                Boutique & Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-brand-charcoal/85 dark:text-brand-pink-light/90 hover:text-brand-primary dark:hover:text-brand-secondary rounded-lg transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-brand-primary dark:bg-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </nav>

          {/* Actions: Theme, Lang, and CTA */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-brand-charcoal/80 dark:text-brand-pink-light/85 hover:bg-brand-pink-light dark:hover:bg-brand-charcoal/40 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-brand-accent" /> : <Moon className="w-5 h-5 text-brand-primary" />}
            </button>

            {/* Language Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-primary/20 dark:border-brand-secondary/25 text-sm font-medium text-brand-charcoal/80 dark:text-brand-pink-light/85 hover:bg-brand-pink-light dark:hover:bg-brand-charcoal/40 transition-all duration-200"
              >
                <Globe className="w-4 h-4 text-brand-primary dark:text-brand-secondary" />
                <span>{currentLangLabel}</span>
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsLangDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-40 rounded-xl shadow-xl bg-white dark:bg-brand-charcoal border border-brand-primary/10 dark:border-brand-secondary/20 overflow-hidden z-20"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                            language === lang.code
                              ? 'bg-brand-primary/10 text-brand-primary dark:bg-brand-secondary/15 dark:text-brand-secondary font-semibold'
                              : 'text-brand-charcoal/80 dark:text-brand-pink-light/80 hover:bg-brand-pink-light/40 dark:hover:bg-brand-charcoal/60'
                          }`}
                        >
                          <span>{lang.label}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-brand-charcoal/5 dark:bg-white/10 text-brand-charcoal/60 dark:text-brand-pink-light/50">
                            {lang.short}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Quick CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-lg shadow-brand-secondary/30 hover:shadow-brand-secondary/50 hover:scale-[1.02] active:scale-95 transition-all duration-250 block text-center"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Actions Overlay */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-brand-charcoal/80 dark:text-brand-pink-light/85 sm:hidden"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-brand-accent" /> : <Moon className="w-5 h-5 text-brand-primary" />}
            </button>

            {/* Compact Mobile Globe Switcher */}
            <div className="relative sm:hidden">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="p-1.5 rounded-full text-brand-charcoal/80 dark:text-brand-pink-light/85"
              >
                <Globe className="w-5 h-5 text-brand-primary dark:text-brand-secondary" />
              </button>
              {isLangDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-32 rounded-lg shadow-lg bg-white dark:bg-brand-charcoal border border-brand-primary/10 overflow-hidden z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs text-brand-charcoal/80 dark:text-brand-pink-light/80 hover:bg-brand-pink-light dark:hover:bg-brand-charcoal/50"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-charcoal dark:text-brand-pink-light hover:bg-brand-pink-light dark:hover:bg-brand-charcoal/40"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 dark:bg-brand-charcoal/95 border-b border-brand-primary/10 dark:border-brand-secondary/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-base font-medium text-brand-charcoal/85 dark:text-brand-pink-light/90 hover:bg-brand-pink-light/50 dark:hover:bg-brand-charcoal/60 hover:text-brand-primary dark:hover:text-brand-secondary transition-all"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-brand-primary/10 dark:border-brand-secondary/10 flex items-center justify-between px-4">
                <span className="text-sm font-medium text-brand-charcoal/60 dark:text-brand-pink-light/60">Language</span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        language === lang.code
                          ? 'bg-brand-primary text-white'
                          : 'bg-brand-pink-light dark:bg-brand-charcoal text-brand-charcoal/80 dark:text-brand-pink-light/80'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between px-4">
                <span className="text-sm font-medium text-brand-charcoal/60 dark:text-brand-pink-light/60">Theme</span>
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-pink-light dark:bg-brand-charcoal text-brand-charcoal/80 dark:text-brand-pink-light/80 text-sm"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4 text-brand-accent" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-brand-primary" /> Dark Mode
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/917385033689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center rounded-xl bg-linear-to-r from-brand-primary to-brand-secondary text-white font-medium shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  WhatsApp Inquiries
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
