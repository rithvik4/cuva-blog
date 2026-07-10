import { Lock, Shield, FileCheck } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Privacy Controls",
    description:
      "Granular data permissions, redaction, field-level restrictions, and privacy-safe knowledge ingestion.",
  },
  {
    icon: Shield,
    title: "Security Foundation",
    description:
      "Encryption, identity & access management, connector security, RBAC inheritance, and secure authentication.",
  },
  {
    icon: FileCheck,
    title: "Compliance Alignment",
    description:
      "SOC 2 Type II controls, ISO-aligned security practices, GDPR-ready data handling, audit trails, and model/agent activity logging for regulated environments.",
  },
]

export function PrivacyFeatureTrio() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Multi-Layered Protection</h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Comprehensive privacy, security, and compliance controls built into every layer of the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{feature.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
