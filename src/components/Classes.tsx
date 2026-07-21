import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Check, Send, Scissors, Sparkles } from 'lucide-react';

export default function Classes() {
  const { language } = useLanguage();

  // Local inline dictionary for complete safety and multi-language support
  const localDict = {
    en: {
      title: "Our Training Classes",
      subtitle: "Professional courses designed to empower your creative journey and business success",
      shivanTitle: "Shivan Classes",
      shivanDesc: "Learn professional stitching from beginner to advanced level with practical guidance and hands-on training.",
      shivanFeatures: ["Beginner Friendly", "Practical Training", "Small Batch", "Personal Guidance"],
      aariTitle: "Aari Work Classes",
      aariDesc: "Learn traditional and modern Aari embroidery with professional techniques and creative designs.",
      aariFeatures: ["Professional Aari Work", "Practical Sessions", "Latest Designs", "Suitable for Beginners"],
      btnInquire: "Inquire via WhatsApp",
      badgeText: "Practical Training"
    },
    mr: {
      title: "आमचे प्रशिक्षण वर्ग",
      subtitle: "तुमच्या कल्पकतेला व्यावसायिक रूप देण्यासाठी आणि घरगुती व्यवसाय सुरू करण्यासाठी विशेष कोर्सेस",
      shivanTitle: "शिवण क्लास (Shivan Classes)",
      shivanDesc: "सोप्या आणि प्रॅक्टिकल पद्धतीने शिलाईचे सर्व तंत्र नवशिक्यांपासून प्रगत स्तरापर्यंत शिका.",
      shivanFeatures: ["नवशिक्यांसाठी सोपे", "प्रॅक्टिकल ट्रेनिंग", "मर्यादित बॅच", "वैयक्तिक मार्गदर्शन"],
      aariTitle: "आरी वर्क क्लास (Aari Work Classes)",
      aariDesc: "पारंपरिक आणि आधुनिक आरी भरतकाम सोप्या तंत्रांसह आणि नवनवीन डिझाईन्ससह शिका.",
      aariFeatures: ["व्यावसायिक आरी वर्क", "प्रॅक्टिकल सत्रे", "नवीनतम डिझाईन्स", "नवशिक्यांसाठी सुयोग्य"],
      btnInquire: "व्हॉट्सॲपवर चौकशी करा",
      badgeText: "प्रॅक्टिकल ट्रेनिंग"
    },
    hi: {
      title: "हमारी प्रशिक्षण क्लासेस",
      subtitle: "आपको आत्मनिर्भर बनाने और फैशन डिजाइनिंग में करियर शुरू करने के लिए विशेष कोर्स",
      shivanTitle: "सिलाई क्लासेस (Shivan Classes)",
      shivanDesc: "शुरुआती से लेकर उन्नत स्तर तक व्यावहारिक मार्गदर्शन और सिलाई का संपूर्ण प्रशिक्षण।",
      shivanFeatures: ["शुरुआती लोगों के लिए आसान", "व्यावहारिक प्रशिक्षण", "कम सीटें/बैच", "व्यक्तिगत मार्गदर्शन"],
      aariTitle: "आरी वर्क क्लासेस (Aari Work Classes)",
      aariDesc: "व्यावसायिक तकनीकों और नए डिज़ाइनों के साथ पारंपरिक और आधुनिक आरी कढ़ाई सीखें.",
      aariFeatures: ["व्यावसायिक आरी वर्क", "प्रैक्टिकल सेशन्स", "नवीनतम डिज़ाइन्स", "शुरुआती लोगों के लिए उपयुक्त"],
      btnInquire: "व्हाट्सएप पर पूछताछ करें",
      badgeText: "प्रैक्टिकल ट्रेनिंग"
    }
  };

  const current = localDict[language] || localDict.en;

  const getWhatsappLink = (className: string) => {
    const text = encodeURIComponent(
      `Hello Rose Petals Academy! I visited your website and would like to inquire about "${className}" training classes. Could you please share the duration, batch timings, and fee structure?`
    );
    return `https://wa.me/917385033689?text=${text}`;
  };

  return (
    <section id="training-classes" className="py-24 bg-white dark:bg-brand-charcoal relative">
      {/* Decorative vector background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/5 dark:bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {language === 'mr' ? 'शिवण आणि एम्ब्रॉयडरी अकॅडमी' : language === 'hi' ? 'सिलाई और कढ़ाई एकेडमी' : 'Tailoring & Embroidery Academy'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            {current.title}
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/65 dark:text-brand-pink-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {current.subtitle}
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Classes Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Shivan Classes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-white/40 dark:border-brand-primary/10 bg-white/60 dark:bg-brand-charcoal/40 backdrop-blur-md transition-all duration-300 flex flex-col cursor-default"
          >
            {/* Image Container with zoom */}
            <div className="relative h-64 overflow-hidden bg-brand-pink-light/20">
              <img
                src="https://www.pragatikiran.org/images/3.png"
                alt={current.shivanTitle}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              
              {/* Badge tag */}
              <span className="absolute bottom-4 left-4 bg-brand-primary/95 text-white text-[10px] font-sans tracking-widest uppercase py-1.5 px-3.5 rounded-lg flex items-center gap-1.5 backdrop-blur-xs">
                <Scissors className="w-3.5 h-3.5" />
                <span>{current.badgeText}</span>
              </span>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors">
                  {current.shivanTitle}
                </h3>
                <p className="text-sm text-brand-charcoal/70 dark:text-brand-pink-light/75 leading-relaxed font-sans">
                  {current.shivanDesc}
                </p>

                {/* Features List with customized check icon */}
                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  {current.shivanFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/15 dark:bg-brand-secondary/15 flex items-center justify-center text-brand-primary dark:text-brand-secondary">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-brand-charcoal/80 dark:text-brand-pink-light/85 font-medium font-sans">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-brand-primary/5">
                <a
                  href={getWhatsappLink(current.shivanTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 group transition-colors duration-300"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>{current.btnInquire}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Aari Work Classes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-white/40 dark:border-brand-primary/10 bg-white/60 dark:bg-brand-charcoal/40 backdrop-blur-md transition-all duration-300 flex flex-col cursor-default"
          >
            {/* Image Container with zoom */}
            <div className="relative h-64 overflow-hidden bg-brand-pink-light/20">
              <img
                src="https://i0.wp.com/www.gounique.in/wp-content/uploads/2021/05/Latest-Bridal-Blouse-Designs.png?fit=1280%2C720&ssl=1"
                alt={current.aariTitle}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              
              {/* Badge tag */}
              <span className="absolute bottom-4 left-4 bg-brand-primary/95 text-white text-[10px] font-sans tracking-widest uppercase py-1.5 px-3.5 rounded-lg flex items-center gap-1.5 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
                <span>{current.badgeText}</span>
              </span>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors">
                  {current.aariTitle}
                </h3>
                <p className="text-sm text-brand-charcoal/70 dark:text-brand-pink-light/75 leading-relaxed font-sans">
                  {current.aariDesc}
                </p>

                {/* Features List with customized check icon */}
                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  {current.aariFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/15 dark:bg-brand-secondary/15 flex items-center justify-center text-brand-primary dark:text-brand-secondary">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-brand-charcoal/80 dark:text-brand-pink-light/85 font-medium font-sans">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-brand-primary/5">
                <a
                  href={getWhatsappLink(current.aariTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 group transition-colors duration-300"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>{current.btnInquire}</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
