import { Database, Search } from "lucide-react"

const knowledgeBaseCreation = [
  "Ingest enterprise documents and operational information",
  "Structure and organize knowledge into a unified knowledge base",
  "Validate, enrich, and refine knowledge over time",
  "Keep enterprise knowledge current as information evolves",
]

const knowledgeRetrieval = [
  "Ask questions or explore topics conversationally",
  "Retrieve relevant, trusted enterprise knowledge",
  "Generate grounded responses linked back to original sources",
  "Apply permissions and access controls consistently",
]

export function KnowledgeAssistantHowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            The Knowledge Assistant supports the full lifecycle of enterprise knowledge through two core flows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Knowledge Base Creation */}
          <div className="bg-[#F4F4F7] rounded-2xl p-8 border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F0D1A]">Knowledge Base Creation</h3>
            </div>
            <ul className="space-y-4">
              {knowledgeBaseCreation.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-[#3D3D4E] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Retrieval */}
          <div className="bg-[#F4F4F7] rounded-2xl p-8 border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#80E9FF]/20 flex items-center justify-center">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F0D1A]">Knowledge Retrieval</h3>
            </div>
            <ul className="space-y-4">
              {knowledgeRetrieval.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#80E9FF] text-[#0F0D1A] text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-[#3D3D4E] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
