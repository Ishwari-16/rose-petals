import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Award, Users, CheckCircle, Heart, Star, Scissors } from 'lucide-react';

// Lightweight, robust animated counter for statistics
const Counter: React.FC<{ target: number; suffix?: string; label: string; icon: React.ReactNode }> = ({ target, suffix = '', label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // ms
    const increment = Math.ceil(target / (duration / 16)); // 60 FPS approx
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl glass-card-light dark:glass-card-dark border border-brand-primary/10 shadow-xs hover:shadow-md transition-shadow">
      <div className="p-3.5 rounded-xl bg-linear-to-br from-brand-primary/10 to-brand-secondary/15 text-brand-primary dark:text-brand-secondary">
        {icon}
      </div>
      <div>
        <span className="block text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal dark:text-white leading-none">
          {count}
          {suffix}
        </span>
        <span className="text-xs sm:text-sm text-brand-charcoal/65 dark:text-brand-pink-light/70 font-sans mt-1.5 block leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
};

export default function About() {
  const { t, dict } = useLanguage();

  const aboutFeatures = [
    {
      title: dict.about.features[0].title,
      desc: dict.about.features[0].desc,
      icon: <Scissors className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: dict.about.features[1].title,
      desc: dict.about.features[1].desc,
      icon: <Award className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: dict.about.features[2].title,
      desc: dict.about.features[2].desc,
      icon: <Users className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: dict.about.features[3].title,
      desc: dict.about.features[3].desc,
      icon: <CheckCircle className="w-5 h-5 text-brand-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-brand-pink-soft dark:bg-brand-charcoal/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {t('about.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            {t('about.subtitle')}
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="text-brand-primary dark:text-brand-secondary text-sm font-semibold tracking-wider block uppercase font-sans">
                {t('about.storyTitle')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal dark:text-white">
                Designing Confidence & Building Careers since 2014
              </h3>
            </div>

            <p className="text-base text-brand-charcoal/75 dark:text-brand-pink-light/80 leading-relaxed font-sans">
              {t('about.storyText1')}
            </p>

            <p className="text-base text-brand-charcoal/75 dark:text-brand-pink-light/80 leading-relaxed font-sans">
              {t('about.storyText2')}
            </p>

            {/* Owner Signature Highlight */}
            <div className="bg-white/80 dark:bg-brand-charcoal/80 backdrop-blur-lg p-6 rounded-2xl border border-white/40 dark:border-white/10 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-serif italic text-2xl shadow-md">
                  C
                </div>
                <div>
                  <span className="block text-xs text-brand-charcoal/50 dark:text-brand-pink-light/50 uppercase tracking-widest font-semibold font-sans">
                    {t('about.ownerBadge')}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-brand-charcoal dark:text-white mt-0.5">
                    Chanchal Uday Kirad
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-1 text-brand-accent text-glow-gold">
                  <span>★★★★★</span>
                  <span className="text-xs text-brand-charcoal dark:text-brand-pink-light/80 font-bold ml-1">4.5 Rating</span>
                </div>
                <span className="text-[10px] font-sans text-brand-charcoal/50 dark:text-brand-pink-light/50 font-medium">
                  Creative Fashion Stylist & Instructor
                </span>
              </div>
            </div>

            {/* Values / Core features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {aboutFeatures.map((feat, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-charcoal dark:text-white font-sans">{feat.title}</h4>
                    <p className="text-xs text-brand-charcoal/60 dark:text-brand-pink-light/60 mt-0.5 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Counters Collage & Image */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Elegant Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-primary/10 h-[320px] sm:h-[400px] img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
                alt="Expert Tailor stitching designer clothing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs uppercase tracking-widest text-brand-secondary font-medium">Boutique & Training Center</span>
                <h4 className="text-xl font-serif font-bold mt-1">Stitched with Passion</h4>
              </div>
            </div>

            {/* 2x2 Counters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Counter target={12} suffix="+" label="Years Experience" icon={<Award className="w-5 h-5" />} />
              <Counter target={2000} suffix="+" label="Premium Clients" icon={<Users className="w-5 h-5" />} />
              <Counter target={100} suffix="%" label="Practical Learning" icon={<CheckCircle className="w-5 h-5" />} />
              <Counter target={98} suffix="%" label="On-Time Delivery" icon={<Heart className="w-5 h-5" />} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
