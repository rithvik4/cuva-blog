import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { OperationsConsoleHero } from "@/components/platform/operating-fabric/operations-console/operations-console-hero"
import { OperationsConsoleValueBar } from "@/components/platform/operating-fabric/operations-console/operations-console-value-bar"
import { OperationsConsoleDefinition } from "@/components/platform/operating-fabric/operations-console/operations-console-definition"
import { OperationsConsoleCapabilities } from "@/components/platform/operating-fabric/operations-console/operations-console-capabilities"
import { OperationsConsoleHowItWorks } from "@/components/platform/operating-fabric/operations-console/operations-console-how-it-works"
import { OperationsConsoleWhyItMatters } from "@/components/platform/operating-fabric/operations-console/operations-console-why-it-matters"
import { OperationsConsoleLayout } from "@/components/platform/operating-fabric/operations-console/operations-console-layout"
import { OperationsConsoleCta } from "@/components/platform/operating-fabric/operations-console/operations-console-cta"

export default function OperationsConsolePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <OperationsConsoleHero />
      </PageHeroWrapper>
      <main>
        <OperationsConsoleValueBar />
        <OperationsConsoleDefinition />
        <OperationsConsoleCapabilities />
        <OperationsConsoleHowItWorks />
        <OperationsConsoleWhyItMatters />
        <OperationsConsoleLayout />
        <OperationsConsoleCta />
      </main>
      <Footer />
    </div>
  )
}
