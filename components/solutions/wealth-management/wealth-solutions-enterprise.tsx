import { Check } from "lucide-react"

const features = [
  "Designed for regulated wealth management environments",
  "Integrates with existing CRM, portfolio, and document systems",
  "Production-ready from day one",
]

export function WealthSolutionsEnterprise() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Enterprise Readiness</h2>
          <p className="text-gray-400 mb-10">Built for the demands of modern wealth management</p>

          <div className="flex flex-col items-center gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
