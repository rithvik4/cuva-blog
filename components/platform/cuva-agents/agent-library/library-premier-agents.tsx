import { Briefcase, Link2, Calculator, CreditCard } from "lucide-react"

const premierAgents = [
  {
    icon: Briefcase,
    title: "Wealth Management Agent",
    description: "Purpose-built for onboarding, planning, reporting, compliance, and client engagement workflows.",
  },
  {
    icon: Link2,
    title: "Supply Chain Finance Agent",
    description:
      "Optimizes SCF operations with automated onboarding, data extraction, validation, compliance, and transaction workflows.",
  },
  {
    icon: Calculator,
    title: "Accounting and Payments Agent",
    description:
      "Handles reconciliation, invoicing, payables, payouts, payroll, and financial operations with full audit trails.",
  },
  {
    icon: CreditCard,
    title: "Payments Agent",
    description:
      "Automates vendor, employee, treasury, and cross-border payments with integrated reconciliation and compliance.",
  },
]

export function LibraryPremierAgents() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Premier Agents</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {premierAgents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E5E5] hover:border-[#593BEE]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-4">
                <agent.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">{agent.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
