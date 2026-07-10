import { MessageCircle, Search, Play } from "lucide-react"

const pillars = [
  {
    icon: MessageCircle,
    title: "Chat with Knowledge Systems",
    description: "Ask natural language questions and get grounded, permission-aware answers with sources.",
  },
  {
    icon: Search,
    title: "Enterprise Search Across Systems",
    description: "Search across connected enterprise tools with semantic understanding and access control.",
  },
  {
    icon: Play,
    title: "Trigger and Execute Workflows",
    description: "Run multi-step workflows directly from chat using simple, natural language commands.",
  },
]

export function CuvabotValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            One Interface to Ask, Find, and Act Across the Enterprise
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            CuvaBot unifies enterprise knowledge, search, and execution in a single interface, allowing teams to move
            from questions to actions without switching systems.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E5FAFE] flex items-center justify-center">
                <pillar.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
