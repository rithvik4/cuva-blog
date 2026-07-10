import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SCFSolutionsCTA() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Ready to Transform Your SCF Operations?
          </h2>
          <p className="text-lg text-[#3D3D4E] mb-8">
            Explore how Cuva can help you automate multi-party workflows and accelerate financing cycles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/agents/supply-chain-finance">Explore Agents</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Link href="/platform">See Platform</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Link href="/demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
