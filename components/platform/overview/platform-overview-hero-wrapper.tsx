"use client"

import { useEffect, useState, useRef } from "react"
import { Header } from "@/components/header"
import { PlatformOverviewHero } from "./platform-overview-hero"

export function PlatformOverviewHeroWrapper() {
  const [headerVisible, setHeaderVisible] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight
        const scrollY = window.scrollY
        setHeaderVisible(scrollY < heroHeight / 2)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative" ref={heroRef}>
      {/* Gradient background */}
      <div
        className="absolute top-0 left-0 w-[40%] h-[60%] pointer-events-none z-0"
        style={{
          background: "linear-gradient(135deg, rgba(89,59,238,0.5) 0%, rgba(128,233,255,0.5) 100%)",
          filter: "blur(60px)",
        }}
      />
      {/* Header with scroll-hide */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      {/* Spacer for fixed header */}
      <div className="h-20" />
      <div className="relative z-10">
        <PlatformOverviewHero />
      </div>
    </div>
  )
}
