import { Brain, Workflow, Database, Shield } from "lucide-react"

const capabilities = [
  {
    icon: Brain,
    title: "Purpose-Built Intelligence",
    description:
      "Each agent is designed for a specific financial domain, with workflows, reasoning logic, and data models aligned to real operational needs.",
  },
  {
    icon: Workflow,
    title: "Embedded Workflows",
    description:
      "Agents ship with end-to-end workflows that automate common tasks and processes, not just isolated actions.",
  },
  {
    icon: Database,
    title: "Knowledge-Integrated",
    description:
      "Agents operate with context from knowledge bases, graphs, and documents, enabling accurate, explainable outcomes.",
  },
  {
    icon: Shield,
    title: "Governed Execution",
    description:
      "Agents run within Cuva's operating fabric with logging, traceability, and operational controls applied by default.",
  },
]

export function AgentsCatalogCapabilities() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-12">
          What You Get With Every Agent
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#593BEE]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-4">
                <capability.icon className="w-6 h-6 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0F0D1A] mb-2">{capability.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
