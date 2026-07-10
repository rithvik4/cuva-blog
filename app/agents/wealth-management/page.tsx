import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { WealthHero } from "@/components/agents/wealth-management/wealth-hero"
import { WealthValueBar } from "@/components/agents/wealth-management/wealth-value-bar"
import { WealthDefinition } from "@/components/agents/wealth-management/wealth-definition"
import { WealthWorkflows } from "@/components/agents/wealth-management/wealth-workflows"
import { WealthHowItWorks } from "@/components/agents/wealth-management/wealth-how-it-works"
import { WealthImpact } from "@/components/agents/wealth-management/wealth-impact"
import { WealthWhyItWorks } from "@/components/agents/wealth-management/wealth-why-it-works"
import { WealthUsage } from "@/components/agents/wealth-management/wealth-usage"
import { WealthCta } from "@/components/agents/wealth-management/wealth-cta"

export default function WealthManagementAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <WealthHero />
      </PageHeroWrapper>
      <main>
        <WealthValueBar />
        <WealthDefinition />
        <WealthWorkflows />
        <WealthHowItWorks />
        <WealthImpact />
        <WealthWhyItWorks />
        <WealthUsage />
        <WealthCta />
      </main>
      <Footer />
    </div>
  )
}
