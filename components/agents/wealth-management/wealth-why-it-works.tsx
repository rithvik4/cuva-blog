import { Check } from "lucide-react"

const reasons = [
  "Domain-aware workflows designed for wealth management",
  "Knowledge-backed reasoning for financial decisions",
  "Operational controls for regulated environments",
  "Seamless integration with existing systems",
  "Audit trails and governance built-in",
]

export function WealthWhyItWorks() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Why This Agent Works</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The Wealth Management Agent is built on an enterprise AI platform designed for financial complexity. It
              combines domain-aware workflows, knowledge-backed reasoning, and operational controls to deliver reliable
              automation in regulated environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
