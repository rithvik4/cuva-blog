import { Shield, Users, Server, FileCheck } from "lucide-react"

const trustItems = [
  {
    icon: FileCheck,
    label: "Full audit trails",
  },
  {
    icon: Users,
    label: "Role-based permissioning",
  },
  {
    icon: Server,
    label: "Enterprise-grade reliability",
  },
]

export function KnowledgeProofBlock() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-[#593BEE]" />
            <h2 className="text-3xl font-bold text-[#0F0D1A]">Built for financial institutions</h2>
          </div>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Designed for regulated industries where accuracy, context, and traceability are non-negotiable.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#F4F4F7] border border-neutral-200"
            >
              <item.icon className="h-6 w-6 text-[#593BEE]" />
              <span className="text-base font-medium text-[#0F0D1A]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
