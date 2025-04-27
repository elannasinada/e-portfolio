"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(({ children, className, ...props }, ref) => {
  return (
    <Button ref={ref} className={cn("relative overflow-hidden group", className)} {...props}>
      <motion.span
        className="absolute inset-0 bg-white/10 rounded-md"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </Button>
  )
})
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
