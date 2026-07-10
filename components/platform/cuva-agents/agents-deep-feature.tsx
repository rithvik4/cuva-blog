import { Check } from "lucide-react"

const benefits = [
  "Fewer manual handoffs",
  "Shorter process cycles",
  "Better accuracy and decision consistency",
  "Scalable across teams and regions",
]

export function AgentsDeepFeature() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
              Automated, scalable financial operations
            </h2>
            <p className="text-lg text-[#3D3D4E] leading-relaxed">
              Agentic Automation handles high-volume, accuracy-critical financial processes while staying aligned with
              enterprise rules.
            </p>
          </div>

          <div className="bg-[#F4F4F7] rounded-2xl p-8">
            <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-6">Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#3D3D4E]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
