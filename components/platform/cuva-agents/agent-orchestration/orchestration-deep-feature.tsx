import { Check } from "lucide-react"

const benefits = [
  "Handle complex, multi-step workflows automatically",
  "Reduce manual coordination overhead",
  "Ensure consistent execution across teams",
  "Scale operations without adding headcount",
]

export function OrchestrationDeepFeature() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
              Turn complex operations into coordinated agent workflows
            </h2>
            <p className="text-lg text-[#3D3D4E] mb-8 leading-relaxed">
              Agent Orchestration enables your team to automate sophisticated financial processes that require multiple
              specialized agents working in concert.
            </p>
          </div>

          <div className="bg-[#F4F4F7] rounded-2xl p-8">
            <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#593BEE] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#3D3D4E]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
