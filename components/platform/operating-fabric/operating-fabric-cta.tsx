import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function OperatingFabricCta() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Build on a Unified Foundation?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          See how Cuva's Operating Fabric powers enterprise-grade agentic automation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-[#593BEE] hover:bg-white/90 px-8 py-6 text-lg rounded-lg">
            <Link href="/demo">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent"
          >
            <Link href="/platform/operating-fabric/operations-console">Explore Operations Console</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent"
          >
            <Link href="/platform/operating-fabric/cuvabot">See CuvaBot</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
