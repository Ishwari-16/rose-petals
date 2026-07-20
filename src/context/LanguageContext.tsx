import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationDictionary } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
  dict: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with persisted language or fallback to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rose_petals_language');
      if (saved === 'en' || saved === 'hi' || saved === 'mr') {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rose_petals_language', lang);
    }
  };

  // Helper to retrieve nested object keys
  const t = (path: string): any => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current === undefined || current === null) {
        return path; // Fallback to path if not found
      }
      current = current[key];
    }
    
    return current !== undefined ? current : path;
  };

  const dict = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
