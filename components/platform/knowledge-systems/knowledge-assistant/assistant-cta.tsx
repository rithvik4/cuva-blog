import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Search, BookOpen } from "lucide-react"

export function KnowledgeAssistantCta() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] sm:text-4xl">
            Ready to transform your enterprise knowledge?
          </h2>
          <p className="mt-4 text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            See how the Knowledge Assistant can give your teams instant access to trusted, structured knowledge.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Link href="/platform/knowledge-systems/knowledge-search">
                <Search className="mr-2 h-4 w-4" />
                Explore Knowledge Search
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-[#3D3D4E] hover:text-primary">
              <Link href="/platform/knowledge-systems/rag">
                <BookOpen className="mr-2 h-4 w-4" />
                See Retrieval-Augmented Generation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
