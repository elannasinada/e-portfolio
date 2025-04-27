"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { useTranslations } from "@/hooks/use-translations"
import { motion } from "framer-motion"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <div className="flex space-x-2">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant={language === "fr" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("fr")}
          className={`text-sm font-medium ${language === "fr" ? "bg-primary text-primary-foreground" : ""}`}
        >
          FR
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className={`text-sm font-medium ${language === "en" ? "bg-primary text-primary-foreground" : ""}`}
        >
          EN
        </Button>
      </motion.div>
    </div>
  )
}
