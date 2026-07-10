import { UserPlus, FileCheck, CreditCard, Banknote, ShieldCheck } from "lucide-react"

const areas = [
  {
    icon: UserPlus,
    title: "Supplier Onboarding & Credit Approval",
    description: "Automate supplier intake, verification, risk checks, and approval across buyers and financiers.",
  },
  {
    icon: FileCheck,
    title: "Invoice Verification & Matching",
    description: "Coordinate three-way matching between purchase orders, invoices, and delivery confirmations.",
  },
  {
    icon: CreditCard,
    title: "Financing & Credit Workflows",
    description: "Automate eligibility checks, credit decisions, and funding workflows using real-time data.",
  },
  {
    icon: Banknote,
    title: "Payments, Settlement & Reconciliation",
    description: "Streamline payment execution, settlement tracking, and reconciliation across systems.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Monitoring",
    description: "Continuously enforce KYC, AML, policy checks, and audit trail generation.",
  },
]

export function SCFSolutionsAreas() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-[#0F0D1A] mb-4">
          Core Solution Areas
        </h2>
        <p className="text-center text-[#3D3D4E] mb-12 max-w-2xl mx-auto">
          End-to-end automation across the supply chain finance lifecycle
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.slice(0, 3).map((area, index) => (
            <div
              key={index}
              className="bg-[#F4F4F7] rounded-xl p-6 border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-4">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">{area.title}</h3>
              <p className="text-sm text-[#3D3D4E]">{area.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {areas.slice(3).map((area, index) => (
            <div
              key={index}
              className="bg-[#F4F4F7] rounded-xl p-6 border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-4">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">{area.title}</h3>
              <p className="text-sm text-[#3D3D4E]">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
