const steps = [
  {
    number: "1",
    title: "Observe Workflow Runs",
    description:
      "All executions triggered via API, chat, workflows, schedulers, forms, or manual actions are recorded in the console.",
  },
  {
    number: "2",
    title: "Inspect Decisions and Actions",
    description: "Each run can be expanded to reveal agent reasoning steps, connector interactions, and outputs.",
  },
  {
    number: "3",
    title: "Enforce Operational Discipline",
    description: "Teams use logs and metrics to refine workflows, tighten policies, and improve reliability.",
  },
]

export function OperationsConsoleHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#593BEE]/20" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 relative">
                  <div className="w-12 h-12 rounded-full bg-[#593BEE] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 z-10">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
                    <p className="text-[#3D3D4E]">{step.description}</p>
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
