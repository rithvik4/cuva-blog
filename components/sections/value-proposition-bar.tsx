import { Layers, Settings, Building2 } from "lucide-react"

const values = [
  {
    icon: Layers,
    title: "Comprehensive Platform",
    text: "Connectors, knowledge systems, agentic workflows, and operating fabric unified into a single AI-native platform.",
  },
  {
    icon: Settings,
    title: "Operating Fabric",
    text: "A core layer that orchestrates agents, workflows, models, connectors, and governance.",
  },
  {
    icon: Building2,
    title: "Built for the Financial Industry",
    text: "Purpose-built for finance with financial connectors, AI models, and financial agents.",
  },
]

export function ValuePropositionBar() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Reimagining{" "}
            <span className="text-[#593BEE]">Financial Enterprise Operations</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#F8F7FC] rounded-2xl p-6 border border-neutral-100 hover:border-[#593BEE]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-100 flex items-center justify-center mb-5">
                <value.icon className="h-6 w-6 text-[#593BEE]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D1A] mb-1">{value.title}</h3>
              <div className="w-8 h-1 bg-[#593BEE] rounded-full mb-4" />
              <p className="text-sm text-[#3D3D4E] leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
