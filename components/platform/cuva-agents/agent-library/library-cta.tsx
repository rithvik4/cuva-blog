import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LibraryCta() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to accelerate your automation?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#593BEE] hover:bg-[#4a2fcc] text-white" asChild>
              <Link href="/platform/cuva-agents/agent-studio">Open in Agent Studio</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0F0D1A] bg-transparent"
            >
              Explore Agent Categories
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#80E9FF] text-[#80E9FF] hover:bg-[#80E9FF] hover:text-[#0F0D1A] bg-transparent"
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
