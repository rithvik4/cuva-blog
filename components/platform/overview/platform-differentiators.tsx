import { Brain, Database, Shield, Building2 } from "lucide-react"

const differentiators = [
  {
    icon: Database,
    title: "Agentic knowledge systems",
    description: "Built and maintained by AI agents",
  },
  {
    icon: Brain,
    title: "Context-aware agents",
    description: "Agents that reason with full enterprise context",
  },
  {
    icon: Shield,
    title: "Operating fabric as control plane",
    description: "Not just orchestration, but true governance and control",
  },
  {
    icon: Building2,
    title: "Finance-first design",
    description: "Aligned with regulatory and operational realities",
  },
]

export function PlatformDifferentiators() {
  return (
    <section className="py-20 bg-[#F7F8F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">What Makes Cuva Different</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Cuva is purpose-built for financial enterprises operating in complex, regulated environments.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
