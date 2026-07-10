import { UserCheck, Lock, FileText } from "lucide-react"

const badges = [
  {
    icon: UserCheck,
    label: "Identity & Access Management",
  },
  {
    icon: Lock,
    label: "Full Encryption (In Transit & At Rest)",
  },
  {
    icon: FileText,
    label: "Activity Logs & Change Tracking",
  },
]

export function EnterpriseProofBlock() {
  return (
    <section className="py-16 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F0D1A] mb-2">Compliance & Reliability</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg border border-gray-200">
              <badge.icon className="w-6 h-6 text-[#593BEE]" />
              <span className="font-medium text-[#0F0D1A]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
