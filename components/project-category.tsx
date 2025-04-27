"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

interface ProjectCategoryProps {
  title: string
  projects: Project[]
}

export default function ProjectCategory({ title, projects }: ProjectCategoryProps) {
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

      <StaggerContainer>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform"
                      />
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
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
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  )
}
