import { ArrowRight, Layers, Brain, Shield } from "lucide-react"

const problems = [
  {
    icon: Layers,
    problem: "Fragmented Operations",
    description: "Manual handoffs, disconnected systems, and duplicated effort slow execution.",
    change: "End-to-end workflows run automatically across systems.",
    outcome: "Faster execution, lower operational burden.",
  },
  {
    icon: Brain,
    problem: "Limited Context and Accuracy",
    description: "Decisions are made with incomplete or outdated information.",
    change: "Actions are grounded in governed enterprise knowledge.",
    outcome: "Higher accuracy, explainable decisions, reduced risk.",
  },
  {
    icon: Shield,
    problem: "Governance as an Afterthought",
    description: "AI tools struggle to operate safely in regulated environments.",
    change: "Governance, auditability, and control are built in from day one.",
    outcome: "AI that can be deployed confidently in production.",
  },
]

export function SolutionsProblemOutcome() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#E5FAFE] rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{item.problem}</h3>
              <p className="text-[#9090A7] text-sm mb-6">{item.description}</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      What changes with Cuva
                    </span>
                    <p className="text-sm text-[#3D3D4E] mt-1">{item.change}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-[#0F0D1A] uppercase tracking-wide">
                      Business outcome
                    </span>
                    <p className="text-sm text-[#3D3D4E] mt-1">{item.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
