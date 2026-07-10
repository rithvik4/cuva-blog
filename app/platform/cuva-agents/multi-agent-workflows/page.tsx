import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { OrchestrationHero } from "@/components/platform/cuva-agents/agent-orchestration/orchestration-hero"
import { OrchestrationValueBar } from "@/components/platform/cuva-agents/agent-orchestration/orchestration-value-bar"
import { OrchestrationWorkflowComponents } from "@/components/platform/cuva-agents/agent-orchestration/orchestration-workflow-components"
import { OrchestrationLifecycle } from "@/components/platform/cuva-agents/agent-orchestration/orchestration-lifecycle"
import { OrchestrationWhyMatters } from "@/components/platform/cuva-agents/agent-orchestration/orchestration-why-matters"
import { OrchestrationRelationship } from "@/components/platform/cuva-agents/agent-orchestration/orchestration-relationship"
import { OrchestrationCta } from "@/components/platform/cuva-agents/agent-orchestration/orchestration-cta"

export default function MultiAgentWorkflowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <OrchestrationHero />
      </PageHeroWrapper>
      <main>
        <OrchestrationValueBar />
        <OrchestrationWorkflowComponents />
        <OrchestrationLifecycle />
        <OrchestrationWhyMatters />
        <OrchestrationRelationship />
        <OrchestrationCta />
      </main>
      <Footer />
    </div>
  )
}
