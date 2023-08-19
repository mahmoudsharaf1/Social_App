import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/assets/locales/en.json';
import ru from './src/assets/locales/ru.json';
import languageDetectorPlugin from './src/utils/languageDetectorPlugin';

//empty for now
const resources = {
  en: {
    translation: en,
  },
  // ru: {
  //   translation: ru,
  // },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    compatibilityJSON: 'v3',
    //language to use if translations in user language rue not available
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
