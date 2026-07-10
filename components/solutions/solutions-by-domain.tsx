import { Button } from "@/components/ui/button"
import { Briefcase, GitMerge, Link2, Building2 } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Briefcase,
    title: "Wealth Management",
    description:
      "Improve advisor productivity, client engagement, and compliance across onboarding, planning, reporting, and advisory workflows.",
    outcomes: "Faster onboarding, higher client engagement, reduced advisor workload.",
    href: "/solutions/wealth-management",
    cta: "Explore Wealth Management Solution",
  },
  {
    icon: GitMerge,
    title: "Mergers & Acquisitions",
    description:
      "Accelerate diligence, improve decision quality, and reduce manual effort across deal sourcing, analysis, and integration workflows.",
    outcomes: "Faster diligence cycles, better risk visibility, improved deal execution.",
    href: "/solutions/mergers-acquisitions",
    cta: "Explore M&A Solution",
  },
  {
    icon: Link2,
    title: "Supply Chain Finance",
    description:
      "Automate supplier onboarding, invoice validation, financing, payments, and compliance across multi-party SCF programs.",
    outcomes: "Faster supplier onboarding, lower operational cost, improved financing velocity.",
    href: "/solutions/supply-chain-finance",
    cta: "Explore SCF Solution",
  },
  {
    icon: Building2,
    title: "Banking",
    description:
      "Streamline onboarding, operations, compliance, and customer engagement across retail, corporate, and institutional banking.",
    outcomes: "Reduced processing time, improved compliance coverage, better customer experience.",
    href: "/solutions/banking",
    cta: "Explore Banking Solution",
  },
]

export function SolutionsByDomain() {
  return (
    <section id="solutions" className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-4">
          Solutions by Domain
        </h2>
        <p className="text-[#3D3D4E] text-center mb-12 max-w-2xl mx-auto">
          Purpose-built solutions for regulated financial environments
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#E5FAFE] rounded-xl flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#0F0D1A] mb-3">{solution.title}</h3>
              <p className="text-[#3D3D4E] mb-4">{solution.description}</p>
              <p className="text-sm text-primary font-semibold mb-6">Outcomes: {solution.outcomes}</p>

              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href={solution.href}>{solution.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
