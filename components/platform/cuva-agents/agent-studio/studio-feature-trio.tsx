import { MousePointer2, Users, FileText } from "lucide-react"

const features = [
  {
    icon: MousePointer2,
    title: "Easy to Build",
    description:
      "An intuitive, drag-and-drop, canvas-based interface for designing agentic workflows without complexity.",
  },
  {
    icon: Users,
    title: "Multi-Agent Support",
    description:
      "Build complex multi-agent workflows easily using an intuitive component panel that simplifies coordination between agents.",
  },
  {
    icon: FileText,
    title: "Logs and Execution History",
    description:
      "Inspect execution history, results, and detailed logs for every workflow and component, enabling transparency and audit readiness.",
  },
]

export function StudioFeatureTrio() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Core Studio Capabilities</h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Key capabilities that power workflow design and configuration.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{feature.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
