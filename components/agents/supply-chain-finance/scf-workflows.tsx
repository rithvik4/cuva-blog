import { UserCheck, FileCheck, CreditCard, Banknote, ShieldAlert } from "lucide-react"

const workflows = [
  {
    icon: UserCheck,
    title: "Supplier Onboarding & Credit Approval",
    description:
      "Automates supplier intake, verification, risk assessment, and approval workflows across buyers, lenders, and compliance systems.",
  },
  {
    icon: FileCheck,
    title: "Invoice Verification & Matching",
    description:
      "Orchestrates invoice validation workflows including three-way matching between purchase orders, invoices, and delivery confirmations.",
  },
  {
    icon: CreditCard,
    title: "Financing & Credit Workflows",
    description:
      "Coordinates credit decisions, financing eligibility checks, and funding workflows based on real-time transaction and risk data.",
  },
  {
    icon: Banknote,
    title: "Payments, Settlement & Reconciliation",
    description:
      "Automates payment scheduling, execution, settlement tracking, and reconciliation across payment and treasury systems.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance & Risk Controls",
    description:
      "Runs continuous KYC, AML, policy checks, audit trail generation, and exception monitoring across SCF operations.",
  },
]

export function SCFWorkflows() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Core Workflow Areas</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            End-to-end automation across the supply chain finance lifecycle
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-4">
                <workflow.icon className="w-6 h-6 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">{workflow.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed">{workflow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
