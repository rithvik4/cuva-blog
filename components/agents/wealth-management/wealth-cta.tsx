import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function WealthCta() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Wealth Management Operations?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            See how the Wealth Management Agent can automate your workflows while maintaining governance and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/platform/cuva-agents/agent-studio">See Agent Studio</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/platform/operating-fabric">Explore Operating Fabric</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
