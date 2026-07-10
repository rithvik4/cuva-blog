import { CheckCircle2 } from "lucide-react"

const benefits = [
  "SOC & ISO-aligned controls",
  "Continuous monitoring & audit logs",
  "Secure connector and data flows",
  "Flexible deployment for enterprise IT",
]

export function EnterpriseDeepFeature() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column - Statement */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
              Built to support mission-critical financial operations
            </h2>
            <p className="text-lg text-[#3D3D4E] leading-relaxed">
              Cuva's enterprise architecture ensures resilience, transparency, and compliance for regulated
              institutions.
            </p>
          </div>

          {/* Right column - Benefits */}
          <div className="bg-[#F4F4F7] rounded-xl p-8">
            <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#593BEE] flex-shrink-0 mt-0.5" />
                  <span className="text-[#3D3D4E] text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
