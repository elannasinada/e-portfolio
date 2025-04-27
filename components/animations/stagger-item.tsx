"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerItemProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export default function StaggerItem({ children, direction = "up", className = "" }: StaggerItemProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 20 }
      case "down":
        return { y: -20 }
      case "left":
        return { x: 20 }
      case "right":
        return { x: -20 }
      default:
        return {}
    }
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...getDirectionOffset() },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
