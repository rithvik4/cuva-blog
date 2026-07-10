import { Bot, Workflow, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Bot,
    title: "Domain-Specific Financial Agents",
    description: "Purpose-built agents for wealth management, supply chain finance, and M&A workflows.",
  },
  {
    icon: Workflow,
    title: "Prebuilt Workflows and Intelligence",
    description: "Each agent ships with end-to-end workflows, reasoning logic, and knowledge integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Ready by Design",
    description: "Agents run with governance, logging, and operational controls applied by default.",
  },
]

export function AgentsCatalogValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#593BEE]/20 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
