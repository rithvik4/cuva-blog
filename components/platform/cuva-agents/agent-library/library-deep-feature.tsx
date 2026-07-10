import { CheckCircle } from "lucide-react"

const benefits = [
  "Faster time-to-value",
  "Standardized processes across teams",
  "Reduced engineering overhead",
  "Consistent compliance and accuracy",
]

export function LibraryDeepFeature() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6 text-balance">
                Accelerate automation across your enterprise
              </h2>
              <p className="text-lg text-[#3D3D4E] leading-relaxed">
                The Agent Library eliminates lengthy setup cycles by offering prebuilt, field-tested financial agents.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E5E5E5]">
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-6">Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#593BEE] flex-shrink-0 mt-0.5" />
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
