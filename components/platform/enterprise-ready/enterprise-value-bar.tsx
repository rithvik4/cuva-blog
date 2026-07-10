import { Layers, Server, Settings } from "lucide-react"

const foundations = [
  {
    icon: Layers,
    title: "Architecture",
    description:
      "Cuva is built on a modular, resilient architecture designed to support long-running, mission-critical workloads across large organizations. The platform scales reliably as usage, data, and workflows grow.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Deploy Cuva in cloud, hybrid, or VPC environments while maintaining clear infrastructure boundaries and enterprise IT ownership. Designed to integrate cleanly into existing enterprise technology stacks.",
  },
  {
    icon: Settings,
    title: "Operations",
    description:
      "Support reliable day-to-day operations for agents, workflows, and knowledge systems through built-in monitoring, auditability, and operational controls designed for enterprise environments.",
  },
]

export function EnterpriseValueBar() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Enterprise Foundations</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three core foundations enable Cuva to operate reliably at scale, supporting AI agents, workflows, and
            knowledge systems across complex enterprise and financial environments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foundations.map((foundation, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-background rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <foundation.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{foundation.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{foundation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
