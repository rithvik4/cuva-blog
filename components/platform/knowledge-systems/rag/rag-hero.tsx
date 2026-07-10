import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RagHero() {
  return (
    <section className="pt-32 pb-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left: Text */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[#0F0D1A] sm:text-5xl lg:text-[56px] lg:leading-[1.1] text-balance">
              Retrieval-Augmented Generation
            </h1>
            <p className="mt-4 text-xl font-medium text-[#3D3D4E]">
              Trusted, context-aware intelligence for financial enterprises
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#3D3D4E] max-w-xl">
              Cuva's Retrieval-Augmented Generation capability delivers grounded, explainable responses by combining
              enterprise knowledge systems with AI reasoning. RAG ensures answers and actions are based on verified
              internal context, not generic model assumptions.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all"
              >
                <Link href="#explore-rag">
                  Explore RAG
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#80E9FF]/20 blur-3xl rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src="/rag-retrieval-augmented-generation-knowledge-graph.jpg"
                  alt="Retrieval-Augmented Generation Visualization"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
