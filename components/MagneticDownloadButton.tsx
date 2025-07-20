"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimationControls as useAnimation } from "framer-motion"

import { Download } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"

interface Btn03Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  particleCount?: number
  attractRadius?: number
}

interface Particle {
  id: number
  x: number
  y: number
}

export default function MagneticDownloadButton({
  className,
  particleCount = 12,
  attractRadius = 50,
  ...props
}: Btn03Props) {
  const [isAttracting, setIsAttracting] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const particlesControl = useAnimation()

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }))
    setParticles(newParticles)
  }, [particleCount])

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true)
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    })
  }, [particlesControl])

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false)
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    }))
  }, [particlesControl, particles])

  return (
    <Link
  href="/support_engineer_resume.pdf"
  download
  onMouseEnter={handleInteractionStart}
  onMouseLeave={handleInteractionEnd}
  onTouchStart={handleInteractionStart}
  onTouchEnd={handleInteractionEnd}
  className={cn(
    "relative inline-flex items-center justify-center",
    "px-3 py-3 md:px-6 md:py-3", // responsive padding
    "rounded-full md:rounded-md", // circular on mobile
    "overflow-hidden",
    "bg-violet-100 dark:bg-violet-900 border border-violet-300 dark:border-violet-700",
    "text-violet-600 dark:text-violet-300 font-semibold transition-all duration-300 group",
    "hover:bg-violet-200 dark:hover:bg-violet-800",
    className
  )}
  {...props}
>
  {particles.map((_, index) => (
    <motion.div
      key={index}
      custom={index}
      initial={{ x: particles[index].x, y: particles[index].y }}
      animate={particlesControl}
      className={cn(
        "absolute w-1.5 h-1.5 rounded-full",
        "bg-violet-400 dark:bg-violet-300",
        "transition-opacity duration-300",
        "hidden md:block", // hide particles on mobile
        isAttracting ? "opacity-100" : "opacity-40"
      )}
    />
  ))}

  <span className="relative z-10 flex items-center gap-2">
    <Download className={cn("w-5 h-5", isAttracting && "scale-110")} />
    <span className="hidden md:inline">
      {isAttracting ? "Get the Resume🖥️" : "Download Resume"}
    </span>
  </span>
</Link>

  )
}
