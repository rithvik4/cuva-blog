import { TrendingUp, Truck, CreditCard, Landmark, ArrowRight } from "lucide-react"
import Link from "next/link"

const workflows = [
  {
    icon: TrendingUp,
    title: "Wealth Management Workflows",
    bullets: [
      "Portfolio onboarding and data aggregation",
      "Risk, compliance, and suitability checks",
      "Reporting, IPS validation, and financial planning workflows",
    ],
    href: "/solutions/wealth-management",
  },
  {
    icon: Truck,
    title: "Supply Chain Finance Workflows",
    bullets: [
      "Supplier onboarding and verification",
      "Invoice validation and risk checks",
      "Payment, settlement, and financing workflows",
    ],
    href: "/solutions/supply-chain-finance",
  },
  {
    icon: CreditCard,
    title: "Payments & Treasury Workflows",
    bullets: ["Vendor payouts and disbursements", "Cross-border payments", "Treasury movements and reconciliation"],
    href: "/solutions/payments-treasury",
  },
  {
    icon: Landmark,
    title: "Banking Workflows",
    bullets: [
      "Account onboarding and verification",
      "Balance and transaction sync",
      "Automated compliance and operational workflows",
    ],
    href: "/solutions/banking",
  },
]

export function FinancialConnectorsWorkflows() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Workflows Powered by Financial Connectors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((workflow, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-[#E5E5E5] hover:shadow-md hover:border-[#593BEE]/30 transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-4">
                <workflow.icon className="w-6 h-6 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#0F0D1A] mb-4">{workflow.title}</h3>
              <ul className="space-y-2 mb-6 flex-grow">
                {workflow.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm text-[#3D3D4E] flex items-start gap-2">
                    <span className="text-[#593BEE] mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href={workflow.href}
                className="text-[#593BEE] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
