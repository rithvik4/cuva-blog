import { TrendingUp, Clock, Users, MessageSquare, ShieldCheck, DollarSign } from "lucide-react"

const metrics = [
  {
    icon: Clock,
    value: "3x",
    label: "Faster client onboarding",
    description: "Through automated intake and setup workflows",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Reduction in advisor workload",
    description: "By automating routine queries and reporting",
  },
  {
    icon: Users,
    value: "40%",
    label: "Increase in lead-to-client conversion",
    description: "With timely, personalized engagement",
  },
  {
    icon: MessageSquare,
    value: "2.5x",
    label: "Increase in client engagement",
    description: "Through continuous, AI-driven interactions",
  },
  {
    icon: ShieldCheck,
    value: "50%",
    label: "Faster compliance processing",
    description: "With real-time checks and alerts",
  },
  {
    icon: DollarSign,
    value: "45%",
    label: "Reduction in operational costs",
    description: "Achieved through end-to-end task automation",
  },
]

export function WealthImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Business Impact</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Measured outcomes from wealth management deployments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#F4F4F7] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#E5FAFE] rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
              <h3 className="font-serif font-bold text-lg text-[#0F0D1A] mb-2">{metric.label}</h3>
              <p className="text-sm text-[#3D3D4E]">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
