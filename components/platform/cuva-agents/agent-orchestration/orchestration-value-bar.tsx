import { Workflow, Users, Eye } from "lucide-react"

const pillars = [
  {
    icon: Workflow,
    title: "Handle complex operations",
    description: "Support workflows with branching paths, dependencies, and decision-heavy logic.",
  },
  {
    icon: Users,
    title: "Coordinate multi-agent behavior",
    description: "Assign specialized agents to different steps within a single end-to-end workflow.",
  },
  {
    icon: Eye,
    title: "Maintain control and visibility",
    description: "Track execution, decisions, and outcomes across the entire workflow lifecycle.",
  },
]

export function OrchestrationValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Designed for complex enterprise workflows
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Multi-agent workflows enable enterprises to automate operations that involve branching logic, multiple
            decisions, and coordinated agent behavior.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E5] rounded-xl p-8 text-center hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-[#E5FAFE] rounded-2xl flex items-center justify-center mx-auto mb-6">
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
