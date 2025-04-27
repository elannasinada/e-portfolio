"use client"

import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"
import FadeIn from "@/components/animations/fade-in"
import { motion } from "framer-motion"
import TechSlider from "@/components/tech-slider"
import { useThemePersistence } from "@/hooks/use-theme-persistence"
import { useLanguagePersistence } from "@/hooks/use-language-persistence"

export default function Home() {
  const t = useTranslations()
  useThemePersistence()
  useLanguagePersistence()

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            {t.home.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-muted-foreground">{t.home.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t.home.aboutButton}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t.home.projectsButton}
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      <FadeIn delay={0.8}>
        <TechSlider />
      </FadeIn>
    </div>
  )
}
