import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

i18n.use(initReactI18next).init({
  fallbackLng: ['ptBR'],
  fallbackNS: ['translation', 'error'],
  lng: 'ptBR',
  debug: false,
  resources: {
    ptBR,
    enUS,
  },
});

export default i18n;
