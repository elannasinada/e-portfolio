"use client"

import { useTranslations } from "@/hooks/use-translations"
import FadeIn from "@/components/animations/fade-in"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useThemePersistence } from "@/hooks/use-theme-persistence"
import { useLanguagePersistence } from "@/hooks/use-language-persistence"

export default function ProjectsPage() {
  const t = useTranslations()
  const [activeCategory, setActiveCategory] = useState("all")
  useThemePersistence()
  useLanguagePersistence()

  const projects = [
    {
      id: 1,
      title: t.projects.projectsList.hive.title,
      description: t.projects.projectsList.hive.description,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Spring Boot", "Docker", "Angular", "Java"],
      category: t.projects.projectsList.hive.category,
    },
    {
      id: 2,
      title: t.projects.projectsList.myEcolo.title,
      description: t.projects.projectsList.myEcolo.description,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["PHP", "Laravel", "MySQL", "Git"],
      category: t.projects.projectsList.myEcolo.category,
    },
    {
      id: 3,
      title: t.projects.projectsList.genCare.title,
      description: t.projects.projectsList.genCare.description,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Flask", "Selenium"],
      category: t.projects.projectsList.genCare.category,
    },
    {
      id: 4,
      title: t.projects.projectsList.asteroidWatch.title,
      description: t.projects.projectsList.asteroidWatch.description,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["RAG Chatbot", "Gemini", "Spring Boot", "React"],
      category: t.projects.projectsList.asteroidWatch.category,
    },
    {
      id: 5,
      title: t.projects.projectsList.usedCars.title,
      description: t.projects.projectsList.usedCars.description,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Pandas", "Scikit-Learn", "Jupyter"],
      category: t.projects.projectsList.usedCars.category,
    },
    {
      id: 6,
      title: t.projects.projectsList.ecs.title,
      description: t.projects.projectsList.ecs.description,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Oracle Apex", "Oracle Database", "PL-SQL"],
      category: t.projects.projectsList.ecs.category,
    },
  ]

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const categories = [
    { id: "all", label: t.projects.categories.all },
    { id: "web", label: t.projects.categories.web },
    { id: "mobile", label: t.projects.categories.mobile },
    { id: "ai", label: t.projects.categories.ai },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.projects.title}</h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </FadeIn>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <motion.div
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Badge variant="secondary">{tag}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
