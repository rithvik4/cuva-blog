import { Link2, Database, Bot, Shield } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect",
    description: "Connect systems to unify data and actions across the enterprise",
  },
  {
    number: "02",
    icon: Database,
    title: "Build Knowledge",
    description: "Build knowledge systems to create trusted, structured enterprise context",
  },
  {
    number: "03",
    icon: Bot,
    title: "Build Agents",
    description: "Build agents and workflows to automate reasoning and execution",
  },
  {
    number: "04",
    icon: Shield,
    title: "Govern",
    description: "Manage and govern execution through the operating fabric",
  },
]

export function PlatformHowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">How the Platform Works</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Cuva follows a simple, production-ready flow for building and running AI-powered financial operations.
          </p>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
                )}

                <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-primary">{step.number}</span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-center mt-10">
            This flow allows enterprises to move from fragmented operations to controlled, AI-native execution.
          </p>
        </div>
      </div>
    </section>
  )
}
