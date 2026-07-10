import { Link2, Workflow, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Link2,
    title: "Purpose-Built for SCF",
    description: "Purpose-built for supply chain finance workflows",
  },
  {
    icon: Workflow,
    title: "End-to-End Automation",
    description: "Automates onboarding, invoice, financing, and payment flows",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Governance",
    description: "Enterprise-grade governance, auditability, and compliance",
  },
]

export function SCFValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
