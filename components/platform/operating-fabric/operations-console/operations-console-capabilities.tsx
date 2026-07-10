import { Monitor, Layers, FileSearch, Settings } from "lucide-react"

const capabilities = [
  {
    icon: Monitor,
    title: "Execution Monitoring",
    description: "View active, completed, and failed workflow runs across agents, triggers, and environments.",
  },
  {
    icon: Layers,
    title: "Step-Level Inspection",
    description: "Inspect each step in a workflow including agent decisions, tool calls, inputs, and outputs.",
  },
  {
    icon: FileSearch,
    title: "Logs and Audit Trails",
    description:
      "Access immutable logs showing who triggered what, when it ran, what data was accessed, and what actions were taken.",
  },
  {
    icon: Settings,
    title: "Operational Controls",
    description: "Pause, retry, disable, or refine workflows based on operational insights and policy requirements.",
  },
]

export function OperationsConsoleCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Core Capabilities</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-4">
                <cap.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F0D1A] mb-2">{cap.title}</h3>
              <p className="text-[#3D3D4E]">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
