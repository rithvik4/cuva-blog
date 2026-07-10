const steps = [
  {
    number: "01",
    title: "Apply Proven Wealth Agents",
    description: "Pre-built and configurable agents execute core wealth management workflows.",
  },
  {
    number: "02",
    title: "Ground Actions in Enterprise Knowledge",
    description: "Client data, documents, and historical context inform every action and response.",
  },
  {
    number: "03",
    title: "Operate with Governance Built In",
    description: "Policies, permissions, and auditability are enforced automatically across workflows.",
  },
]

export function WealthSolutionsDelivery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F0D1A] mb-4 font-serif">
          How Outcomes Are Delivered
        </h2>
        <p className="text-center text-[#3D3D4E] mb-12 max-w-2xl mx-auto">
          A structured approach to delivering measurable results
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10">
                    {step.number}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
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
