import { Plug, Layers, Bot, GitBranch, Brain } from "lucide-react"

const components = [
  { icon: Plug, label: "Connectors", description: "Feed data and events" },
  { icon: Brain, label: "Knowledge Systems", description: "Provide context and intelligence" },
  { icon: Bot, label: "AI Agents", description: "Execute tasks and decisions" },
  { icon: GitBranch, label: "Agentic Workflows", description: "Define end-to-end logic" },
  { icon: Layers, label: "Models", description: "Provide scoring and predictions" },
]

export function OperatingFabricRelationship() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Relationship to Other Platform Components
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            The Operating Fabric ensures all components operate as a single system
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Architecture diagram */}
          <div className="relative">
            {/* Center - Operating Fabric */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#593BEE] text-white rounded-2xl px-12 py-6 shadow-lg">
                <div className="text-center">
                  <Layers className="w-10 h-10 mx-auto mb-2" />
                  <h3 className="font-serif text-xl font-bold">Operating Fabric</h3>
                  <p className="text-sm text-white/80">Core Platform Layer</p>
                </div>
              </div>
            </div>

            {/* Connecting lines */}
            <div className="hidden md:block absolute top-[100px] left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gradient-to-r from-transparent via-[#593BEE]/30 to-transparent" />

            {/* Components */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
              {components.map((component, index) => (
                <div key={index} className="relative">
                  {/* Vertical connector */}
                  <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[#593BEE]/30" />

                  <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#E5FAFE] flex items-center justify-center mx-auto mb-3">
                      <component.icon className="w-6 h-6 text-[#593BEE]" />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-[#0F0D1A] mb-1">{component.label}</h4>
                    <p className="text-xs text-[#9090A7]">{component.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
