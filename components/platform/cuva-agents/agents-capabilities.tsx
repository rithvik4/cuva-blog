import { Check } from "lucide-react"

const capabilities = [
  "Goal-driven automation powered by AI agents",
  "Automation grounded in enterprise context",
  "Multi-agent collaboration across complex processes",
  "Asynchronous and event-driven execution",
  "Built-in governance, auditability, and control",
  "Human-in-the-loop support for review, intervention, and escalation",
]

export function AgentsCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4 text-center">
            Core Capabilities
          </h2>
          <p className="text-lg text-[#3D3D4E] text-center mb-12 max-w-2xl mx-auto">
            These capabilities allow enterprises to automate complex operations while staying in control, with
            human-in-the-loop oversight and execution grounded in enterprise context.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-[#F4F4F7] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#0F0D1A] font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
