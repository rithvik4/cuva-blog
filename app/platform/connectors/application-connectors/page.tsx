import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { AppConnectorsHero } from "@/components/platform/connectors/application-connectors/app-connectors-hero"
import { AppConnectorsValueBar } from "@/components/platform/connectors/application-connectors/app-connectors-value-bar"
import { AppConnectorsCapabilities } from "@/components/platform/connectors/application-connectors/app-connectors-capabilities"
import { AppConnectorsVisualBlock } from "@/components/platform/connectors/application-connectors/app-connectors-visual-block"
import { AppConnectorsHowItWorks } from "@/components/platform/connectors/application-connectors/app-connectors-how-it-works"
import { AppConnectorsDeepFeature } from "@/components/platform/connectors/application-connectors/app-connectors-deep-feature"
import { AppConnectorsSecurity } from "@/components/platform/connectors/application-connectors/app-connectors-security"
import { AppConnectorsCta } from "@/components/platform/connectors/application-connectors/app-connectors-cta"

export default function ApplicationConnectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <AppConnectorsHero />
      </PageHeroWrapper>
      <main>
        <AppConnectorsValueBar />
        <AppConnectorsCapabilities />
        <AppConnectorsVisualBlock />
        <AppConnectorsHowItWorks />
        <AppConnectorsDeepFeature />
        <AppConnectorsSecurity />
        <AppConnectorsCta />
      </main>
      <Footer />
    </div>
  )
}
