import { HeroWrapper } from "@/components/sections/hero-wrapper"
import { EnterpriseAIChallengesTabbed } from "@/components/sections/enterprise-ai-challenges-tabbed"
import { IntroducingCuvaPlatform } from "@/components/sections/introducing-cuva-platform"
import { IntroducingCuvaPlatformHero } from "@/components/sections/introducing-cuva-platform-hero"
import { InfrastructureLayer } from "@/components/sections/infrastructure-layer"
import { ValuePropositionBar } from "@/components/sections/value-proposition-bar"
import { WhyCuva } from "@/components/sections/why-cuva"
import { SolutionsOverview } from "@/components/sections/solutions-overview"
import { WorkflowHighlights } from "@/components/sections/workflow-highlights"
import { PremierAgents } from "@/components/sections/premier-agents"
import { SecuritySection } from "@/components/sections/security-section"
import { CtaStrip } from "@/components/sections/cta-strip"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroWrapper />
      <main>
        <IntroducingCuvaPlatformHero />
        <EnterpriseAIChallengesTabbed />
        <IntroducingCuvaPlatform />
        <InfrastructureLayer />
        <ValuePropositionBar />
        <SolutionsOverview />
        <WorkflowHighlights />
        <WhyCuva />
        <PremierAgents />
        <SecuritySection />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
