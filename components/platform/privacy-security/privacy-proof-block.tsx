import { ShieldCheck, Globe, Users, Lock, FileText } from "lucide-react"

const proofs = [
  { icon: ShieldCheck, label: "SOC 2 Type II & ISO-Aligned" },
  { icon: Globe, label: "GDPR-Ready Data Handling" },
  { icon: Users, label: "Identity & Access Controls" },
  { icon: Lock, label: "Encryption at Rest & In Transit" },
  { icon: FileText, label: "Activity & Change Logging" },
]

export function PrivacyProofBlock() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Enterprise-Class Protections
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Industry-leading security and compliance certifications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {proofs.map((proof, index) => (
            <div key={index} className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-xl border border-white/10">
              <proof.icon className="w-6 h-6 text-[#80E9FF]" />
              <span className="text-white font-medium">{proof.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
