import { Zap, Users, ShieldCheck, TrendingUp } from "lucide-react"

const outcomes = [
  {
    icon: Zap,
    text: "Faster onboarding and operational workflows",
  },
  {
    icon: Users,
    text: "Consistent decision-making across teams",
  },
  {
    icon: ShieldCheck,
    text: "Reduced operational and compliance risk",
  },
  {
    icon: TrendingUp,
    text: "Scalable automation without loss of control",
  },
]

export function PlatformWhatEnables() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">What the Platform Enables</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            By unifying intelligence, execution, and control, Cuva enables outcomes that are difficult to achieve with
            fragmented tools.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-200"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-900">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
