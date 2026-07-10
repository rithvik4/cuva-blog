import { Layers, Brain, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Full-Stack Financial AI",
    description:
      "A comprehensive AI platform built specifically for regulated industries and complex financial operations.",
  },
  {
    icon: Brain,
    title: "Domain-Specific Intelligence",
    description: "Domain-specific models and agent workflows trained on financial data and industry best practices.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description: "Enterprise-grade privacy, security, and compliance built into every layer of the platform.",
  },
]

export function WhyCuva() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0F0D1A] sm:text-4xl">
            Why Financial Teams Choose Cuva
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#E8E4FD] mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0F0D1A] mb-3">{feature.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
