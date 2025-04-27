"use client"

import { useEffect } from "react"
import { useLanguage } from "@/hooks/use-language"
import { usePathname } from "next/navigation"

export function useLanguagePersistence() {
  const { setLanguage } = useLanguage()
  const pathname = usePathname()

  // This hook ensures language persistence across page navigations
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")

    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      // Default to French if no saved preference
      setLanguage("fr")
      localStorage.setItem("language", "fr")
    }
  }, [setLanguage, pathname])

  return null
}
