import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { SolutionsOutcomeStrip } from "@/components/solutions/solutions-outcome-strip"
import { SolutionsProblemOutcome } from "@/components/solutions/solutions-problem-outcome"
import { SolutionsByDomain } from "@/components/solutions/solutions-by-domain"
import { SolutionsDifferentiation } from "@/components/solutions/solutions-differentiation"
import { SolutionsHowDelivered } from "@/components/solutions/solutions-how-delivered"
import { SolutionsEnterprise } from "@/components/solutions/solutions-enterprise"
import { SolutionsCta } from "@/components/solutions/solutions-cta"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SolutionsHero />
      <SolutionsOutcomeStrip />
      <SolutionsProblemOutcome />
      <SolutionsByDomain />
      <SolutionsDifferentiation />
      <SolutionsHowDelivered />
      <SolutionsEnterprise />
      <SolutionsCta />
      <Footer />
    </div>
  )
}
