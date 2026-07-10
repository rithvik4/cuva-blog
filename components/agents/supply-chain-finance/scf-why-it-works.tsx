import { Check } from "lucide-react"

const benefits = [
  "Agentic orchestration for multi-party workflows",
  "Knowledge-driven decisioning across buyer-supplier-lender ecosystems",
  "Governed execution with full audit trails",
  "Reliable automation for complex SCF programs",
]

export function SCFWhyItWorks() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Why This Agent Works
          </h2>
          <p className="text-lg text-gray-300 text-center mb-10">
            The Supply Chain Finance Agent is built on an enterprise AI platform designed for complex, multi-party
            financial workflows.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#593BEE] flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
