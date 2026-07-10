import { Workflow, Eye, Shield } from "lucide-react"

const transformations = [
  {
    icon: Workflow,
    title: "Automate Multi-Party Workflows",
    description:
      "Supplier onboarding, invoice verification, financing, and settlement workflows are automated across participants and systems.",
  },
  {
    icon: Eye,
    title: "Increase Transparency and Control",
    description:
      "Real-time visibility into invoices, financing status, and risk improves decision-making for all parties.",
  },
  {
    icon: Shield,
    title: "Operate with Built-In Governance",
    description: "All workflows run with auditability, permissions, and compliance controls enforced by default.",
  },
]

export function SCFSolutionsTransformation() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-[#0F0D1A] mb-12">
          How Cuva Transforms SCF Operations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[#E5FAFE] flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{item.title}</h3>
              <p className="text-[#3D3D4E]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
