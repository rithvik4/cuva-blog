import { Check } from "lucide-react"

const benefits = [
  "Strong data privacy enforcement",
  "Enterprise security architecture",
  "Full traceability via immutable audit logs",
  "Compliance adherence for regulated institutions",
]

export function PrivacyDeepFeature() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
              Built for the financial industry's strictest standards
            </h2>
            <p className="text-lg text-[#3D3D4E] mb-8">
              Cuva provides complete visibility, traceability, and protection across your AI ecosystem.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E5FAFE] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#593BEE]" />
                  </div>
                  <span className="text-[#3D3D4E]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#593BEE]/5 rounded-2xl blur-2xl" />
            <div className="relative bg-[#F4F4F7] rounded-2xl p-8">
              <img
                src="/security-compliance-dashboard-with-audit-logs-and-.jpg"
                alt="Security and compliance dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
