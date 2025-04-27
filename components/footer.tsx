"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </p>
          </div>

          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/elannasinada/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/elannasinada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
