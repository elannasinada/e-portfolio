"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations"

interface Technology {
  name: string
  logo: string
}

export default function TechSlider() {
  const t = useTranslations()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  const technologies: Technology[] = [
    { name: "Java", logo: "/logos/java.png?height=60&width=60" },
    { name: "Python", logo: "/logos/python.png?height=60&width=60" },
    { name: "React", logo: "/logos/react.png?height=60&width=60" },
    { name: "Angular", logo: "/logos/angular.png?height=60&width=60" },
    { name: "Spring Boot", logo: "/logos/springboot.png?height=60&width=60" },
    { name: "Laravel", logo: "/logos/laravel.png?height=60&width=60" },
    { name: "PHP", logo: "/logos/php.png?height=60&width=60" },
    { name: "Docker", logo: "/logos/docker.png?height=60&width=60" },
    { name: "Kubernetes", logo: "/logos/Kubernetes.png?height=60&width=60" },
    { name: "MySQL", logo: "/logos/mysql.png?height=60&width=60" },
    { name: "Oracle", logo: "/logos/oracle.png?height=60&width=60" },
    { name: "Git", logo: "/logos/git.png?height=60&width=60" },
    { name: "Azure", logo: "/logos/azure.png?height=60&width=60" },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-12 bg-muted/30 dark:bg-muted/10 rounded-xl">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          {t.home.technologies.title}
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
          }}
        >
          {t.home.technologies.description}
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient overlay on left */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10"></div>

          {/* Single slider without pause on hover */}
          <div className="flex items-center overflow-hidden">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Double the items to create a seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center bg-card p-6 rounded-lg shadow-md min-w-[160px] h-[160px] transition-all duration-300 border border-border"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "hsl(var(--primary))",
                  }}
                >
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlay on right */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}
