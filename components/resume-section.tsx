"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

interface ResumeItem {
  id: number
  title: string
  institution?: string
  company?: string
  organization?: string
  duration: string
  description: string
  image: string
}

interface ResumeSectionProps {
  title: string
  items: ResumeItem[]
  type: "education" | "experience" | "extracurricular" | "awards"
}

export default function ResumeSection({ title, items, type }: ResumeSectionProps) {
  const getSubtitleKey = () => {
    switch (type) {
      case "education":
        return "institution"
      case "experience":
        return "company"
      case "extracurricular":
      case "awards":
        return "organization"
      default:
        return "institution"
    }
  }

  const subtitleKey = getSubtitleKey()

  return (
    <section>
      <motion.h2
        className="text-2xl font-semibold mb-6 text-primary"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <StaggerContainer className="space-y-6">
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <motion.div
              className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="shrink-0">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </motion.div>
              </div>

              <div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-primary font-medium">{item[subtitleKey]}</p>
                <p className="text-sm text-muted-foreground">{item.duration}</p>
                <p className="mt-2">{item.description}</p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
