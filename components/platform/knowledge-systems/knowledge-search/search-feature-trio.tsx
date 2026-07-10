import { GitBranch, Database, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: GitBranch,
    title: "Relationship-Aware Search",
    description:
      "Uses entity relationships and structured links to surface relevant records across clients, accounts, portfolios, and documents.",
  },
  {
    icon: Database,
    title: "Cross-System Indexing",
    description:
      "Indexes and retrieves information from multiple enterprise systems while preserving structure, metadata, and source context.",
  },
  {
    icon: ShieldCheck,
    title: "Policy-Enforced Retrieval",
    description:
      "Applies enterprise access rules and data policies at retrieval time to ensure compliant, role-appropriate results.",
  },
]

export function SearchFeatureTrio() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Search Capabilities</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Key mechanisms that enable accurate and compliant enterprise search.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{feature.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
