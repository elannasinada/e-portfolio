"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add this to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider
      {...props}
      enableSystem={false}
      enableColorScheme={true}
      disableTransitionOnChange
      forcedTheme={!mounted ? undefined : null}
    >
      {children}
    </NextThemesProvider>
  )
}
