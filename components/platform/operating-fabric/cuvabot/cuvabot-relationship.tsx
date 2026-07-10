import { Database, Layers, Bot, GitBranch, Plug, MessageSquare } from "lucide-react"

const components = [
  { icon: Database, label: "Knowledge Systems", description: "Provide structured context and retrieval" },
  { icon: Layers, label: "Operating Fabric", description: "Governs execution and policy" },
  { icon: Bot, label: "AI Agents", description: "Perform actions and decisions" },
  { icon: GitBranch, label: "Agentic Workflows", description: "Define multi-step logic" },
  { icon: Plug, label: "Connectors", description: "Provide access to enterprise and financial systems" },
]

export function CuvabotRelationship() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Relationship to Platform Components
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            CuvaBot brings these components together through a single conversational interface.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Central CuvaBot hub */}
          <div className="flex flex-col items-center">
            {/* Top components */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 w-full">
              {components.map((component, index) => (
                <div
                  key={index}
                  className="bg-[#F4F4F7] border border-gray-200 rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#E5FAFE] flex items-center justify-center">
                    <component.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#0F0D1A] mb-1">{component.label}</h4>
                  <p className="text-xs text-[#9090A7]">{component.description}</p>
                </div>
              ))}
            </div>

            {/* Connecting arrows */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-0.5 h-8 bg-primary/30" />
              ))}
            </div>

            {/* CuvaBot central */}
            <div className="bg-primary rounded-2xl p-8 text-center text-white max-w-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">CuvaBot</h3>
              <p className="text-white/80">Single conversational interface unifying all platform capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
