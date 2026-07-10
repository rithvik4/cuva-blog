import { Network, RefreshCw, Shield } from "lucide-react"

const features = [
  {
    icon: Network,
    title: "Intelligent Task Delegation",
    description: "Automatically assign tasks to specialized agents based on their capabilities, context, and workload.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Agent Handoffs",
    description:
      "Pass context and state between agents without data loss, ensuring continuity across complex workflows.",
  },
  {
    icon: Shield,
    title: "Governed Execution",
    description: "Enforce compliance rules, approval gates, and audit trails at every step of the orchestration.",
  },
]

export function OrchestrationFeatureTrio() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Orchestrate Agents Like a Team
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Coordinate specialized agents to work together on complex financial operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-[#E5FAFE] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{feature.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
