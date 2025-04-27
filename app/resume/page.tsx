"use client"

import { useTranslations } from "@/hooks/use-translations"
import ResumeSection from "@/components/resume-section"
import { Download } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import { motion } from "framer-motion"
import { useThemePersistence } from "@/hooks/use-theme-persistence"
import { useLanguagePersistence } from "@/hooks/use-language-persistence"
import { useEffect, useState } from "react"

export default function ResumePage() {
  const t = useTranslations()
  useThemePersistence()
  
  // Create a state to track the current language more reliably
  const [currentLanguage, setCurrentLanguage] = useState('en')
  
  // Use translations as a more reliable way to determine the current language
  useEffect(() => {
    // Check if we're using French translations by looking at a known translation
    const isFrench = t.resume.title === "Curriculum Vitae"
    setCurrentLanguage(isFrench ? 'fr' : 'en')
    
    // Log for debugging
    console.log("Current language detected:", isFrench ? 'fr' : 'en')
  }, [t.resume.title])
  
  // Determine which CV file to download based on the detected language
  const cvPath = currentLanguage === 'fr' ? "/cv_fr.pdf" : "/cv_en.pdf"

  const education = [
    {
      id: 1,
      title: t.resume.education.ensias.title,
      institution: t.resume.education.ensias.institution,
      duration: "2023 - 2026",
      description: t.resume.education.ensias.description,
      image: "/logos/ensias.jpg?height=80&width=80",
    },
    {
      id: 2,
      title: t.resume.education.cpge.title,
      institution: t.resume.education.cpge.institution,
      duration: "2021 - 2023",
      description: t.resume.education.cpge.description,
      image: "/logos/lm6e.jpg?height=80&width=80",
    },
  ]

  const experience = [
    {
      id: 1,
      title: t.resume.experience.dataResearchLab.title,
      company: "Data Research Lab",
      duration: t.resume.experience.dataResearchLab.duration,
      description: t.resume.experience.dataResearchLab.description,
      image: "/logos/drl.jpg?height=80&width=80",
    },
  ]

  const extracurricular = [
    {
      id: 1,
      title: t.resume.extracurricular.juniorEntreprise.title,
      organization: "ENSIAS",
      duration: t.resume.extracurricular.juniorEntreprise.duration,
      description: t.resume.extracurricular.juniorEntreprise.description,
      image: "/logos/JEE.png?height=80&width=80",
    },
    {
      id: 2,
      title: t.resume.extracurricular.erasmus.title,
      organization: t.resume.extracurricular.erasmus.organization,
      duration: t.resume.extracurricular.erasmus.duration,
      description: t.resume.extracurricular.erasmus.description,
      image: "/logos/erasmus.jpg?height=80&width=80",
    },
    {
      id: 3,
      title: t.resume.extracurricular.conferenceManager.title,
      organization: t.resume.extracurricular.conferenceManager.organization,
      duration: t.resume.extracurricular.conferenceManager.duration,
      description: t.resume.extracurricular.conferenceManager.description,
      image: "/logos/forum.png?height=80&width=80",
    },
    {
      id: 4,
      title: t.resume.extracurricular.letterWriter.title,
      organization: t.resume.extracurricular.letterWriter.organization,
      duration: t.resume.extracurricular.letterWriter.duration,
      description: t.resume.extracurricular.letterWriter.description,
      image: "/logos/lai.png?height=80&width=80",
    },
    {
      id: 5,
      title: t.resume.extracurricular.foodBank.title,
      organization: t.resume.extracurricular.foodBank.organization,
      duration: t.resume.extracurricular.foodBank.duration,
      description: t.resume.extracurricular.foodBank.description,
      image: "/logos/foodbank.png?height=80&width=80",
    },
  ]

  const awards = [
    {
      id: 1,
      title: t.resume.awards.susi.title,
      organization: t.resume.awards.susi.organization,
      duration: t.resume.awards.susi.duration,
      description: t.resume.awards.susi.description,
      image: "/logos/ku.png?height=80&width=80",
    },
    {
      id: 2,
      title: t.resume.awards.spaceCamper.title,
      organization: t.resume.awards.spaceCamper.organization,
      duration: t.resume.awards.spaceCamper.duration,
      description: t.resume.awards.spaceCamper.description,
      image: "/logos/nasa.png?height=80&width=80",
    },
    {
      id: 3,
      title: t.resume.awards.debateTeam.title,
      organization: t.resume.awards.debateTeam.organization,
      duration: t.resume.awards.debateTeam.duration,
      description: t.resume.awards.debateTeam.description,
      image: "/logos/aesvt.png?height=80&width=80",
    },
    {
      id: 4,
      title: t.resume.awards.taekwondo.title,
      organization: "ELITE Taekwondo & Fitness Club",
      duration: t.resume.awards.taekwondo.duration,
      description: t.resume.awards.taekwondo.description,
      image: "/logos/elite.png?height=80&width=80",
    },
  ]

  const certifications = [
    {
      id: 1,
      title: t.resume.certifications.aiAnalyst.title,
      organization: t.resume.certifications.aiAnalyst.organization,
      duration: t.resume.certifications.aiAnalyst.duration,
      description: t.resume.certifications.aiAnalyst.description,
      image: "/logos/ibm.png?height=80&width=80",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">{t.resume.title}</h1>

          <motion.a
            href={cvPath}
            download={currentLanguage === 'fr' ? "cv_fr.pdf" : "cv_en.pdf"}
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
          <ResumeSection title={t.resume.certifications.sectionTitle} items={certifications} type="extracurricular" />
        </FadeIn>

        <FadeIn delay={0.5}>
          <ResumeSection title={t.resume.extracurricular.sectionTitle} items={extracurricular} type="extracurricular" />
        </FadeIn>

        <FadeIn delay={0.6}>
          <ResumeSection title={t.resume.awards.sectionTitle} items={awards} type="awards" />
        </FadeIn>
      </div>
    </div>
  )
}
