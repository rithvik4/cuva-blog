import { Database, FolderTree, MessageSquare, FileCheck, Brain, Shield } from "lucide-react"

const capabilities = [
  {
    text: "Create and maintain structured enterprise knowledge from documents and systems",
    icon: Database,
  },
  {
    text: "Organize knowledge into entities, topics, and business-relevant structures",
    icon: FolderTree,
  },
  {
    text: "Conversational access to enterprise knowledge using natural language",
    icon: MessageSquare,
  },
  {
    text: "Source-linked, auditable answers grounded in enterprise information",
    icon: FileCheck,
  },
  {
    text: "Understands enterprise terminology and context",
    icon: Brain,
  },
  {
    text: "Respects enterprise permissions and access controls",
    icon: Shield,
  },
]

export function KnowledgeAssistantCapabilities() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] sm:text-4xl">Key Capabilities</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left column - first 3 items */}
            <div className="space-y-6">
              {capabilities.slice(0, 3).map((capability, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <capability.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-[#3D3D4E] leading-relaxed pt-2">{capability.text}</p>
                </div>
              ))}
            </div>

            {/* Right column - last 3 items */}
            <div className="space-y-6">
              {capabilities.slice(3).map((capability, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <capability.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-[#3D3D4E] leading-relaxed pt-2">{capability.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
