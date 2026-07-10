import { ArrowRight } from "lucide-react"

const stages = [
  {
    title: "Build",
    description:
      "Assemble workflow components into coordinated multi-agent flows. Define agent roles, execution order, flow control, and termination conditions. Workflow design is performed using Agent Studio.",
  },
  {
    title: "Train",
    description:
      "Refine agent behavior by validating outputs, adjusting decision paths, and improving consistency. Training leverages execution feedback and historical results to improve reliability.",
  },
  {
    title: "Run",
    description:
      "Execute workflows through multiple trigger modes, including APIs, schedules, and manual activation. Agents coordinate across steps, pass context, and handle multi-stage execution.",
  },
  {
    title: "Monitor & Iterate",
    description:
      "Track workflow execution through detailed logs and execution history. Identify failures, handle exceptions, introduce human intervention when required, and continuously refine workflows.",
  },
]

export function OrchestrationLifecycle() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Workflow Lifecycle</h2>
          {/* Lifecycle flow indicator */}
          <div className="flex items-center justify-center gap-2 text-[#593BEE] font-medium mb-8">
            {stages.map((stage, index) => (
              <span key={index} className="flex items-center gap-2">
                <span>{stage.title}</span>
                {index < stages.length - 1 && <ArrowRight className="w-4 h-4" />}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stages.map((stage, index) => (
            <div key={index} className="bg-[#F4F4F7] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#593BEE] rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0F0D1A]">{stage.title}</h3>
              </div>
              <p className="text-[#3D3D4E] leading-relaxed">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
