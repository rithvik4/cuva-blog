import { MessageSquare, Search, Bot, Workflow, Brain } from "lucide-react"
import Link from "next/link"

const useCases = [
  {
    icon: MessageSquare,
    title: "Knowledge Assistant",
    description: "Grounded, conversational answers",
    href: "/platform/knowledge-systems/knowledge-assistant",
  },
  {
    icon: Search,
    title: "Knowledge Search",
    description: "Contextual discovery",
    href: "/platform/knowledge-systems/knowledge-search",
  },
  {
    icon: Bot,
    title: "CuvaBot",
    description: "Question answering and action execution",
    href: "/platform/operating-fabric/cuvabot",
  },
  {
    icon: Brain,
    title: "AI Agents",
    description: "Informed decision making",
    href: "/platform/cuva-agents",
  },
  {
    icon: Workflow,
    title: "Multi-Agent Workflows",
    description: "Context-driven automation",
    href: "/platform/cuva-agents/multi-agent-workflows",
  },
]

export function RagWhereUsed() {
  return (
    <section className="py-20 bg-[#F7F8F9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F0D1A] mb-4 text-center">Where RAG Is Used</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          RAG powers intelligent capabilities across the Cuva platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <Link
              key={index}
              href={useCase.href}
              className="bg-white rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all text-center group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#E5FAFE] mb-4 mx-auto group-hover:bg-primary/10 transition-colors">
                <useCase.icon className="h-6 w-6 text-[#593BEE]" />
              </div>
              <h3 className="text-base font-semibold text-[#0F0D1A] mb-1 group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
