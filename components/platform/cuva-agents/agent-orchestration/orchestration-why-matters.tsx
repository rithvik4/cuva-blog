import { Check } from "lucide-react"

const benefits = [
  "Enables complex processes to be handled by multiple specialized agents",
  "Reduces manual handoffs and operational friction",
  "Improves reliability, traceability, and audit readiness",
]

export function OrchestrationWhyMatters() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-8">Why It Matters</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-5 text-left">
                <div className="w-8 h-8 bg-[#593BEE] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-[#3D3D4E]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
