import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WealthSolutionsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: "40%",
          height: "50%",
          background: "linear-gradient(135deg, rgba(89,59,238,0.5) 0%, rgba(128,233,255,0.5) 100%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Wealth Management Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] mb-6 font-serif leading-tight text-balance">
            Outcome-Driven AI Solutions for Modern Wealth Management Firms
          </h1>
          <p className="text-lg md:text-xl text-[#3D3D4E] mb-8 leading-relaxed text-pretty">
            Cuva helps wealth management firms reduce operational workload, improve advisor productivity, and deliver
            highly personalized client experiences at scale. Our solutions are designed for the realities of modern
            wealth management, where growth, compliance, and client expectations must be balanced without increasing
            cost or risk.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="#solutions">Explore Wealth Management Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
