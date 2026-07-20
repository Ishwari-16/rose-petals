import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Academy from './components/Academy';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import HealingCenter from './components/HealingCenter';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

// Scroll Progress Bar component that tracks screen read depth
function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-linear-to-r from-brand-accent via-brand-secondary to-brand-primary z-50 transition-all duration-100 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-brand-pink-soft dark:bg-brand-charcoal transition-colors duration-500 overflow-x-hidden selection:bg-brand-primary/20 selection:text-brand-primary">
          
          {/* Top page scroll progress tracker */}
          <ScrollProgressBar />

          {/* Core Headers */}
          <Navbar />

          {/* Structural Layout */}
          <main>
            <Hero />
            <About />
            <Services />
            <Academy />
            <WhyChooseUs />
            <HealingCenter />
            <Gallery />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>

          {/* Floating Call to Actions */}
          <FloatingActions />

          {/* Footers */}
          <Footer />

        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
