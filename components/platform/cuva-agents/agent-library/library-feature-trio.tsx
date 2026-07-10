import { Bot, Plug, Wrench } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Ready-Made Financial Agents",
    description: "Agents for onboarding, SCF, AML, tax, reconciliation, reporting, and wealth workflows.",
  },
  {
    icon: Plug,
    title: "Plug-and-Play Integrations",
    description: "Each agent comes with preconfigured connectors, prompts, and workflow steps.",
  },
  {
    icon: Wrench,
    title: "Customizable Logic",
    description: "Easily adjust rules, tools, workflows, and knowledge packs to match enterprise requirements.",
  },
]

export function LibraryFeatureTrio() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E5E5] hover:border-[#593BEE]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-6">
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
