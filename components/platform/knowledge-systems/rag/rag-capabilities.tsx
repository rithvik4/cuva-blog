import { FileSearch, Network, Lock, FileText } from "lucide-react"

const capabilities = [
  {
    icon: FileSearch,
    title: "Source-Aware Retrieval",
    description:
      "Retrieve relevant information from structured and unstructured enterprise sources with full source attribution.",
  },
  {
    icon: Network,
    title: "Knowledge Graph Assisted Context",
    description: "Use entity relationships to enrich retrieval and improve relevance and precision.",
  },
  {
    icon: Lock,
    title: "Permission-Aware Access",
    description: "Ensure retrieval and responses respect enterprise access controls and data policies.",
  },
  {
    icon: FileText,
    title: "Traceable Responses",
    description: "Provide citations, references, and execution logs for every response and action.",
  },
]

export function RagCapabilities() {
  return (
    <section className="py-20 bg-[#F7F8F9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F0D1A] mb-4 text-center">Core Capabilities</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          RAG delivers enterprise-grade intelligence through these foundational capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#E5FAFE] mb-4">
                <capability.icon className="h-6 w-6 text-[#593BEE]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F0D1A] mb-2">{capability.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
