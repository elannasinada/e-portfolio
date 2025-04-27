"use client"

import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import FadeIn from "./fade-in"

interface ScrollFadeProps {
  children: ReactNode
  threshold?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export default function ScrollFade({ children, threshold = 0.2, direction = "up", className = "" }: ScrollFadeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  return (
    <div ref={ref} className={className}>
      {isInView ? <FadeIn direction={direction}>{children}</FadeIn> : <div className="opacity-0">{children}</div>}
    </div>
  )
}
