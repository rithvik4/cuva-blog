const steps = [
  {
    number: "1",
    title: "Design the Workflow",
    description: "Create workflows using visual nodes for tasks, decisions, conditions, and agent actions.",
  },
  {
    number: "2",
    title: "Connect Tools and Systems",
    description: "Attach CRM, PMS, core banking, compliance tools, and other systems via connectors.",
  },
  {
    number: "3",
    title: "Test and Deploy",
    description: "Run simulations, validate outputs, then deploy across workflows, APIs, or chat.",
  },
]

export function StudioHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-16">How It Works</h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#593BEE] to-[#80E9FF] hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
                  <p className="text-[#3D3D4E] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
