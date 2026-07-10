import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { DemoHero } from "@/components/demo/demo-hero"
import { DemoWhatYouSee } from "@/components/demo/demo-what-you-see"
import { DemoWhoFor } from "@/components/demo/demo-who-for"
import { DemoWhatIsIsnt } from "@/components/demo/demo-what-is-isnt"
import { DemoHowItWorks } from "@/components/demo/demo-how-it-works"
import { DemoSchedule } from "@/components/demo/demo-schedule"
import { DemoReassurance } from "@/components/demo/demo-reassurance"

export default function BookDemoPage() {
  return (
    <>
      <PageHeroWrapper>
        <DemoHero />
      </PageHeroWrapper>
      <DemoSchedule />
      <DemoWhatYouSee />
      <DemoWhoFor />
      <DemoWhatIsIsnt />
      <DemoHowItWorks />
      <DemoReassurance />
    </>
  )
}
