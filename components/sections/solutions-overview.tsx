import { ArrowRight, TrendingUp, Package } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: TrendingUp,
    title: "Wealth Management",
    description: "Client onboarding, planning, and reporting automation",
    href: "/solutions/wealth-management",
  },
  {
    icon: Package,
    title: "Supply Chain Finance",
    description: "Supplier onboarding and invoice validation",
    href: "/solutions/supply-chain-finance",
  },
]

export function SolutionsOverview() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8F7FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Built for{" "}
            <span className="text-[#593BEE]">Financial Use Cases</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="group bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-lg hover:border-[#593BEE]/20 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F5F3FF] mb-5 group-hover:bg-[#EBE8FF] transition-colors">
                <solution.icon className="h-6 w-6 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#0F0D1A] mb-2">{solution.title}</h3>
              <p className="text-sm text-[#3D3D4E] mb-4">{solution.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#593BEE] font-medium group-hover:gap-2 transition-all">
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
