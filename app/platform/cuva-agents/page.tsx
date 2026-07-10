import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { AgentsHero } from "@/components/platform/cuva-agents/agents-hero"
import { AgentsValueBar } from "@/components/platform/cuva-agents/agents-value-bar"
import { AgentsWhatItIs } from "@/components/platform/cuva-agents/agents-what-it-is"
import { AgentsCapabilities } from "@/components/platform/cuva-agents/agents-capabilities"
import { AgentsWhyMatters } from "@/components/platform/cuva-agents/agents-why-matters"
import { AgentsBuildRun } from "@/components/platform/cuva-agents/agents-build-run"
import { AgentsRelationship } from "@/components/platform/cuva-agents/agents-relationship"
import { AgentsCta } from "@/components/platform/cuva-agents/agents-cta"

export default function CuvaAgentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <AgentsHero />
      </PageHeroWrapper>
      <main>
        <AgentsValueBar />
        <AgentsWhatItIs />
        <AgentsCapabilities />
        <AgentsWhyMatters />
        <AgentsBuildRun />
        <AgentsRelationship />
        <AgentsCta />
      </main>
      <Footer />
    </div>
  )
}
