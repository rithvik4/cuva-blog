const steps = [
  {
    number: "1",
    title: "Connect Financial Systems Using Pre-Built Connectors",
    description:
      "Securely connect all financial systems through Cuva's expanding library of pre-built financial connectors.",
  },
  {
    number: "2",
    title: "Build Knowledge Base",
    description:
      "Connected financial data is ingested, structured, and enriched into unified Knowledge Systems — powering agents and downstream automation.",
  },
  {
    number: "3",
    title: "Automate Workflows",
    description:
      "Use connected financial data to power secure, scalable automation across your enterprise workflows. Agents use normalized data to automate onboarding, reporting, payments, reconciliation, compliance checks, and other financial workflows.",
  },
]

export function FinancialConnectorsHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#593BEE]/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#593BEE] text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-xl font-semibold text-[#0F0D1A] mb-2">{step.title}</h3>
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
