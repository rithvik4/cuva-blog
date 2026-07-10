import { CheckCircle, Target, Shield } from "lucide-react"

const benefits = [
  {
    icon: Target,
    text: "Higher accuracy and reliability",
  },
  {
    icon: CheckCircle,
    text: "Explainable, auditable outputs",
  },
  {
    icon: Shield,
    text: "Safer AI adoption in regulated settings",
  },
]

export function RagWhyItMatters() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F0D1A] mb-6">Why It Matters</h2>
          <p className="text-lg leading-relaxed text-[#3D3D4E] mb-10">
            RAG reduces hallucinations, improves decision quality, and enables safe use of AI in regulated financial
            environments. By grounding AI behavior in enterprise knowledge, teams gain trust, accuracy, and
            accountability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#F7F8F9] px-5 py-3 rounded-full">
                <benefit.icon className="h-5 w-5 text-[#593BEE]" />
                <span className="text-sm font-medium text-[#0F0D1A]">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
