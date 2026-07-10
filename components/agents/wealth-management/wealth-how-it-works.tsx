const steps = [
  {
    number: "01",
    title: "Ingest Client and Portfolio Context",
    description:
      "The agent consumes data from CRM systems, portfolio platforms, documents, and historical interactions.",
  },
  {
    number: "02",
    title: "Execute Advisor and Client Workflows",
    description: "Pre-built workflows coordinate onboarding, planning, reporting, and compliance tasks across systems.",
  },
  {
    number: "03",
    title: "Maintain Governance and Traceability",
    description: "All actions, decisions, and outputs are logged, auditable, and governed within the operating fabric.",
  },
]

export function WealthHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">From data ingestion to governed execution</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-gray-100">
                    <h3 className="font-serif font-bold text-xl text-[#0F0D1A] mb-2">{step.title}</h3>
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
