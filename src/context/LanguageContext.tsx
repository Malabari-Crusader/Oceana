import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface LanguageContextType {
  isArabic: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }, []);

  const toggleLanguage = () => {
    setIsArabic((prev) => {
      const next = !prev;
      document.documentElement.dir = next ? 'rtl' : 'ltr';
      document.documentElement.lang = next ? 'ar' : 'en';
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
