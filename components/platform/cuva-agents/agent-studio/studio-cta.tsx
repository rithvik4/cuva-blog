import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function StudioCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10">
          Ready to build smarter workflows?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-[#593BEE] hover:bg-gray-100">
            <Link href="/demo">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="/platform/cuva-agents/multi-agent-workflows">
              Explore Multi-Agent Workflows
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
