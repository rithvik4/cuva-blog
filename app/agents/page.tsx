import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { AgentsCatalogHero } from "@/components/agents/agents-catalog-hero"
import { AgentsCatalogValueBar } from "@/components/agents/agents-catalog-value-bar"
import { AgentsCatalogDefinition } from "@/components/agents/agents-catalog-definition"
import { AgentsCatalogBlueprint } from "@/components/agents/agents-catalog-blueprint"
import { AgentsCatalogCapabilities } from "@/components/agents/agents-catalog-capabilities"
import { AgentsCatalogAgents } from "@/components/agents/agents-catalog-agents"
import { AgentsCatalogHowUsed } from "@/components/agents/agents-catalog-how-used"
import { AgentsCatalogWhyStart } from "@/components/agents/agents-catalog-why-start"
import { AgentsCatalogCta } from "@/components/agents/agents-catalog-cta"

export default function AgentsOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <AgentsCatalogHero />
      </PageHeroWrapper>
      <AgentsCatalogValueBar />
      <AgentsCatalogDefinition />
      <AgentsCatalogBlueprint />
      <AgentsCatalogCapabilities />
      <AgentsCatalogAgents />
      <AgentsCatalogHowUsed />
      <AgentsCatalogWhyStart />
      <AgentsCatalogCta />
      <Footer />
    </div>
  )
}
