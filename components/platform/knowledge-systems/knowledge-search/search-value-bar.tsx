import { Globe, Brain, ShieldCheck } from "lucide-react"

const values = [
  {
    icon: Globe,
    title: "Unified Enterprise Search",
    description: "Search across enterprise systems, documents, and knowledge from a single, consistent entry point.",
  },
  {
    icon: Brain,
    title: "Semantic Financial Understanding",
    description: "Understands financial terms, entities, and relationships to deliver precise search results.",
  },
  {
    icon: ShieldCheck,
    title: "Access-Controlled Results",
    description: "Ensure search results respect roles, permissions, and enterprise access policies at all times.",
  },
]

export function SearchValueBar() {
  return (
    <section className="py-16 bg-[#F4F4F7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F0D1A] mb-4">
            Unified, Contextual Search Across the Enterprise
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Knowledge Search enables teams to discover information across data, documents, and systems through semantic
            financial understanding, structured relationships, and built-in access controls.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5FAFE] flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-[#593BEE]" />
                </div>
                <span className="text-lg font-semibold text-[#0F0D1A]">{value.title}</span>
              </div>
              <p className="text-[#3D3D4E] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
