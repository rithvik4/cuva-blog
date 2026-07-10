import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Briefcase, TrendingUp, FileSearch } from "lucide-react"

const agents = [
  {
    icon: Briefcase,
    title: "Wealth Management Agent",
    description:
      "Automates onboarding, planning, reporting, investment support, and compliance workflows for wealth management teams.",
    href: "/agents/wealth-management",
    cta: "Explore Agent",
  },
  {
    icon: TrendingUp,
    title: "Supply Chain Finance Agent",
    description:
      "Orchestrates supplier onboarding, invoice validation, financing workflows, payments, and compliance across SCF programs.",
    href: "/agents/supply-chain-finance",
    cta: "Explore Agent",
  },
  {
    icon: FileSearch,
    title: "Mergers & Acquisitions Agent",
    description:
      "Supports end-to-end M&A workflows including deal sourcing, diligence, document analysis, meeting intelligence, risk assessment, and post-merger integration planning.",
    href: "/agents/mergers-acquisitions",
    cta: "Explore Agent",
  },
]

export function AgentsCatalogAgents() {
  return (
    <section id="agents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-12">
          Available Agents
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="flex flex-col p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#593BEE]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#593BEE] flex items-center justify-center mb-6">
                <agent.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{agent.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed mb-6 flex-grow">{agent.description}</p>
              <Button
                variant="outline"
                className="border-[#593BEE] text-[#593BEE] hover:bg-[#593BEE]/5 w-full bg-transparent"
                asChild
              >
                <Link href={agent.href}>
                  {agent.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
