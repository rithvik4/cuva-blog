import { ShieldCheck, Database, FileSearch } from "lucide-react"

const badges = [
  {
    icon: ShieldCheck,
    title: "Role-Based Filtering",
  },
  {
    icon: Database,
    title: "Source-Aware Indexing",
  },
  {
    icon: FileSearch,
    title: "Fully Audit-Ready Retrieval",
  },
]

export function SearchProofBlock() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-12">
          Enterprise-Grade Governance
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-4 bg-white px-8 py-4 rounded-xl border border-gray-200">
              <badge.icon className="w-8 h-8 text-[#593BEE]" />
              <span className="font-semibold text-[#0F0D1A]">{badge.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
