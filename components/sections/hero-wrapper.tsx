import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"

export function HeroWrapper() {
  return (
    <div className="relative">
      {/* Gradient background spanning header + hero */}
      <div
        className="absolute top-0 left-0 w-[40%] h-[50%] pointer-events-none z-0"
        style={{
          background: "linear-gradient(135deg, #593BEE 0%, #80E9FF 100%)",
          filter: "blur(80px)",
          opacity: 0.5,
          borderRadius: "0 0 100% 0",
        }}
      />
      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
    </div>
  )
}
