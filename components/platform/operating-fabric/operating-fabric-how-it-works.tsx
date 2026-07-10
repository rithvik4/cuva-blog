const steps = [
  {
    number: "01",
    title: "Ingest Platform Signals",
    description: "Events from connectors, users, schedules, and systems enter the Operating Fabric.",
  },
  {
    number: "02",
    title: "Coordinate Execution",
    description: "The fabric determines which agents, workflows, and models should act, and in what order.",
  },
  {
    number: "03",
    title: "Enforce Policy and Control",
    description: "Every action is executed with permission checks, logging, and compliance controls applied.",
  },
  {
    number: "04",
    title: "Maintain System State",
    description:
      "Workflow state, agent context, and outcomes are tracked and persisted for reliability and traceability.",
  },
]

export function OperatingFabricHowItWorks() {
  return (
    <section className="py-24 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            A coordinated approach to enterprise-grade execution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#593BEE]/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 flex-1 hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
                    <p className="text-[#3D3D4E] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
