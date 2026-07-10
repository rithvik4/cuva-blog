import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SolutionsCta() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-8">
            Ready to see measurable outcomes?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              <Link href="/agents">Explore Agents</Link>
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
              className="border-gray-300 text-[#3D3D4E] hover:bg-gray-50 bg-transparent"
            >
              <Link href="/demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
