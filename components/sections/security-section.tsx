import { ShieldCheck, Award, Globe, FileCheck } from "lucide-react"

const badges = [
  { icon: ShieldCheck, label: "SOC2 Type II" },
  { icon: Award, label: "ISO-aligned" },
  { icon: Globe, label: "GDPR-ready" },
  { icon: FileCheck, label: "Audit Trail & Governance" },
]

export function SecuritySection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0F0D1A] sm:text-4xl">
            Privacy, Security & Compliance
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl p-6 border border-border/50 shadow-sm"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E8E4FD] mb-4">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="font-medium text-[#0F0D1A]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
