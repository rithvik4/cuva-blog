import { Check } from "lucide-react"

const benefits = [
  "Predictable and reliable execution",
  "Full visibility and auditability",
  "Safe scaling of agentic workflows",
  "Reduced operational risk",
]

export function OperatingFabricWhyItMatters() {
  return (
    <section className="py-24 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Why It Matters</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Without an operating fabric, AI systems become fragile collections of tools. With Cuva's Operating Fabric,
              enterprises gain a stable, governable foundation for running agentic automation in production.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="font-serif text-xl font-semibold text-white mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
