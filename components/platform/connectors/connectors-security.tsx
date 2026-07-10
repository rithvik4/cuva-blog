import { KeyRound, Users, ShieldCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: KeyRound,
    title: "OAuth & Token Auth",
    description: "Industry-standard authentication protocols for secure system access.",
  },
  {
    icon: Users,
    title: "Role & Permission Inheritance",
    description: "Automatically inherit and enforce organizational access controls.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted Communication",
    description: "End-to-end encryption for all data in transit and at rest.",
  },
]

export function ConnectorsSecurity() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Built for Enterprise Security</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#593BEE]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#593BEE]/20 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#80E9FF]" />
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
