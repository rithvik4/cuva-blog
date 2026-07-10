import { Play, Bot, Plug, Wrench, GitBranch, StopCircle } from "lucide-react"

const components = [
  {
    icon: Play,
    title: "Trigger Agent",
    description: "Initiates workflows based on events, schedules, APIs, or manual actions.",
  },
  {
    icon: Bot,
    title: "AI Agent",
    description: "Performs reasoning, decision-making, and task execution within the workflow.",
  },
  {
    icon: Plug,
    title: "Connectors",
    description:
      "Enable workflows to interact with enterprise applications, financial systems, data sources, and transaction platforms.",
  },
  {
    icon: Wrench,
    title: "Custom Tools",
    description: "Extend agent capabilities with domain-specific logic or services.",
  },
  {
    icon: GitBranch,
    title: "Flow Control",
    description: "Defines sequencing, branching, conditions, retries, and parallel execution paths.",
  },
  {
    icon: StopCircle,
    title: "Terminator",
    description: "Ends workflows, produces final outputs, or escalates actions to humans or downstream systems.",
  },
]

export function OrchestrationWorkflowComponents() {
  return (
    <section id="workflow-components" className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Workflow Components</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            The building blocks that power multi-agent workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-[#E5E5E5]"
            >
              <div className="w-12 h-12 bg-[#E5FAFE] rounded-xl flex items-center justify-center mb-4">
                <component.icon className="w-6 h-6 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">{component.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed">{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
