import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scissors, MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const { t, dict } = useLanguage();

  const servicesLinks = [
    'Designer Blouse Stitching',
    'Aari & Zardosi Hand Embroidery',
    'Bridal Blouses Masterpieces',
    'Nine Yard (Nauvari) Saree Stitching',
    'Custom Fashion Designing'
  ];

  const coursesLinks = [
    'Sewing Foundations',
    'Pattern Making & Drafting',
    'Puff Sleeves & Patchwork',
    'Aari & Embroidery Techniques',
    'Boutique Business Setup Guidance'
  ];

  return (
    <footer className="bg-brand-charcoal dark:bg-black text-brand-pink-light/80 border-t border-brand-primary/10 pt-16 pb-8 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Pitch */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-brand-primary to-brand-secondary text-white shadow-md">
                <Scissors className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-lg font-serif font-bold tracking-wider text-white">
                  Rose Petals
                </span>
                <span className="text-[9px] tracking-widest text-brand-secondary block uppercase">
                  Boutique & Academy
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-brand-pink-light/70 leading-relaxed font-normal">
              {dict.footer.desc}
            </p>

            {/* Social media connections */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.google.com/maps/place/Rose+Petals/@18.4915796,73.9327129,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-primary text-white hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Google Maps Location"
              >
                G
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-primary text-white hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Instagram Page"
              >
                I
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-primary text-white hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Pinterest Moodboards"
              >
                P
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white border-l-2 border-brand-primary pl-2 font-serif">
              Boutique Styling
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-pink-light/65">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-brand-secondary transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white border-l-2 border-brand-primary pl-2 font-serif">
              Academy Curriculum
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-pink-light/65">
              {coursesLinks.map((link, i) => (
                <li key={i}>
                  <a href="#classes" className="hover:text-brand-secondary transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact address detail */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white border-l-2 border-brand-primary pl-2 font-serif">
              Connect Directly
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-brand-pink-light/65">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4.5 h-4.5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Shop No.4, Ganesh Vihar, Autadwadi Handewadi, Hadapsar, Pune 411028</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4.5 h-4.5 text-brand-primary flex-shrink-0" />
                <div className="space-y-0.5">
                  <a href="tel:7385033689" className="hover:text-brand-secondary transition-colors block font-semibold">7385033689</a>
                  <a href="tel:9579175296" className="hover:text-brand-secondary transition-colors block font-semibold">9579175296</a>
                </div>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock className="w-4.5 h-4.5 text-brand-primary flex-shrink-0" />
                <span>Open Daily: 9:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Healing disclaimer */}
          <div className="max-w-2xl">
            <p className="text-[10px] sm:text-xs text-brand-pink-light/45 leading-relaxed flex items-start gap-1.5 font-sans">
              <ShieldCheck className="w-5 h-5 text-brand-gold-muted flex-shrink-0 mt-0.5" />
              <span>
                <strong>Spiritual Alignment Disclaimer:</strong> {dict.footer.disclaimer}
              </span>
            </p>
          </div>

          {/* Copyright details */}
          <div className="text-left lg:text-right flex-shrink-0">
            <p className="text-[10px] sm:text-xs text-brand-pink-light/45 font-sans">
              {dict.footer.rights}
            </p>
            <p className="text-[10px] text-brand-pink-light/35 font-mono mt-1 flex items-center lg:justify-end gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-brand-primary fill-brand-primary animate-pulse" />
              <span>by Chanchal Uday Kirad</span>
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
