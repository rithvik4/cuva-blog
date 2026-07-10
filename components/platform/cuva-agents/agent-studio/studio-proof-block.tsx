import { GitBranch, Activity, FileText } from "lucide-react"

const badges = [
  {
    icon: GitBranch,
    label: "Full Versioning",
  },
  {
    icon: Activity,
    label: "Activity Monitoring",
  },
  {
    icon: FileText,
    label: "Audit-Ready Workflow History",
  },
]

export function StudioProofBlock() {
  return (
    <section className="py-16 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h3 className="font-heading text-xl font-bold text-[#0F0D1A] text-center mb-8">Enterprise-Grade Governance</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg border border-gray-200">
              <badge.icon className="w-6 h-6 text-[#593BEE]" />
              <span className="text-[#0F0D1A] font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
