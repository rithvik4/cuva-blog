import { Bot, Brain, Shield } from "lucide-react"

const pillars = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Purpose-built agents that execute complex SCF workflows across multiple parties and systems.",
  },
  {
    icon: Brain,
    title: "Enterprise Knowledge",
    description: "Invoices, contracts, supplier data, and transaction history inform every decision.",
  },
  {
    icon: Shield,
    title: "Operating Fabric",
    description: "Governance, permissions, and auditability are enforced automatically across all workflows.",
  },
]

export function SCFSolutionsDifferentiation() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Why Cuva Solutions Work Where Others Don't
          </h2>
          <p className="text-lg text-[#3D3D4E]">
            Cuva supply chain finance solutions are built on a unified system that combines AI agents, enterprise
            knowledge systems, and an operating fabric into one governed execution layer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E]">{pillar.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#3D3D4E] mt-10 max-w-3xl mx-auto">
          This enables reliable, end-to-end AI grounded in enterprise context, with governance built in for regulated
          supply chain finance environments.
        </p>
      </div>
    </section>
  )
}
