import { Database, Network, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Unified Knowledge Base",
    description:
      "All your financial documents, client data, portfolios, and records indexed and searchable in one place.",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description:
      "Semantic graph linking clients, accounts, transactions, entities, and relationships for context-aware reasoning.",
  },
  {
    icon: MessageSquare,
    title: "RAG Intelligence",
    description: "Every response grounded in enterprise data through secure, compliant retrieval-augmented generation.",
  },
]

export function KnowledgeFeatureTrio() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-5 p-8 rounded-xl border border-neutral-200 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E5FAFE]">
                <feature.icon className="h-8 w-8 text-[#593BEE]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D1A]">{feature.title}</h3>
              <p className="text-base text-[#3D3D4E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
