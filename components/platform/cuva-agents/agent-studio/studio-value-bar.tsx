import { Hammer, FlaskConical, Rocket } from "lucide-react"

const pillars = [
  {
    icon: Hammer,
    title: "Build",
    description:
      "Design multi-step agentic workflows visually, defining logic, decisions, and actions on a single canvas.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    description: "Run workflows to verify logic and outcomes before deployment.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Deploy workflows with a single click.",
  },
]

export function StudioValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Build, test, and deploy agentic workflows
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Build, test, and deploy agentic workflows from design to production using a visual studio.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
