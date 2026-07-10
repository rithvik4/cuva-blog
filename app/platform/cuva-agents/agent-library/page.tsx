import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { LibraryHero } from "@/components/platform/cuva-agents/agent-library/library-hero"
import { LibraryValueBar } from "@/components/platform/cuva-agents/agent-library/library-value-bar"
import { LibraryPremierAgents } from "@/components/platform/cuva-agents/agent-library/library-premier-agents"
import { LibraryFeatureTrio } from "@/components/platform/cuva-agents/agent-library/library-feature-trio"
import { LibraryVisualBlock } from "@/components/platform/cuva-agents/agent-library/library-visual-block"
import { LibraryHowItWorks } from "@/components/platform/cuva-agents/agent-library/library-how-it-works"
import { LibraryDeepFeature } from "@/components/platform/cuva-agents/agent-library/library-deep-feature"
import { LibraryProofBlock } from "@/components/platform/cuva-agents/agent-library/library-proof-block"
import { LibraryCta } from "@/components/platform/cuva-agents/agent-library/library-cta"

export default function AgentLibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <LibraryHero />
      </PageHeroWrapper>
      <main>
        <LibraryValueBar />
        <LibraryPremierAgents />
        <LibraryFeatureTrio />
        <LibraryVisualBlock />
        <LibraryHowItWorks />
        <LibraryDeepFeature />
        <LibraryProofBlock />
        <LibraryCta />
      </main>
      <Footer />
    </div>
  )
}
