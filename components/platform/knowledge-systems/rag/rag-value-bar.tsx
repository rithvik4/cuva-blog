import { Target, Brain, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Grounded Responses",
    description: "Deliver answers and outputs sourced from trusted enterprise knowledge.",
  },
  {
    icon: Brain,
    title: "Context-Aware Reasoning",
    description: "Provide AI agents and assistants with relevant, real-time enterprise context.",
  },
  {
    icon: Shield,
    title: "Governed Retrieval and Generation",
    description: "Apply permissions, audit trails, and controls to every retrieval and response.",
  },
]

export function RagValueBar() {
  return (
    <section id="explore-rag" className="bg-[#F4F4F7] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#0F0D1A] mb-10">
          Grounded Intelligence for Enterprise AI
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          RAG ensures AI reasoning and automation are driven by verified enterprise knowledge, not assumptions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#E5FAFE] mb-4">
                <value.icon className="h-7 w-7 text-[#593BEE]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F0D1A] mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
