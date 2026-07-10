import { KeyRound, Users, Lock } from "lucide-react"

const badges = [
  {
    icon: KeyRound,
    label: "Secure authentication",
  },
  {
    icon: Users,
    label: "Permission inheritance",
  },
  {
    icon: Lock,
    label: "Encrypted communication and data flows",
  },
]

export function FinancialConnectorsProofBlock() {
  return (
    <section className="py-16 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
            Financial-grade security and reliability
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full">
              <badge.icon className="w-5 h-5 text-[#80E9FF]" />
              <span className="text-white font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
