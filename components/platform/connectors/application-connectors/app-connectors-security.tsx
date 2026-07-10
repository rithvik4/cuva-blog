import { KeyRound, Users, Lock } from "lucide-react"

const securityFeatures = [
  {
    icon: KeyRound,
    title: "OAuth & Token-Based Security",
    description: "Secure authentication using industry-standard OAuth protocols and token-based access control.",
  },
  {
    icon: Users,
    title: "Permission Inheritance",
    description: "Respect existing permission structures from connected applications for consistent access control.",
  },
  {
    icon: Lock,
    title: "Encrypted Communication",
    description: "All data in transit and at rest is encrypted using enterprise-grade encryption standards.",
  },
]

export function AppConnectorsSecurity() {
  return (
    <section className="py-24 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Security & Governance</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade security built into every connection.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-[#593BEE]/20 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-[#80E9FF]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
