const steps = [
  {
    number: "01",
    title: "Ask a question or give a command",
    description: "Users interact via chat in the web app or embedded experiences.",
  },
  {
    number: "02",
    title: "Retrieve enterprise context",
    description: "Relevant context is pulled from Knowledge Systems and connected tools.",
  },
  {
    number: "03",
    title: "Respond or execute",
    description: "Return source-linked answers or trigger agent workflows to complete tasks end to end.",
  },
]

export function CuvabotHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
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
