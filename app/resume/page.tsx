"use client"

import { useTranslations } from "@/hooks/use-translations"
import ResumeSection from "@/components/resume-section"
import { Download } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import { motion } from "framer-motion"
import { useThemePersistence } from "@/hooks/use-theme-persistence"
import { useLanguagePersistence } from "@/hooks/use-language-persistence"

export default function ResumePage() {
  const t = useTranslations()
  useThemePersistence()
  useLanguagePersistence()

  const education = [
    {
      id: 1,
      title: t.resume.education.ensias.title,
      institution: t.resume.education.ensias.institution,
      duration: "2023 - 2026",
      description: t.resume.education.ensias.description,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: t.resume.education.cpge.title,
      institution: t.resume.education.cpge.institution,
      duration: "2021 - 2023",
      description: t.resume.education.cpge.description,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const experience = [
    {
      id: 1,
      title: t.resume.experience.dataResearchLab.title,
      company: "Data Research Lab",
      duration: "2024",
      description: t.resume.experience.dataResearchLab.description,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const extracurricular = [
    {
      id: 1,
      title: t.resume.extracurricular.juniorEntreprise.title,
      organization: "ENSIAS",
      duration: "2024 - Present",
      description: t.resume.extracurricular.juniorEntreprise.description,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: t.resume.extracurricular.erasmus.title,
      organization: t.resume.extracurricular.erasmus.organization,
      duration: "2024 - Present",
      description: t.resume.extracurricular.erasmus.description,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      title: t.resume.extracurricular.taekwondo.title,
      organization: "ELITE Taekwondo Club",
      duration: "6 years",
      description: t.resume.extracurricular.taekwondo.description,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const awards = [
    {
      id: 1,
      title: t.resume.awards.susi.title,
      organization: "University of Kansas, USA",
      duration: "2024",
      description: t.resume.awards.susi.description,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: t.resume.awards.taekwondo.title,
      organization: "ELITE Taekwondo Club",
      duration: "",
      description: t.resume.awards.taekwondo.description,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">{t.resume.title}</h1>

          <motion.a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            {t.resume.downloadButton}
          </motion.a>
        </div>
      </FadeIn>

      <div className="space-y-12">
        <FadeIn delay={0.2}>
          <ResumeSection title={t.resume.education.sectionTitle} items={education} type="education" />
        </FadeIn>

        <FadeIn delay={0.3}>
          <ResumeSection title={t.resume.experience.sectionTitle} items={experience} type="experience" />
        </FadeIn>

        <FadeIn delay={0.4}>
          <ResumeSection title={t.resume.extracurricular.sectionTitle} items={extracurricular} type="extracurricular" />
        </FadeIn>

        <FadeIn delay={0.5}>
          <ResumeSection title={t.resume.awards.sectionTitle} items={awards} type="awards" />
        </FadeIn>
      </div>
    </div>
  )
}
