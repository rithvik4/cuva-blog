import { ArrowRight, TrendingUp, Package } from "lucide-react"
import Link from "next/link"

const agents = [
  {
    icon: TrendingUp,
    title: "Wealth Management Agent",
    description: "Portfolio management, planning, and reporting automation",
    href: "/agents/wealth-management",
  },
  {
    icon: Package,
    title: "Supply Chain Finance Agent",
    description: "Supplier onboarding and invoice intelligence",
    href: "/agents/supply-chain-finance",
  },
]

export function PremierAgents() {
  return (
    <section className="py-20 lg:py-24 bg-[#0F0D1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Cuva's Financial Agents
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {agents.map((agent, index) => (
            <Link
              key={index}
              href={agent.href}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 mb-6">
                <agent.icon className="h-7 w-7 text-[#80E9FF]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">{agent.title}</h3>
              <p className="text-white/70 mb-6">{agent.description}</p>
              <span className="inline-flex items-center gap-2 text-[#80E9FF] font-medium group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
