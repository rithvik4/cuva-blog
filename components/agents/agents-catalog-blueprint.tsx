import { CheckCircle, Layers, Settings } from "lucide-react"

const blueprintItems = [
  {
    icon: CheckCircle,
    title: "Production-Ready Financial Agent Examples",
    description:
      "These agents are fully implemented, production-ready examples of complex financial workflows. They reflect real enterprise patterns for orchestration, decisioning, knowledge use, and governance.",
  },
  {
    icon: Layers,
    title: "Blueprints for Building Complex Enterprise Agents",
    description:
      "Each agent demonstrates how sophisticated financial agents are designed on the platform, beyond simple automation or chat. Teams can study these implementations to understand structure, logic, and operating patterns.",
  },
  {
    icon: Settings,
    title: "Deploy, Extend, or Build Custom Agents",
    description:
      "Enterprises can deploy these agents as-is, extend them, or build entirely new agents using the same platform capabilities. Pre-built agents act as examples, not constraints, for what can be built.",
  },
]

export function AgentsCatalogBlueprint() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-12">
          Enterprise Financial Agent Blueprint
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blueprintItems.map((item, index) => (
            <div key={index} className="p-6 bg-[#F4F4F7] rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0F0D1A] mb-3">{item.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
