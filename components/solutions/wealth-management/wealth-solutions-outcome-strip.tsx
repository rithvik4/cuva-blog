import { Clock, Users, MessageSquare, DollarSign, ShieldCheck, TrendingUp } from "lucide-react"

const outcomes = [
  {
    icon: Clock,
    metric: "3x",
    label: "Faster Onboarding",
    description: "Reduce client onboarding time and friction",
  },
  {
    icon: Users,
    metric: "40%",
    label: "Advisor Workload Reduction",
    description: "Automate repetitive and manual advisor tasks",
  },
  {
    icon: MessageSquare,
    metric: "2.5x",
    label: "More Client Engagement",
    description: "Deliver proactive, personalized interactions",
  },
  {
    icon: DollarSign,
    metric: "35%",
    label: "Operational Savings",
    description: "Lower costs through end-to-end automation",
  },
  {
    icon: ShieldCheck,
    metric: "50%",
    label: "Faster Compliance",
    description: "Accelerate checks with governance built in",
  },
  {
    icon: TrendingUp,
    metric: "40%",
    label: "Conversion Boost",
    description: "Turn more prospects into active clients",
  },
]

export function WealthSolutionsOutcomeStrip() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F0D1A] mb-4 font-serif">
          Measured Outcomes for Wealth Management Teams
        </h2>
        <p className="text-center text-[#3D3D4E] mb-12 max-w-2xl mx-auto">
          Real results from AI-powered wealth management operations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center flex-shrink-0">
                  <outcome.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">{outcome.metric}</div>
                  <div className="text-base font-semibold text-[#0F0D1A] mb-1">{outcome.label}</div>
                  <div className="text-sm text-[#3D3D4E]">{outcome.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
