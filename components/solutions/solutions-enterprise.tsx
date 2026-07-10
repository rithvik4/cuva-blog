import { Check } from "lucide-react"

const signals = [
  "Designed for regulated financial environments",
  "Works with existing systems and data",
  "Production-ready from day one",
]

export function SolutionsEnterprise() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Enterprise Readiness
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {signals.map((signal, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-lg">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
