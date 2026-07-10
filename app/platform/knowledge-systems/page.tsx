import { KnowledgeHeroWrapper } from "@/components/platform/knowledge-systems/knowledge-hero-wrapper"
import { Footer } from "@/components/footer"
import { KnowledgeComponents } from "@/components/platform/knowledge-systems/knowledge-components"
import { KnowledgeWhyMatters } from "@/components/platform/knowledge-systems/knowledge-why-matters"
import { KnowledgeSystemModel } from "@/components/platform/knowledge-systems/knowledge-system-model"
import { KnowledgeAgenticDesign } from "@/components/platform/knowledge-systems/knowledge-agentic-design"
import { KnowledgeWhereUsed } from "@/components/platform/knowledge-systems/knowledge-where-used"
import { KnowledgeCtaFooter } from "@/components/platform/knowledge-systems/knowledge-cta-footer"

export default function KnowledgeSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      <KnowledgeHeroWrapper />
      <main>
        <KnowledgeComponents />
        <KnowledgeWhyMatters />
        <KnowledgeSystemModel />
        <KnowledgeAgenticDesign />
        <KnowledgeWhereUsed />
        <KnowledgeCtaFooter />
      </main>
      <Footer />
    </div>
  )
}
