import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SCFSolutionsHero } from "@/components/solutions/supply-chain-finance/scf-solutions-hero"
import { SCFSolutionsOutcomeStrip } from "@/components/solutions/supply-chain-finance/scf-solutions-outcome-strip"
import { SCFSolutionsChallenge } from "@/components/solutions/supply-chain-finance/scf-solutions-challenge"
import { SCFSolutionsTransformation } from "@/components/solutions/supply-chain-finance/scf-solutions-transformation"
import { SCFSolutionsAreas } from "@/components/solutions/supply-chain-finance/scf-solutions-areas"
import { SCFSolutionsDifferentiation } from "@/components/solutions/supply-chain-finance/scf-solutions-differentiation"
import { SCFSolutionsDelivery } from "@/components/solutions/supply-chain-finance/scf-solutions-delivery"
import { SCFSolutionsEnterprise } from "@/components/solutions/supply-chain-finance/scf-solutions-enterprise"
import { SCFSolutionsCTA } from "@/components/solutions/supply-chain-finance/scf-solutions-cta"

export default function SupplyChainFinanceSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SCFSolutionsHero />
      <SCFSolutionsOutcomeStrip />
      <SCFSolutionsChallenge />
      <SCFSolutionsTransformation />
      <SCFSolutionsAreas />
      <SCFSolutionsDifferentiation />
      <SCFSolutionsDelivery />
      <SCFSolutionsEnterprise />
      <SCFSolutionsCTA />
      <Footer />
    </div>
  )
}
