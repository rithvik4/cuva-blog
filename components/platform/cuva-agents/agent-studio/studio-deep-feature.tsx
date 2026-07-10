import { Check } from "lucide-react"

const benefits = [
  {
    title: "Design complex logic visually",
    description: "See decisions, dependencies, and execution paths clearly on a single canvas.",
  },
  {
    title: "Rapid development",
    description: "Test and refine workflows before anything reaches production.",
  },
  {
    title: "Easy to understand",
    description: "Business, operations, and technical teams can reason about the same visual logic.",
  },
  {
    title: "Reduce errors during workflow design",
    description: "Visual structure makes gaps, loops, and edge cases easier to identify.",
  },
]

export function StudioDeepFeature() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
              Make complex financial workflows simple and scalable
            </h2>
            <p className="text-lg text-[#3D3D4E] leading-relaxed">
              Agent Studio empowers teams to design enterprise-ready workflows with full transparency and control.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-4 bg-[#F4F4F7] rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[#593BEE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[#0F0D1A] font-semibold block">{benefit.title}</span>
                  <span className="text-[#3D3D4E] text-sm">{benefit.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
