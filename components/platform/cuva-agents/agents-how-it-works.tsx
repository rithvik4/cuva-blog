const steps = [
  {
    number: "01",
    title: "Choose or Build Agents",
    description: "Start with prebuilt agents or design custom ones in Agent Studio.",
  },
  {
    number: "02",
    title: "Connect to Financial Systems",
    description: "Agents interact with CRM, PMS, banking systems, documents, and compliance tools.",
  },
  {
    number: "03",
    title: "Deploy Across Channels",
    description: "Run agents via chat, workflow triggers, API, scheduler, or manual activation.",
  },
]

export function AgentsHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-16">How It Works</h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#593BEE] to-[#80E9FF] hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
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
