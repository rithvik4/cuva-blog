import { Database, Bot, Link2, Shield } from "lucide-react"
import Link from "next/link"

const entryPoints = [
  {
    icon: Database,
    need: "Need trusted context",
    action: "Start with Knowledge Systems",
    href: "/platform/knowledge-systems",
  },
  {
    icon: Bot,
    need: "Need automation",
    action: "Start with Agentic Automation",
    href: "/platform/cuva-agents",
  },
  {
    icon: Link2,
    need: "Need integration",
    action: "Start with Connectors",
    href: "/platform/connectors",
  },
  {
    icon: Shield,
    need: "Need control and visibility",
    action: "Start with the Operating Fabric",
    href: "/platform/operating-fabric",
  },
]

export function PlatformWhereTeamsStart() {
  return (
    <section className="py-20 bg-[#F7F8F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Where Teams Start</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Different teams begin their journey from different needs. Cuva is designed to meet them where they are.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {entryPoints.map((item) => (
              <Link
                key={item.need}
                href={item.href}
                className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.need}</p>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {item.action}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
