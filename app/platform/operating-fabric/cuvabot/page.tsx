import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { CuvabotHero } from "@/components/platform/operating-fabric/cuvabot/cuvabot-hero"
import { CuvabotValueBar } from "@/components/platform/operating-fabric/cuvabot/cuvabot-value-bar"
import { CuvabotDefinition } from "@/components/platform/operating-fabric/cuvabot/cuvabot-definition"
import { CuvabotVisualBlock } from "@/components/platform/operating-fabric/cuvabot/cuvabot-visual-block"
import { CuvabotCapabilities } from "@/components/platform/operating-fabric/cuvabot/cuvabot-capabilities"
import { CuvabotHowItWorks } from "@/components/platform/operating-fabric/cuvabot/cuvabot-how-it-works"
import { CuvabotTrustBlock } from "@/components/platform/operating-fabric/cuvabot/cuvabot-trust-block"
import { CuvabotWhyItMatters } from "@/components/platform/operating-fabric/cuvabot/cuvabot-why-it-matters"
import { CuvabotCta } from "@/components/platform/operating-fabric/cuvabot/cuvabot-cta"

export default function CuvabotPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <CuvabotHero />
      </PageHeroWrapper>
      <main>
        <CuvabotValueBar />
        <CuvabotDefinition />
        <CuvabotVisualBlock />
        <CuvabotHowItWorks />
        <CuvabotCapabilities />
        <CuvabotTrustBlock />
        <CuvabotWhyItMatters />
        <CuvabotCta />
      </main>
      <Footer />
    </div>
  )
}
