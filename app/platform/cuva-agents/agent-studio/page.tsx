import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { StudioHero } from "@/components/platform/cuva-agents/agent-studio/studio-hero"
import { StudioValueBar } from "@/components/platform/cuva-agents/agent-studio/studio-value-bar"
import { StudioFeatureTrio } from "@/components/platform/cuva-agents/agent-studio/studio-feature-trio"
import { StudioVisualBlock } from "@/components/platform/cuva-agents/agent-studio/studio-visual-block"
import { StudioDeepFeature } from "@/components/platform/cuva-agents/agent-studio/studio-deep-feature"
import { StudioProofBlock } from "@/components/platform/cuva-agents/agent-studio/studio-proof-block"
import { StudioCta } from "@/components/platform/cuva-agents/agent-studio/studio-cta"

export default function AgentStudioPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <StudioHero />
      </PageHeroWrapper>
      <main>
        <StudioValueBar />
        <StudioFeatureTrio />
        <StudioVisualBlock />
        <StudioDeepFeature />
        <StudioProofBlock />
        <StudioCta />
      </main>
      <Footer />
    </div>
  )
}
