"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "hi" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  hi: {
    tagline: "शुद्ध पानी, स्वस्थ परिवार",
    home: "होम",
    services: "सेवाएं",
    about: "हमारे बारे में",
    gallery: "गैलरी",
    contact: "संपर्क करें",
    getQuote: "उद्धरण प्राप्त करें",
  },
  en: {
    tagline: "Pure Water, Healthy Family",
    home: "Home",
    services: "Services",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    getQuote: "Get Quote",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("hi");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "hi" ? "en" : "hi"));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

