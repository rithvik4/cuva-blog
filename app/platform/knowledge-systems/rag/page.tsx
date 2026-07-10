import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { Footer } from "@/components/footer"
import { RagHero } from "@/components/platform/knowledge-systems/rag/rag-hero"
import { RagValueBar } from "@/components/platform/knowledge-systems/rag/rag-value-bar"
import { RagDefinition } from "@/components/platform/knowledge-systems/rag/rag-definition"
import { RagCapabilities } from "@/components/platform/knowledge-systems/rag/rag-capabilities"
import { RagHowItWorks } from "@/components/platform/knowledge-systems/rag/rag-how-it-works"
import { RagWhereUsed } from "@/components/platform/knowledge-systems/rag/rag-where-used"
import { RagWhyItMatters } from "@/components/platform/knowledge-systems/rag/rag-why-it-matters"
import { RagRelationship } from "@/components/platform/knowledge-systems/rag/rag-relationship"
import { RagCta } from "@/components/platform/knowledge-systems/rag/rag-cta"

export default function RagPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <RagHero />
      </PageHeroWrapper>
      <main>
        <RagValueBar />
        <RagDefinition />
        <RagCapabilities />
        <RagHowItWorks />
        <RagWhereUsed />
        <RagWhyItMatters />
        <RagRelationship />
        <RagCta />
      </main>
      <Footer />
    </div>
  )
}
