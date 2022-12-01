import { TranslationProvider } from './Context/TranslationContext'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'
import './i18next'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
)
