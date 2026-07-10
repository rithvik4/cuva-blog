import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AgentsCatalogCta() {
  return (
    <section className="py-20 bg-[#593BEE]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy Financial AI Agents?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Explore Agent Studio, see the Operating Fabric, or book a demo to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#593BEE] hover:bg-white/90" asChild>
              <Link href="/platform/cuva-agents/agent-studio">
                Explore Agent Studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/platform/operating-fabric">See Operating Fabric</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
