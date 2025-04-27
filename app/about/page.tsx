"use client"

import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import { motion } from "framer-motion"
import { useThemePersistence } from "@/hooks/use-theme-persistence"
import { useLanguagePersistence } from "@/hooks/use-language-persistence"

export default function AboutPage() {
  const t = useTranslations()
  useThemePersistence()
  useLanguagePersistence()

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.about.title}</h1>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
        <FadeIn direction="right" delay={0.2}>
          <div className="flex justify-center">
            <motion.div
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/nada-photo.jpg?height=256&width=256" alt={t.about.photoAlt} fill className="object-cover" />
            </motion.div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.4}>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Nada El Annasi</h2>
            <p className="text-lg mb-6">{t.about.description}</p>

            <h2 className="text-xl font-semibold mb-4">{t.about.contactTitle}</h2>

            <div className="space-y-3">
              <motion.a
                href="https://github.com/elannasinada/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/elannasinada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="tel:+212-636183685"
                className="flex items-center gap-3 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="w-5 h-5" />
                <span>+212 6 36 18 36 85</span>
              </motion.a>

              <motion.a
                href="mailto:elannasinada@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-5 h-5" />
                <span>elannasinada@gmail.com</span>
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
