import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { SCFHero } from "@/components/agents/supply-chain-finance/scf-hero"
import { SCFValueBar } from "@/components/agents/supply-chain-finance/scf-value-bar"
import { SCFDefinition } from "@/components/agents/supply-chain-finance/scf-definition"
import { SCFWorkflows } from "@/components/agents/supply-chain-finance/scf-workflows"
import { SCFHowItWorks } from "@/components/agents/supply-chain-finance/scf-how-it-works"
import { SCFImpact } from "@/components/agents/supply-chain-finance/scf-impact"
import { SCFWhyItWorks } from "@/components/agents/supply-chain-finance/scf-why-it-works"
import { SCFUsage } from "@/components/agents/supply-chain-finance/scf-usage"
import { SCFCta } from "@/components/agents/supply-chain-finance/scf-cta"

export default function SupplyChainFinanceAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <SCFHero />
      </PageHeroWrapper>
      <main>
        <SCFValueBar />
        <SCFDefinition />
        <SCFWorkflows />
        <SCFHowItWorks />
        <SCFImpact />
        <SCFWhyItWorks />
        <SCFUsage />
        <SCFCta />
      </main>
      <Footer />
    </div>
  )
}
