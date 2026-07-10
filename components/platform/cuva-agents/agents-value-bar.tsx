import { Brain, Shield, Layers } from "lucide-react"

const pillars = [
  {
    icon: Brain,
    title: "Intelligent Agentic Automation",
    description:
      "Automate complex workflows using AI agents that reason, decide, and act dynamically rather than following static rules.",
  },
  {
    icon: Shield,
    title: "Precision Control and Governance",
    description:
      "Maintain fine-grained control over agent behavior with built-in governance, monitoring, and auditability across every execution.",
  },
  {
    icon: Layers,
    title: "Enterprise Context and Integration",
    description:
      "Ground automation in enterprise knowledge and systems through Knowledge Systems, the Operating Fabric, and deep system connectors.",
  },
]

export function AgentsValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Agentic automation designed for real enterprise complexity
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Cuva enables enterprises to automate complex, end-to-end operations using intelligent agents that operate
            with precision control, security, and enterprise context built in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-10 h-10 text-[#593BEE]" />
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
