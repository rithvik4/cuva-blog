import { Network } from "lucide-react"

export function SearchAgenticGraph() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mx-auto mb-8">
            <Network className="w-8 h-8 text-[#593BEE]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">Agentic Knowledge Graph</h2>
          <p className="text-lg text-[#3D3D4E] leading-relaxed">
            The Knowledge Graph is built and continuously updated by AI agents through automated ETL, entity extraction,
            and relationship linking. This ensures the graph evolves as enterprise data evolves, enabling accurate and
            current search results.
          </p>
        </div>
      </div>
    </section>
  )
}
