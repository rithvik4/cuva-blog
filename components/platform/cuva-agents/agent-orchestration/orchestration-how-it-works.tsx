const steps = [
  {
    number: "1",
    title: "Define the Workflow",
    description: "Map out the multi-agent workflow, defining tasks, dependencies, and handoff points.",
  },
  {
    number: "2",
    title: "Assign Agents",
    description: "Select specialized agents for each task based on capabilities and context requirements.",
  },
  {
    number: "3",
    title: "Execute and Monitor",
    description: "Run the orchestrated workflow with real-time visibility into agent actions and decisions.",
  },
]

export function OrchestrationHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Orchestrate complex multi-agent workflows in three simple steps.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[#593BEE]/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-[#593BEE] rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="pt-2">
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
