import { Check } from "lucide-react"

const benefits = [
  "Faster answers with traceable sources",
  "Less context switching across systems",
  "Faster operational throughput through command-driven workflows",
]

export function CuvabotCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
              From insight to execution in one interface
            </h2>
            <p className="text-lg text-[#3D3D4E]">
              CuvaBot collapses search, reasoning, and workflow execution into a single permission-aware experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#F4F4F7] border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#0F0D1A]" />
                </div>
                <p className="text-[#0F0D1A] font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
