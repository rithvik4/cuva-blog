const steps = [
  {
    number: "01",
    title: "Connect Your Systems",
    description: "Authenticate CRM, PMS, banking, compliance, communication, and document tools.",
  },
  {
    number: "02",
    title: "Sync and Enrich",
    description: "Data flows into knowledge systems, enriched with metadata and linked through the Knowledge Graph.",
  },
  {
    number: "03",
    title: "Power Agents and Workflows",
    description: "Agents read, update, and synchronize data across all connected systems with full auditability.",
  },
]

export function ConnectorsHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">From connection to action in three simple steps.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#593BEE] to-[#80E9FF] hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
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
      </div>
    </section>
  )
}
