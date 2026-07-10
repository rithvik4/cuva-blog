import { KeyRound, Users, ShieldCheck } from "lucide-react"

const proofs = [
  {
    icon: KeyRound,
    label: "OAuth & Token Auth",
  },
  {
    icon: Users,
    label: "Role & Permission Inheritance",
  },
  {
    icon: ShieldCheck,
    label: "Encrypted Communication",
  },
]

export function ConnectorsProofBlock() {
  return (
    <section className="py-16 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="font-heading text-2xl font-bold text-[#0F0D1A]">Built for Enterprise Security</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {proofs.map((proof, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100"
            >
              <proof.icon className="w-6 h-6 text-[#593BEE]" />
              <span className="text-[#3D3D4E] font-medium">{proof.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
