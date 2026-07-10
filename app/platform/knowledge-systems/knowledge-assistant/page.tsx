import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { KnowledgeAssistantHero } from "@/components/platform/knowledge-systems/knowledge-assistant/assistant-hero"
import { KnowledgeAssistantOverview } from "@/components/platform/knowledge-systems/knowledge-assistant/assistant-overview"
import { KnowledgeAssistantCapabilities } from "@/components/platform/knowledge-systems/knowledge-assistant/assistant-capabilities"
import { KnowledgeAssistantHowItWorks } from "@/components/platform/knowledge-systems/knowledge-assistant/assistant-how-it-works"
import { KnowledgeAssistantWhyItMatters } from "@/components/platform/knowledge-systems/knowledge-assistant/assistant-why-it-matters"
import { KnowledgeAssistantCta } from "@/components/platform/knowledge-systems/knowledge-assistant/assistant-cta"

export default function KnowledgeAssistantPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <KnowledgeAssistantHero />
      </PageHeroWrapper>
      <main>
        <KnowledgeAssistantOverview />
        <KnowledgeAssistantCapabilities />
        <KnowledgeAssistantHowItWorks />
        <KnowledgeAssistantWhyItMatters />
        <KnowledgeAssistantCta />
      </main>
      <Footer />
    </div>
  )
}
