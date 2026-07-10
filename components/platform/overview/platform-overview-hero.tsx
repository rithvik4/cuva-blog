import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PlatformOverviewHero() {
  return (
    <section className="pt-12 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-4">Platform Overview</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The AI-native operating platform for financial enterprises
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Most AI platforms solve only one layer, such as knowledge, agents, or orchestration. Cuva unifies
            intelligence, automation, and governance into a single operating platform built for financial enterprises.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link href="/demo">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
