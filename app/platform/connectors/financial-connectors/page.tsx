import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { FinancialConnectorsHero } from "@/components/platform/connectors/financial-connectors/financial-connectors-hero"
import { FinancialConnectorsValueBar } from "@/components/platform/connectors/financial-connectors/financial-connectors-value-bar"
import { FinancialConnectorsCapabilities } from "@/components/platform/connectors/financial-connectors/financial-connectors-capabilities"
import { FinancialConnectorsVisualBlock } from "@/components/platform/connectors/financial-connectors/financial-connectors-visual-block"
import { FinancialConnectorsHowItWorks } from "@/components/platform/connectors/financial-connectors/financial-connectors-how-it-works"
import { FinancialConnectorsWorkflows } from "@/components/platform/connectors/financial-connectors/financial-connectors-workflows"
import { FinancialConnectorsDeepFeature } from "@/components/platform/connectors/financial-connectors/financial-connectors-deep-feature"
import { FinancialConnectorsProofBlock } from "@/components/platform/connectors/financial-connectors/financial-connectors-proof-block"
import { FinancialConnectorsCta } from "@/components/platform/connectors/financial-connectors/financial-connectors-cta"

export default function FinancialConnectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <FinancialConnectorsHero />
      </PageHeroWrapper>
      <main>
        <FinancialConnectorsValueBar />
        <FinancialConnectorsCapabilities />
        <FinancialConnectorsVisualBlock />
        <FinancialConnectorsHowItWorks />
        <FinancialConnectorsWorkflows />
        <FinancialConnectorsDeepFeature />
        <FinancialConnectorsProofBlock />
        <FinancialConnectorsCta />
      </main>
      <Footer />
    </div>
  )
}
