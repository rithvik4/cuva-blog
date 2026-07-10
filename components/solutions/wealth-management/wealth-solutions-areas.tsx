import { UserPlus, LineChart, Briefcase, FileText, ShieldAlert } from "lucide-react"

const solutionAreas = [
  {
    icon: UserPlus,
    title: "Client Onboarding & KYC",
    description:
      "Streamline client intake, document collection, verification, and regulatory checks with automated, end-to-end workflows.",
  },
  {
    icon: LineChart,
    title: "Financial Planning & Advisory Support",
    description:
      "Support advisors with real-time insights, scenario analysis, and contextual information during planning and review cycles.",
  },
  {
    icon: Briefcase,
    title: "Investment & Portfolio Operations",
    description:
      "Assist with portfolio analysis, rebalancing support, liquidity planning, and investment-related workflows.",
  },
  {
    icon: FileText,
    title: "Client Reporting & Communication",
    description: "Generate consistent reports and respond to client queries accurately and on demand.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance & Risk Monitoring",
    description: "Continuously monitor risk profiles, suitability, and regulatory requirements with full traceability.",
  },
]

export function WealthSolutionsAreas() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F0D1A] mb-4 font-serif">
          Core Solution Areas
        </h2>
        <p className="text-center text-[#3D3D4E] mb-12 max-w-2xl mx-auto">
          Comprehensive AI solutions across wealth management operations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionAreas.map((area, index) => (
            <div
              key={index}
              className="bg-[#F4F4F7] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-4">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-[#0F0D1A] mb-2">{area.title}</h3>
              <p className="text-sm text-[#3D3D4E] leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
