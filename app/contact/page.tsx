import { Footer } from "@/components/footer"
import { PageHeroWrapper } from "@/components/shared/page-hero-wrapper"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactPaths } from "@/components/contact/contact-paths"
import { ContactOffices } from "@/components/contact/contact-offices"
import { ContactFooterLine } from "@/components/contact/contact-footer-line"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeroWrapper>
        <ContactHero />
      </PageHeroWrapper>
      <main>
        <ContactPaths />
        <ContactOffices />
        <ContactFooterLine />
      </main>
      <Footer />
    </div>
  )
}
