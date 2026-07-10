import { Layers, GitBranch, Shield } from "lucide-react"

const pillars = [
  {
    icon: Layers,
    title: "Unified Platform Control Layer",
    description: "A shared runtime and control plane that coordinates all platform components",
  },
  {
    icon: GitBranch,
    title: "Built-in Orchestration and Governance",
    description: "Coordinates triggers, agents, decision logic, and terminators across workflows",
  },
  {
    icon: Shield,
    title: "Designed for Financial-Grade Operations",
    description: "Enterprise-grade security, compliance, and audit capabilities built-in",
  },
]

export function OperatingFabricValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
