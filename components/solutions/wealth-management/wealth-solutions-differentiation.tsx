import { Layers, Brain, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Layers,
    title: "Unified System",
    description: "AI agents, enterprise knowledge, and an operating fabric combined into one governed execution layer.",
  },
  {
    icon: Brain,
    title: "Grounded in Context",
    description: "Reliable, end-to-end AI grounded in enterprise context for accurate, relevant outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Governance Built In",
    description: "Designed for regulated wealth management environments with compliance at the core.",
  },
]

export function WealthSolutionsDifferentiation() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F0D1A] mb-4 font-serif">
          Why Cuva Solutions Work Where Others Don't
        </h2>
        <p className="text-center text-[#3D3D4E] mb-12 max-w-2xl mx-auto">
          Built on a unified system designed for regulated wealth management
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
