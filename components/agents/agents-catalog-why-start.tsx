import { CheckCircle } from "lucide-react"

const benefits = [
  "Faster deployment without starting from scratch",
  "Consistent behavior across teams and regions",
  "Built-in governance and auditability",
  "Clear path from pilot to production",
]

export function AgentsCatalogWhyStart() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Why Start With the Agent Catalog
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Starting with prebuilt agents reduces implementation risk and accelerates time to value.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                <CheckCircle className="w-5 h-5 text-[#80E9FF] flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
