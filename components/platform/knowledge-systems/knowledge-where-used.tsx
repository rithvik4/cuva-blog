import { MessageSquare, Bot, GitBranch, Settings } from "lucide-react"
import Link from "next/link"

const usedBy = [
  {
    icon: MessageSquare,
    title: "CuvaBot",
    href: "/platform/operating-fabric/cuvabot",
  },
  {
    icon: Bot,
    title: "AI Agents",
    href: "/platform/cuva-agents",
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Workflows",
    href: "/platform/cuva-agents/multi-agent-workflows",
  },
  {
    icon: Settings,
    title: "Operating Fabric",
    href: "/platform/operating-fabric",
  },
]

export function KnowledgeWhereUsed() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F0D1A] mb-4">Where Knowledge Systems Are Used</h2>
          <p className="text-lg text-[#3D3D4E]">
            Knowledge Systems provide context across the platform and are used by:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {usedBy.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-neutral-200 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#E5FAFE] mb-4">
                <item.icon className="h-7 w-7 text-[#593BEE]" />
              </div>
              <h3 className="text-base font-bold text-[#0F0D1A]">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
