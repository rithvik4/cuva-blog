import { MessageSquare, Search, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const components = [
  {
    icon: MessageSquare,
    title: "Knowledge Assistant",
    description:
      "A structured enterprise knowledge base with a conversational interface, enabling teams to access, validate, and reason over institutional knowledge.",
    href: "/platform/knowledge-systems/knowledge-assistant",
    linkText: "Explore Knowledge Assistant",
  },
  {
    icon: Search,
    title: "Knowledge Search",
    description:
      "An entity-centric knowledge graph that maps relationships across data, documents, and systems to enable structured discovery and navigation.",
    href: "/platform/knowledge-systems/knowledge-search",
    linkText: "Explore Knowledge Search",
  },
  {
    icon: Sparkles,
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Contextual retrieval and grounding at execution time, ensuring AI responses and actions are based on verified enterprise knowledge.",
    href: "/platform/knowledge-systems/rag",
    linkText: "Explore RAG",
  },
]

export function KnowledgeComponents() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F0D1A] mb-4">Explore the Components</h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Cuva Knowledge Systems are composed of three tightly integrated capabilities. Together, they form a single
            system rather than isolated features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className="flex flex-col p-8 rounded-xl border border-neutral-200 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E5FAFE] mb-6">
                <component.icon className="h-8 w-8 text-[#593BEE]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D1A] mb-3">{component.title}</h3>
              <p className="text-base text-[#3D3D4E] leading-relaxed mb-6 flex-grow">{component.description}</p>
              <Link
                href={component.href}
                className="inline-flex items-center text-[#593BEE] font-medium hover:underline"
              >
                {component.linkText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
