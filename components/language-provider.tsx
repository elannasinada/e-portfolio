"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "fr", // Default to French
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("fr") // Default to French
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      // Default to French if no saved preference
      setLanguage("fr")
      localStorage.setItem("language", "fr")
      document.documentElement.lang = "fr"
    }
  }, [])

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  // Prevent hydration mismatch by rendering children only after mounting
  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}
