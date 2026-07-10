import { Database, MessageSquare, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Database,
    title: "Enterprise Knowledge Base",
    description: "Create and maintain structured enterprise knowledge from documents, systems, and operations.",
  },
  {
    icon: MessageSquare,
    title: "Conversational Access",
    description: "Explore and interact with enterprise knowledge using natural language, without learning new tools.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted and Governed",
    description: "Ensure knowledge is current, permission-aware, and traceable back to original sources.",
  },
]

export function KnowledgeAssistantOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] sm:text-4xl">
            Build, Maintain, and Access Enterprise Knowledge in One Place
          </h2>
          <p className="mt-4 text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            A unified knowledge base with a conversational interface, designed to capture institutional knowledge and
            make it instantly accessible across the enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#F4F4F7] rounded-2xl p-8 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
