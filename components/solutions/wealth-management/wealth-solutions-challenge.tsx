import { AlertTriangle } from "lucide-react"

export function WealthSolutionsChallenge() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6 font-serif">
            The Challenge in Wealth Management
          </h2>
          <p className="text-lg text-[#3D3D4E] leading-relaxed">
            Wealth management firms face rising client expectations, increasing regulatory pressure, and growing
            operational complexity. Advisors spend too much time on manual processes, while firms struggle to scale
            personalized service without increasing headcount and cost.
          </p>
        </div>
      </div>
    </section>
  )
}
