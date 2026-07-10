import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SCFSolutionsHero() {
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
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Supply Chain Finance Solutions
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] mb-6 text-balance">
            AI Solutions That Transform Supply Chain Finance Operations
          </h1>
          <p className="text-lg md:text-xl text-[#3D3D4E] mb-8 max-w-3xl mx-auto text-pretty">
            Cuva helps financial institutions and platform providers reduce operational friction, accelerate financing
            cycles, and improve visibility across supply chain finance programs. Our solutions are designed to handle
            multi-party complexity while operating safely in regulated financial environments.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="#solutions">Explore Supply Chain Finance Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
