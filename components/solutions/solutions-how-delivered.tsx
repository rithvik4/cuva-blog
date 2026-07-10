const steps = [
  {
    number: "1",
    title: "Apply Proven AI Agents",
    description: "Pre-built and customizable agents execute core financial workflows.",
  },
  {
    number: "2",
    title: "Ground Actions in Enterprise Knowledge",
    description: "Knowledge systems provide context, accuracy, and traceability.",
  },
  {
    number: "3",
    title: "Operate with Governance Built In",
    description: "Policies, permissions, and auditability are enforced automatically.",
  },
]

export function SolutionsHowDelivered() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-12">
          How Outcomes Are Delivered
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
                  <p className="text-[#3D3D4E] text-sm">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
