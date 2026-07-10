const steps = [
  {
    number: "1",
    title: "Enter a Query",
    description:
      "Users search by client name, transaction details, portfolio attributes, or natural language questions.",
  },
  {
    number: "2",
    title: "Semantic Interpretation",
    description:
      "CuvaBot interprets the query using the Knowledge Graph's semantic relationships, understanding intent, terminology, and entity structure.",
  },
  {
    number: "3",
    title: "Context-Aware Results",
    description:
      "Results include documents, records, messages, and structured data enriched with relationships and metadata.",
  },
]

export function SearchHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-16">How It Works</h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#593BEE] to-[#80E9FF] hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="w-12 h-12 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0 text-white font-bold text-lg relative z-10">
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
    </section>
  )
}
