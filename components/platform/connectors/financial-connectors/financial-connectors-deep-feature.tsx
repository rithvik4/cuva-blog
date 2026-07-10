import { Check } from "lucide-react"

const benefits = [
  "Unified financial intelligence",
  "Fast, accurate automation",
  "Reduced manual data handling",
  "Strong compliance alignment",
]

export function FinancialConnectorsDeepFeature() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
                Power end-to-end financial operations with unified data
              </h2>
              <p className="text-lg text-[#3D3D4E] leading-relaxed">
                Cuva enables automated workflows across financial systems, delivering faster processes and better
                decision-making.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#E5E5E5]">
              <h3 className="font-serif text-xl font-semibold text-[#0F0D1A] mb-6">Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E5FAFE] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#593BEE]" />
                    </div>
                    <span className="text-[#3D3D4E]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
