import { ArrowRight, Database, Settings, Wrench, GitBranch } from "lucide-react"
import Link from "next/link"

const components = [
  {
    icon: Database,
    title: "Knowledge Systems",
    description: "supply trusted enterprise context",
    href: "/platform/knowledge-systems",
  },
  {
    icon: Settings,
    title: "Operating Fabric",
    description: "enforces execution control and governance",
    href: "/platform/operating-fabric",
  },
  {
    icon: Wrench,
    title: "Agent Studio",
    description: "enables agent design and configuration",
    href: "/platform/cuva-agents/agent-studio",
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Workflows",
    description: "coordinate agents at runtime",
    href: "/platform/cuva-agents/multi-agent-workflows",
  },
]

export function AgentsRelationship() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Relationship to Other Components
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Agentic Automation is a core layer of the Cuva platform:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <Link
                key={index}
                href={component.href}
                className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#593BEE]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#593BEE]/20 flex items-center justify-center flex-shrink-0">
                  <component.icon className="w-6 h-6 text-[#80E9FF]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-white mb-1">{component.title}</h3>
                  <p className="text-gray-400 text-sm">{component.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#593BEE] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
