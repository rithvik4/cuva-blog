import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutWhatWeDo } from "@/components/about/about-what-we-do"
import { AboutDifferent } from "@/components/about/about-different"
import { AboutBuiltFor } from "@/components/about/about-built-for"
import { AboutWhoWeWorkWith } from "@/components/about/about-who-we-work-with"
import { AboutSnapshot } from "@/components/about/about-snapshot"
import { AboutCta } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <AboutHero />
      </PageHeroWrapper>
      <main>
        <AboutMission />
        <AboutWhatWeDo />
        <AboutDifferent />
        <AboutBuiltFor />
        <AboutWhoWeWorkWith />
        <AboutSnapshot />
        <AboutCta />
      </main>
      <Footer />
    </div>
  )
}
