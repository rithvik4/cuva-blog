import { Briefcase, Users, Brain } from "lucide-react"

const features = [
  {
    icon: Briefcase,
    title: "Purpose-Built for Finance",
    description:
      "Agents designed specifically for wealth management, banking, accounting, payments, and compliance workflows.",
  },
  {
    icon: Users,
    title: "Multi-Agent Collaboration",
    description: "Agents work together, share context, and coordinate actions across systems.",
  },
  {
    icon: Brain,
    title: "Knowledge-Aware Reasoning",
    description: "Every decision is enriched by the knowledge base, graph, and RAG pipelines.",
  },
]

export function AgentsFeatureTrio() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E8E4FD] flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{feature.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
