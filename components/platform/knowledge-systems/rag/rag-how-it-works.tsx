import { Database, Search, Brain, Zap } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Index and Structure",
    description:
      "Enterprise data and documents are ingested, structured, and continuously updated by agentic ETL into knowledge systems.",
  },
  {
    number: "02",
    icon: Search,
    title: "Retrieve Relevant Context",
    description:
      "When a query or workflow step runs, RAG retrieves the most relevant context using semantic and structured signals.",
  },
  {
    number: "03",
    icon: Brain,
    title: "Ground and Reason",
    description:
      "AI models reason over retrieved context, applying financial logic and policies to generate accurate outputs.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Respond or Act",
    description: "Results are returned to users through assistants or used by agents to trigger actions and workflows.",
  },
]

export function RagHowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F0D1A] mb-4 text-center">How It Works</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          RAG operates in four seamless stages to deliver grounded, actionable intelligence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#593BEE] to-[#80E9FF] text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-[#0F0D1A] text-white text-xs font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#0F0D1A] mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-[#593BEE]/30 to-[#80E9FF]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
