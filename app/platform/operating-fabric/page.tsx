import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { OperatingFabricHero } from "@/components/platform/operating-fabric/operating-fabric-hero"
import { OperatingFabricValueBar } from "@/components/platform/operating-fabric/operating-fabric-value-bar"
import { OperatingFabricDefinition } from "@/components/platform/operating-fabric/operating-fabric-definition"
import { OperatingFabricCapabilities } from "@/components/platform/operating-fabric/operating-fabric-capabilities"
import { OperatingFabricHowItWorks } from "@/components/platform/operating-fabric/operating-fabric-how-it-works"
import { OperatingFabricWhyItMatters } from "@/components/platform/operating-fabric/operating-fabric-why-it-matters"
import { OperatingFabricRelationship } from "@/components/platform/operating-fabric/operating-fabric-relationship"
import { OperatingFabricCta } from "@/components/platform/operating-fabric/operating-fabric-cta"

export default function OperatingFabricPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <OperatingFabricHero />
      </PageHeroWrapper>
      <main>
        <OperatingFabricValueBar />
        <OperatingFabricDefinition />
        <OperatingFabricCapabilities />
        <OperatingFabricHowItWorks />
        <OperatingFabricWhyItMatters />
        <OperatingFabricRelationship />
        <OperatingFabricCta />
      </main>
      <Footer />
    </div>
  )
}
