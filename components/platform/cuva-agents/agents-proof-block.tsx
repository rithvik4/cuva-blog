import { FileCheck, UserCheck, Eye } from "lucide-react"

const proofs = [
  {
    icon: FileCheck,
    label: "Full Audit Trails",
  },
  {
    icon: UserCheck,
    label: "Role-Based Access",
  },
  {
    icon: Eye,
    label: "Transparent Agent Actions",
  },
]

export function AgentsProofBlock() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F0D1A] text-center mb-12">
          Built for regulated enterprises
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {proofs.map((proof, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-sm">
                <proof.icon className="w-8 h-8 text-[#593BEE]" />
              </div>
              <span className="text-[#3D3D4E] font-medium">{proof.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
