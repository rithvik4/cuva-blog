import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { SearchHero } from "@/components/platform/knowledge-systems/knowledge-search/search-hero"
import { SearchValueBar } from "@/components/platform/knowledge-systems/knowledge-search/search-value-bar"
import { SearchAgenticGraph } from "@/components/platform/knowledge-systems/knowledge-search/search-agentic-graph"
import { SearchFeatureTrio } from "@/components/platform/knowledge-systems/knowledge-search/search-feature-trio"
import { SearchVisualBlock } from "@/components/platform/knowledge-systems/knowledge-search/search-visual-block"
import { SearchHowItWorks } from "@/components/platform/knowledge-systems/knowledge-search/search-how-it-works"
import { SearchDeepFeature } from "@/components/platform/knowledge-systems/knowledge-search/search-deep-feature"
import { SearchProofBlock } from "@/components/platform/knowledge-systems/knowledge-search/search-proof-block"
import { SearchCta } from "@/components/platform/knowledge-systems/knowledge-search/search-cta"

export default function KnowledgeSearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <SearchHero />
      </PageHeroWrapper>
      <main>
        <SearchValueBar />
        <SearchAgenticGraph />
        <SearchFeatureTrio />
        <SearchVisualBlock />
        <SearchHowItWorks />
        <SearchDeepFeature />
        <SearchProofBlock />
        <SearchCta />
      </main>
      <Footer />
    </div>
  )
}
