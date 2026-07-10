import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WealthSolutionsHero } from "@/components/solutions/wealth-management/wealth-solutions-hero"
import { WealthSolutionsOutcomeStrip } from "@/components/solutions/wealth-management/wealth-solutions-outcome-strip"
import { WealthSolutionsChallenge } from "@/components/solutions/wealth-management/wealth-solutions-challenge"
import { WealthSolutionsTransformation } from "@/components/solutions/wealth-management/wealth-solutions-transformation"
import { WealthSolutionsAreas } from "@/components/solutions/wealth-management/wealth-solutions-areas"
import { WealthSolutionsDifferentiation } from "@/components/solutions/wealth-management/wealth-solutions-differentiation"
import { WealthSolutionsDelivery } from "@/components/solutions/wealth-management/wealth-solutions-delivery"
import { WealthSolutionsEnterprise } from "@/components/solutions/wealth-management/wealth-solutions-enterprise"
import { WealthSolutionsCta } from "@/components/solutions/wealth-management/wealth-solutions-cta"

export default function WealthManagementSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WealthSolutionsHero />
      <WealthSolutionsOutcomeStrip />
      <WealthSolutionsChallenge />
      <WealthSolutionsTransformation />
      <WealthSolutionsAreas />
      <WealthSolutionsDifferentiation />
      <WealthSolutionsDelivery />
      <WealthSolutionsEnterprise />
      <WealthSolutionsCta />
      <Footer />
    </div>
  )
}
