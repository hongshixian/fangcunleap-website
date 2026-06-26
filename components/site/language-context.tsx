"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("zh")

  useEffect(() => {
    const stored = localStorage.getItem("homepage-lang")
    if (stored === "en" || stored === "zh") {
      setLangState(stored)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("homepage-lang", newLang)
  }

  const toggleLang = () => {
    setLang(lang === "zh" ? "en" : "zh")
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
