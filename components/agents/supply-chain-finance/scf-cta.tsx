import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SCFCta() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
            Ready to Transform Your SCF Operations?
          </h2>
          <p className="text-lg text-[#3D3D4E] mb-8">
            Deploy the Supply Chain Finance Agent and accelerate your SCF programs with enterprise-grade AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white">
              <Link href="/demo">Book a Demo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#593BEE] text-[#593BEE] hover:bg-[#593BEE]/5 bg-transparent"
            >
              <Link href="/platform/cuva-agents/agent-studio">See Agent Studio</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#593BEE] text-[#593BEE] hover:bg-[#593BEE]/5 bg-transparent"
            >
              <Link href="/platform/operating-fabric">Explore Operating Fabric</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
