import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en/translation.json';
import ptBrTranslations from './locales/pt_br/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      pt_br: {
        translation: ptBrTranslations
      }
    },
    lng: "pt_br",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;