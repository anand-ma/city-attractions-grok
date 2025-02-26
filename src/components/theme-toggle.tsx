"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"

const themes = ["light", "dark", "rose", "blue", "green"]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="fixed right-4 top-4 w-9 h-9" />
  }

  const cycleTheme = () => {
    const currentIndex = Math.max(0, themes.indexOf(theme ?? "light"))
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <button
      onClick={cycleTheme}
      className="fixed right-4 top-4 rounded-full bg-primary p-2 text-primary-foreground shadow-lg transition-all hover:scale-110"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 [.rose_&]:hidden [.blue_&]:hidden [.green_&]:hidden" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 [.rose_&]:hidden [.blue_&]:hidden [.green_&]:hidden" />
      <Palette className="absolute h-5 w-5 rotate-90 scale-0 transition-all [.rose_&]:rotate-0 [.rose_&]:scale-100 [.blue_&]:rotate-0 [.blue_&]:scale-100 [.green_&]:rotate-0 [.green_&]:scale-100" />
    </button>
  )
}
