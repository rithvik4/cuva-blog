import { Upload, GitBranch, Sparkles } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Upload,
    title: "Connect and Ingest",
    description: "CRM, PMS, core banking systems, documents, and messaging tools flow into the platform.",
  },
  {
    number: "2",
    icon: GitBranch,
    title: "Structure and Enrich",
    description: "Agents classify entities, link relationships, and build the knowledge graph.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Generate Contextual Intelligence",
    description: "RAG pipelines deliver accurate answers and support agent workflows.",
  },
]

export function KnowledgeHowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0F0D1A] text-center mb-16">How It Works</h2>

        <div className="relative flex flex-col md:flex-row items-start justify-center gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center flex-1 relative">
              {/* Connecting arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+60px)] w-[calc(100%-120px)] h-[2px] bg-gradient-to-r from-[#593BEE] to-[#80E9FF]" />
              )}

              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#593BEE] text-white mb-6">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>

              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#E5FAFE] mb-4">
                <step.icon className="h-6 w-6 text-[#593BEE]" />
              </div>

              <h3 className="text-lg font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
              <p className="text-sm text-[#3D3D4E] leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
