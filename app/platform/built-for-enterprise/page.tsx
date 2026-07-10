import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { EnterpriseHero } from "@/components/platform/enterprise-ready/enterprise-hero"
import { EnterpriseValueBar } from "@/components/platform/enterprise-ready/enterprise-value-bar"
import { EnterpriseVisualBlock } from "@/components/platform/enterprise-ready/enterprise-visual-block"
import { EnterpriseHowItWorks } from "@/components/platform/enterprise-ready/enterprise-how-it-works"
import { EnterprisePrivacyCallout } from "@/components/platform/enterprise-ready/enterprise-privacy-callout"
import { EnterpriseCta } from "@/components/platform/enterprise-ready/enterprise-cta"

export default function BuiltForEnterprisePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeroWrapper>
        <EnterpriseHero />
      </PageHeroWrapper>
      <main>
        <EnterpriseValueBar />
        <EnterpriseVisualBlock />
        <EnterpriseHowItWorks />
        <EnterprisePrivacyCallout />
        <EnterpriseCta />
      </main>
      <Footer />
    </div>
  )
}
