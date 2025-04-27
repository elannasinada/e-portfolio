"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

export function useThemePersistence() {
  const { setTheme } = useTheme()
  const pathname = usePathname()

  // This hook ensures theme persistence across page navigations
  useEffect(() => {
    // Only apply the theme that was explicitly chosen by the user
    const userThemeChoice = localStorage.getItem("user-theme-choice")

    // If the user has made an explicit choice, respect it
    if (userThemeChoice) {
      setTheme(userThemeChoice)
    }
    // If no explicit choice, default to the theme set in ThemeProvider
  }, [setTheme, pathname])

  return null
}
