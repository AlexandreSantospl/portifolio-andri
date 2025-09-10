import i18n, { t } from 'i18next'
import { initReactI18next } from 'react-i18next'

import { type TranslationKeys } from './interface'
import enTranslation from './locales/en/translation.json'
import esTranslation from './locales/es/translation.json'
import ptTranslation from './locales/pt/translation.json'

const resources = {
  pt: {
    translation: ptTranslation,
  },
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

export function getTranslatedMessage(
  key: TranslationKeys,
  search?: { [key: string]: string | number },
): string {
  return t(key, search)
}

export function optionsTranslationKey(key: TranslationKeys | (string & {})) {
  return t(key as string)
}
