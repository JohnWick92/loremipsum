import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'

export type TranslationcontextType = {
  handleChangeLanguage: () => void
  t: TFunction
  currentLang: string
  setCurrentLang: Dispatch<SetStateAction<string>>
}

type TranslationContextProvider = {
  children: JSX.Element
}

export const TranslationContex = createContext<TranslationcontextType>(
  {} as TranslationcontextType
)

export const TranslationProvider = ({
  children,
}: TranslationContextProvider) => {
  const [currentLang, setCurrentLang] = useState('')
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation()
  function handleChangeLanguage() {
    changeLanguage(currentLang)
  }
  return (
    <TranslationContex.Provider
      value={{ t, handleChangeLanguage, currentLang, setCurrentLang }}
    >
      {children}
    </TranslationContex.Provider>
  )
}
