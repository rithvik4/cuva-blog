import { Check } from "lucide-react"

const benefits = [
  "Eliminates siloed financial data",
  "Reduces manual lookup and verification",
  "Enhances agent decision-making",
  "Improves compliance through traceable sources",
]

export function KnowledgeDeepFeature() {
  return (
    <section className="bg-[#F4F4F7] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Statement */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0D1A] leading-tight">
              Always up to date.
              <br />
              Always compliant.
              <br />
              Always contextual.
            </h2>
            <p className="mt-6 text-lg text-[#3D3D4E] leading-relaxed">
              Knowledge Systems continuously refine themselves as agents interact with enterprise data.
            </p>
          </div>

          {/* Right: Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-neutral-200">
            <h3 className="text-lg font-bold text-[#0F0D1A] mb-6">Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E5FAFE] flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-[#593BEE]" />
                  </div>
                  <span className="text-base text-[#3D3D4E]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
