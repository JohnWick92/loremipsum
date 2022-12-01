import EN_USTranslation from './assets/locales/en-us/translation.json'
import PT_BRTranslation from './assets/locales/pt-br/translation.json'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

const resources = {
  enus: {
    ...EN_USTranslation,
  },
  ptbr: {
    ...PT_BRTranslation,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'enus',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
