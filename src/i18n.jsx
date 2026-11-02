import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { messages } from './messages.js';

export const languages = [
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski' },
  { code: 'hr', label: 'Hrvatski' },
  { code: 'uk', label: 'Українська' },
];

const storageKey = 'spyglee-lang';

const LanguageContext = createContext(null);

function storedLanguage() {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(storageKey);
  return languages.some((language) => language.code === saved) ? saved : 'en';
}

function translate(language, key, vars) {
  let text = messages[language]?.[key] ?? messages.en[key] ?? key;
  if (vars) {
    for (const [name, value] of Object.entries(vars)) {
      text = text.replaceAll(`{${name}}`, value);
    }
  }
  return text;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(storedLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  const t = useCallback((key, vars) => translate(language, key, vars), [language]);
  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used within LanguageProvider');
  return value;
}

export function useT() {
  return useLanguage().t;
}
