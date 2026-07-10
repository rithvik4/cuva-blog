import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function OperatingFabricHero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
      <div className="max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#0F0D1A] leading-tight mb-6">
          Operating Fabric
        </h1>
        <p className="text-xl md:text-2xl text-[#3D3D4E] mb-4 leading-relaxed max-w-3xl">
          The core layer that unifies agents, workflows, connectors, models, and governance
        </p>
        <p className="text-lg text-[#9090A7] mb-8 leading-relaxed max-w-3xl">
          Cuva's Operating Fabric is the foundational platform layer that binds together all components of the system.
          It ensures that agents, workflows, knowledge systems, connectors, models, and security operate as one
          coherent, governed operating environment.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white px-8 py-6 text-lg rounded-lg"
        >
          <Link href="/demo">
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
