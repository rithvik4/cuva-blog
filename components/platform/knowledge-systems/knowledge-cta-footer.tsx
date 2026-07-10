import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function KnowledgeCtaFooter() {
  return (
    <section className="bg-[#0F0D1A] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Explore Knowledge Systems</h2>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              <Link href="/platform/knowledge-systems/knowledge-assistant">
                Start with Knowledge Assistant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/platform/knowledge-systems/knowledge-search">Explore Knowledge Search</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/platform/knowledge-systems/rag">Learn more about RAG</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
