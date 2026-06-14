import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type LanguageContextType = {
  isArabic: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isArabic, setIsArabic] = useState(() => document.documentElement.dir === 'rtl');

  const toggleLanguage = () => {
    setIsArabic((prev) => {
      const next = !prev;
      document.documentElement.dir = next ? 'rtl' : 'ltr';
      document.documentElement.lang = next ? 'ar' : 'en';
      return next;
    });
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentDir = document.documentElement.dir;
      setIsArabic(currentDir === 'rtl');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
