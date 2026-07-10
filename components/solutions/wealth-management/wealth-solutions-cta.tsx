import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WealthSolutionsCta() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6 font-serif">
            Ready to Transform Your Wealth Management Operations?
          </h2>
          <p className="text-[#3D3D4E] mb-8">See how Cuva can help your firm deliver better outcomes</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/demo">Book a Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              asChild
            >
              <Link href="/agents/wealth-management">Explore Agents</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              asChild
            >
              <Link href="/platform">See Platform</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
