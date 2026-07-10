import { Rocket, Shield, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Rocket,
    title: "Deploy",
    description: "Choose the deployment model that fits your enterprise environment and operational requirements.",
  },
  {
    number: "2",
    icon: Shield,
    title: "Govern",
    description: "Apply monitoring, logging, and governance controls across agents, workflows, and data flows.",
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Scale",
    description:
      "Run mission-critical AI operations at scale with high reliability, performance, and operational visibility.",
  },
]

export function EnterpriseHowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enterprise AI Operating Model
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
