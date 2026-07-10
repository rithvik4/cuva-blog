import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SearchCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
          Ready to unify your search experience?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white hover:bg-white/90 text-[#593BEE] px-8 py-6 text-lg rounded-lg" asChild>
            <Link href="/demo">Book a Demo</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent"
            asChild
          >
            <Link href="/platform/knowledge-systems/knowledge-assistant">Explore Knowledge Assistant</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent"
            asChild
          >
            <Link href="/platform/knowledge-systems/rag">See Retrieval-Augmented Generation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
