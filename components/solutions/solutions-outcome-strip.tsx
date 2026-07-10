import { Clock, Users, MessageSquare, DollarSign, ShieldCheck, TrendingUp } from "lucide-react"

const outcomes = [
  {
    metric: "3x",
    label: "faster onboarding",
    description: "Reduce onboarding cycles from weeks to days",
    icon: Clock,
  },
  {
    metric: "40%",
    label: "advisor workload reduction",
    description: "Automate repetitive tasks and manual follow-ups",
    icon: Users,
  },
  {
    metric: "2.5x",
    label: "more client engagement",
    description: "Deliver timely, personalized interactions at scale",
    icon: MessageSquare,
  },
  {
    metric: "35%",
    label: "operational savings",
    description: "Lower costs through end-to-end automation",
    icon: DollarSign,
  },
  {
    metric: "50%",
    label: "faster compliance",
    description: "Accelerate checks with built-in governance",
    icon: ShieldCheck,
  },
  {
    metric: "40%",
    label: "conversion boost",
    description: "Turn more prospects into active customers",
    icon: TrendingUp,
  },
]

export function SolutionsOutcomeStrip() {
  return (
    <section className="py-16 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F0D1A] text-center mb-12">
          Measured business outcomes across financial teams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-[#E5FAFE] rounded-full flex items-center justify-center">
                <outcome.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{outcome.metric}</div>
              <div className="text-base font-semibold text-[#0F0D1A] mb-2">{outcome.label}</div>
              <div className="text-sm text-[#9090A7]">{outcome.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
