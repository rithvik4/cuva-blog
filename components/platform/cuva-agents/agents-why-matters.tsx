import { Workflow, AlertTriangle, Scale, Shield } from "lucide-react"

const outcomes = [
  {
    icon: Workflow,
    title: "End-to-End Automation",
    description: "Automate the full process, not isolated steps.",
  },
  {
    icon: AlertTriangle,
    title: "Built-In Exception Handling",
    description: "Adapt to missing data, edge cases, and change without breaking workflows.",
  },
  {
    icon: Scale,
    title: "Scale With Control",
    description: "Expand automation safely with human oversight and governance.",
  },
  {
    icon: Shield,
    title: "Lower Operational Risk",
    description: "Keep decisions grounded in enterprise context and policy.",
  },
]

export function AgentsWhyMatters() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-12 text-center">Why It Matters</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8E4FD] flex items-center justify-center mb-4">
                <outcome.icon className="w-6 h-6 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">{outcome.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
