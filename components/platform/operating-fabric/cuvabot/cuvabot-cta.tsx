import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CuvabotCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience CuvaBot?</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Discover how CuvaBot can transform the way your team accesses financial knowledge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-[#593BEE] hover:bg-white/90 px-8 py-6 text-lg rounded-lg">
            <Link href="/demo">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent rounded-lg"
          >
            <Link href="/platform/operating-fabric">Explore Operating Fabric</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent rounded-lg"
          >
            <Link href="/platform/operating-fabric/operations-console">See Operations Console</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
