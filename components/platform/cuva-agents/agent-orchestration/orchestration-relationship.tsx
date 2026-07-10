import Link from "next/link"
import { ArrowRight, Palette, Brain, Settings, Plug } from "lucide-react"

const components = [
  {
    icon: Palette,
    title: "Agent Studio",
    description: "Design and configure multi-agent workflows.",
    href: "/platform/cuva-agents/agent-studio",
  },
  {
    icon: Brain,
    title: "Knowledge Systems",
    description: "Provide context and intelligence to agents.",
    href: "/platform/knowledge-systems",
  },
  {
    icon: Settings,
    title: "Operating Fabric",
    description: "Provides coordination, state management, and control.",
    href: "/platform/operating-fabric",
  },
  {
    icon: Plug,
    title: "Connectors",
    description: "Enable workflows to operate across enterprise systems.",
    href: "/platform/connectors",
  },
]

export function OrchestrationRelationship() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Relationship to Other Components
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Multi-Agent Workflows integrates with key platform components.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {components.map((component, index) => (
            <div key={index} className="bg-[#F4F4F7] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#E5FAFE] rounded-xl flex items-center justify-center mb-4">
                <component.icon className="w-6 h-6 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">{component.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed mb-4">{component.description}</p>
              <Link
                href={component.href}
                className="inline-flex items-center gap-1 text-[#593BEE] font-medium text-sm hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
