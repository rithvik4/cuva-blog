import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function OperationsConsoleCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take Control?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          See how the Operations Console delivers visibility, traceability, and governance for your AI workflows.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
            <Link href="/platform/operating-fabric/cuvabot">See CuvaBot</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
