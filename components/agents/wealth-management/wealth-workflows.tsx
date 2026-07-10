import { UserPlus, LineChart, Briefcase, FileText, ShieldAlert } from "lucide-react"

const workflows = [
  {
    icon: UserPlus,
    title: "Client Onboarding & KYC",
    description:
      "Automates client intake, documentation collection, regulatory checks, and initial engagement workflows.",
  },
  {
    icon: LineChart,
    title: "Financial Planning & Advisory Support",
    description: "Supports goal setting, scenario analysis, cash flow planning, and ongoing advisory interactions.",
  },
  {
    icon: Briefcase,
    title: "Investment & Portfolio Support",
    description:
      "Assists with investment idea surfacing, portfolio rebalancing support, liquidity planning, and buy-sell decision context.",
  },
  {
    icon: FileText,
    title: "Client Reporting & Communication",
    description:
      "Generates consistent reports, answers client queries on demand, and improves transparency across portfolios and performance.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance & Risk Monitoring",
    description:
      "Monitors risk profiles, detects policy breaches, maintains audit trails, and supports AML and suitability workflows.",
  },
]

export function WealthWorkflows() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Core Workflow Areas</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Pre-built workflows covering the full wealth management lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {workflows.map((workflow, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${
                index >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 bg-[#E5FAFE] rounded-xl flex items-center justify-center mb-4">
                <workflow.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0F0D1A] mb-2">{workflow.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed">{workflow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
