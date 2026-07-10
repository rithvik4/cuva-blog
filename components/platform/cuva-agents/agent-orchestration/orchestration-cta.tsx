import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OrchestrationCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to automate complex workflows?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          See how Multi-Agent Workflows can transform your enterprise operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-[#593BEE] hover:bg-white/90">
            <Link href="/demo">Book a Demo</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="/platform/cuva-agents/agent-studio">Explore Agent Studio</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="/platform/cuva-agents">See Agentic Automation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
