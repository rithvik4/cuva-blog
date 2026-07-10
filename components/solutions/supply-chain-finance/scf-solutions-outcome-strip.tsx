import { Users, TrendingDown, MessageSquare, DollarSign, ShieldCheck, Zap } from "lucide-react"

const outcomes = [
  {
    icon: Zap,
    metric: "2x faster",
    label: "supplier onboarding",
    description: "Shorten onboarding cycles with automated intake",
  },
  {
    icon: TrendingDown,
    metric: "40%",
    label: "lower operational workload",
    description: "Reduce manual processing across SCF flows",
  },
  {
    icon: MessageSquare,
    metric: "2.5x higher",
    label: "client engagement",
    description: "Improve interaction across buyers and suppliers",
  },
  {
    icon: DollarSign,
    metric: "40%",
    label: "operational savings",
    description: "Lower costs through end-to-end automation",
  },
  {
    icon: ShieldCheck,
    metric: "50% faster",
    label: "compliance",
    description: "Accelerate checks with governance built in",
  },
  {
    icon: Users,
    metric: "Improved",
    label: "financing velocity",
    description: "Release funding faster with fewer bottlenecks",
  },
]

export function SCFSolutionsOutcomeStrip() {
  return (
    <section className="py-16 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-[#0F0D1A] mb-12">
          Measured Outcomes Across Supply Chain Finance Operations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#E5FAFE] flex items-center justify-center mb-4">
                  <outcome.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{outcome.metric}</div>
                <div className="text-base font-semibold text-[#0F0D1A] mb-2">{outcome.label}</div>
                <p className="text-sm text-[#3D3D4E]">{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
