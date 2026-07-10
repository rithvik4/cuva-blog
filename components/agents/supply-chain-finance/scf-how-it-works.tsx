const steps = [
  {
    number: "01",
    title: "Ingest Supply Chain Signals",
    description:
      "The agent consumes data from accounting systems, ERP platforms, payment rails, compliance tools, and supplier documentation.",
  },
  {
    number: "02",
    title: "Orchestrate SCF Workflows",
    description:
      "Pre-built workflows coordinate onboarding, invoice processing, financing decisions, payments, and reporting across systems.",
  },
  {
    number: "03",
    title: "Enforce Governance and Auditability",
    description:
      "All actions, decisions, and data movements are logged, traceable, and governed within the operating fabric.",
  },
]

export function SCFHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#593BEE] to-[#80E9FF] hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#593BEE] text-white flex items-center justify-center font-bold text-sm z-10">
                    {step.number}
                  </div>
                  <div className="flex-1 pt-2">
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
