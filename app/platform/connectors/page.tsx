import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { ConnectorsHero } from "@/components/platform/connectors/connectors-hero"
import { ConnectorsValueBar } from "@/components/platform/connectors/connectors-value-bar"
import { ConnectorsUsage } from "@/components/platform/connectors/connectors-usage"
import { ConnectorsIntegrationValue } from "@/components/platform/connectors/connectors-integration-value"
import { ConnectorsSecurity } from "@/components/platform/connectors/connectors-security"
import { ConnectorsCta } from "@/components/platform/connectors/connectors-cta"

export default function ConnectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <ConnectorsHero />
      </PageHeroWrapper>
      <main>
        <ConnectorsValueBar />
        <ConnectorsUsage />
        <ConnectorsIntegrationValue />
        <ConnectorsSecurity />
        <ConnectorsCta />
      </main>
      <Footer />
    </div>
  )
}
