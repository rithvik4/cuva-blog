import { Check } from "lucide-react"

const benefits = [
  "Establishes a single, trusted source of enterprise knowledge",
  "Eliminates reliance on fragmented documents and tribal knowledge",
  "Makes institutional knowledge accessible across teams",
  "Reduces time spent searching and validating information",
  "Ensures decisions are based on current, verified knowledge",
]

export function KnowledgeAssistantWhyItMatters() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left: Statement */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">Why It Matters</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Transform how your teams create, maintain, and access enterprise knowledge.
            </p>
          </div>

          {/* Right: Benefits */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#80E9FF]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-[#80E9FF]" />
                  </div>
                  <p className="text-white/90 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
