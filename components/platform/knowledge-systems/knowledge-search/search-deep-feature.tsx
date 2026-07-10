import { Check } from "lucide-react"

const benefits = [
  "Eliminates data silos",
  "Accelerates advisor and operations workflows",
  "Reduces time spent searching for documents or records",
  "Ensures accurate and consistent insights",
]

export function SearchDeepFeature() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Continuously improving through agent-driven updates
            </h2>
            <p className="text-[#9090A7] text-lg leading-relaxed">
              Because AI agents actively maintain and enrich the Knowledge Graph, Knowledge Search becomes more
              accurate, contextual, and reliable over time.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Built for complex financial environments</h3>
            <p className="text-[#9090A7] mb-6">
              Unlike generic search tools, Knowledge Search is optimized for complex data models, multi-system
              fragmentation, and relationship-heavy information.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#80E9FF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#0F0D1A]" />
                  </div>
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
