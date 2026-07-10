import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function EnterpriseCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
          Ready to operate AI at enterprise scale?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-background hover:bg-background/90 text-primary font-semibold px-6">
            <Link href="/demo">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-6 bg-transparent"
          >
            <Link href="/platform/privacy-security">Explore Privacy, Security & Compliance</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
