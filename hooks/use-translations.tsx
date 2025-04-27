"use client"

import { useLanguage } from "@/hooks/use-language"
import { enTranslations } from "@/translations/en"
import { frTranslations } from "@/translations/fr"

export function useTranslations() {
  const { language } = useLanguage()

  return language === "fr" ? frTranslations : enTranslations
}
