import { PlatformOverviewHeroWrapper } from "@/components/platform/overview/platform-overview-hero-wrapper"
import { PlatformOverview } from "@/components/sections/platform-overview"
import { Footer } from "@/components/footer"
import { PlatformWhySection } from "@/components/platform/overview/platform-why-section"
import { PlatformToolSprawl } from "@/components/platform/overview/platform-tool-sprawl"
import { PlatformWhereTeamsStart } from "@/components/platform/overview/platform-where-teams-start"
import { PlatformWhatEnables } from "@/components/platform/overview/platform-what-enables"
import { PlatformRegulatedReality } from "@/components/platform/overview/platform-regulated-reality"
import { PlatformHowItWorks } from "@/components/platform/overview/platform-how-it-works"
import { PlatformDifferentiators } from "@/components/platform/overview/platform-differentiators"
import { PlatformBuiltForFinancial } from "@/components/platform/overview/platform-built-for-financial"
import { PlatformCtaFooter } from "@/components/platform/overview/platform-cta-footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function PlatformOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <PlatformOverviewHeroWrapper />
      <main>
        <PlatformOverview />
        <PlatformWhySection />
        <PlatformToolSprawl />
        <PlatformWhereTeamsStart />
        <PlatformWhatEnables />
        <PlatformRegulatedReality />
        <PlatformHowItWorks />
        <PlatformDifferentiators />
        <PlatformBuiltForFinancial />
        <PlatformCtaFooter />
      </main>
      <Footer />
    </div>
  )
}
