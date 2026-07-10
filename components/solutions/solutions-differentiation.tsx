import { Bot, Brain, Settings } from "lucide-react"

const differentiators = [
  {
    icon: Bot,
    title: "AI Agents That Execute, Not Just Assist",
    description: "Agents run real financial workflows end to end.",
    benefit: "Faster execution, lower manual workload.",
  },
  {
    icon: Brain,
    title: "Knowledge Systems That Anchor Decisions",
    description: "Actions are grounded in governed, enterprise knowledge.",
    benefit: "Higher accuracy, explainable outcomes.",
  },
  {
    icon: Settings,
    title: "An Operating Fabric That Governs Everything",
    description: "Execution is controlled, observable, and auditable by default.",
    benefit: "Safe deployment at enterprise scale.",
  },
]

export function SolutionsDifferentiation() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
            Why Cuva Solutions Work Where Others Don't
          </h2>
          <p className="text-[#3D3D4E] text-lg">
            Most AI solutions in finance focus on a single layer and attempt to assemble the rest through integrations.
            Cuva is different. Our solutions are built on a unified system that combines AI agents, enterprise knowledge
            systems, and an operating fabric into one governed execution layer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#E5FAFE] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{item.title}</h3>
              <p className="text-[#3D3D4E] mb-4">{item.description}</p>
              <p className="text-sm text-primary font-semibold">Business benefit: {item.benefit}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-semibold text-[#0F0D1A]">
          It's not the components that matter. It's the fact that they operate as one system.
        </p>
      </div>
    </section>
  )
}
