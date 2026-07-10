import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SolutionsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute top-0 left-0 w-[40%] h-[50%] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(89,59,238,0.5) 0%, rgba(128,233,255,0.5) 100%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#E8E4FD] text-primary font-semibold text-sm rounded-full mb-6">
            Solutions
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] mb-6 leading-tight">
            AI solutions that deliver measurable outcomes for financial teams
          </h1>
          <p className="text-lg md:text-xl text-[#3D3D4E] mb-8 leading-relaxed">
            From faster onboarding to lower operational costs, Cuva solutions help financial institutions cut
            operational workload, boost client engagement, and increase customer acquisition while operating safely in
            regulated financial environments.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            <Link href="#solutions">Explore Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
