import { Server, GitBranch, Database, ShieldCheck } from "lucide-react"

const capabilities = [
  {
    icon: Server,
    title: "Unified Runtime",
    description:
      "A shared execution environment where agents, workflows, and models run with consistent rules, context, and permissions.",
  },
  {
    icon: GitBranch,
    title: "Orchestration and Flow Control",
    description: "Coordinates triggers, agents, decision logic, and terminators across complex, multi-step workflows.",
  },
  {
    icon: Database,
    title: "Context and State Management",
    description:
      "Maintains workflow state, agent memory, and knowledge context across long-running and multi-agent processes.",
  },
  {
    icon: ShieldCheck,
    title: "Security and Governance Layer",
    description:
      "Enforces identity, permissions, audit trails, and compliance policies across every action in the platform.",
  },
]

export function OperatingFabricCapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Core Capabilities</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            The foundational capabilities that power enterprise-grade agentic operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-5">
                <capability.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-3">{capability.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
