import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { PrivacyHero } from "@/components/platform/privacy-security/privacy-hero"
import { PrivacyValueBar } from "@/components/platform/privacy-security/privacy-value-bar"
import { PrivacySection } from "@/components/platform/privacy-security/privacy-section"
import { SecuritySection } from "@/components/platform/privacy-security/security-section"
import { ComplianceSection } from "@/components/platform/privacy-security/compliance-section"
import { PrivacyCta } from "@/components/platform/privacy-security/privacy-cta"

export default function PrivacySecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeroWrapper>
        <PrivacyHero />
      </PageHeroWrapper>
      <main>
        <PrivacyValueBar />
        <PrivacySection />
        <SecuritySection />
        <ComplianceSection />
        <PrivacyCta />
      </main>
      <Footer />
    </div>
  )
}
