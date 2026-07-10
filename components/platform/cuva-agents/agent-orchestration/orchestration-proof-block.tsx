import { History, Activity, FileCheck } from "lucide-react"

const badges = [
  { icon: History, label: "Full Execution History" },
  { icon: Activity, label: "Real-Time Monitoring" },
  { icon: FileCheck, label: "Audit-Ready Logs" },
]

export function OrchestrationProofBlock() {
  return (
    <section className="py-16 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl font-bold text-[#0F0D1A]">Enterprise-Grade Governance</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm">
              <badge.icon className="w-6 h-6 text-[#593BEE]" />
              <span className="font-medium text-[#0F0D1A]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
