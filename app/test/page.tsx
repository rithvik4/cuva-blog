import { HeroWrapperV2 } from "@/components/sections/hero-wrapper-v2"
import { ValuePropositionBar } from "@/components/sections/value-proposition-bar"
import { PlatformOverview } from "@/components/sections/platform-overview"
import { WhyCuva } from "@/components/sections/why-cuva"
import { SolutionsOverview } from "@/components/sections/solutions-overview"
import { WorkflowHighlights } from "@/components/sections/workflow-highlights"
import { PremierAgents } from "@/components/sections/premier-agents"
import { TrustBar } from "@/components/sections/trust-bar"
import { SecuritySection } from "@/components/sections/security-section"
import { CtaStrip } from "@/components/sections/cta-strip"
import { Footer } from "@/components/footer"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroWrapperV2 />
      <main>
        <PlatformOverview />
        <ValuePropositionBar />
        <SolutionsOverview />
        <WorkflowHighlights />
        <WhyCuva />
        <PremierAgents />
        <TrustBar />
        <SecuritySection />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
