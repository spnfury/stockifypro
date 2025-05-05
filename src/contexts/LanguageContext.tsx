import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import translations from '../locales';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get initial language from URL or default to Spanish
  const [language, setLanguage] = useState(() => {
    const pathLang = location.pathname.split('/')[1];
    const isValidLang = ['es', 'en', 'pt'].includes(pathLang);
    return isValidLang ? pathLang : 'es';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Handle URL language prefix and language changes
  useEffect(() => {
    const path = location.pathname;
    const isAdminRoute = path.startsWith('/admin');
    
    // Don't redirect admin routes
    if (isAdminRoute) return;

    const pathLang = path.split('/')[1];
    const isValidLang = ['es', 'en', 'pt'].includes(pathLang);
    const currentPath = path.replace(/^\/[a-z]{2}/, '');

    // If URL has no language or invalid language, redirect to Spanish
    if (!isValidLang) {
      const newPath = `/es${currentPath || '/'}`;
      if (newPath !== path) {
        navigate(newPath, { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  // Handle language changes from URL or user action
  useEffect(() => {
    const path = location.pathname;
    const isAdminRoute = path.startsWith('/admin');
    if (isAdminRoute) return;

    const pathLang = path.split('/')[1];
    const isValidLang = ['es', 'en', 'pt'].includes(pathLang);
    const currentPath = path.replace(/^\/[a-z]{2}/, '');

    if (isValidLang && pathLang !== language) {
      // Update language from URL
      setLanguage(pathLang);
    } else if (language !== pathLang) {
      // Update URL from language
      const newPath = `/${language}${currentPath}`;
      if (newPath !== path) {
        navigate(newPath, { replace: true });
      }
    }
  }, [language, location.pathname, navigate]);

  const t = useCallback((key: string): string => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];
      
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      
      return value || key;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  }, [language]);

  const value = React.useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 