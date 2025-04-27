"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  const toggleTheme = () => {
    // Only toggle theme on explicit user interaction
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Store the user's explicit choice
    localStorage.setItem("user-theme-choice", newTheme)
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        title={resolvedTheme === "dark" ? t.theme.lightMode : t.theme.darkMode}
        type="button"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">{resolvedTheme === "dark" ? t.theme.lightMode : t.theme.darkMode}</span>
      </Button>
    </motion.div>
  )
}
