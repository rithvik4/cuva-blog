import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PrivacyCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Ready to operate AI securely and compliantly?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-background text-primary hover:bg-background/90" asChild>
            <Link href="/demo">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            asChild
          >
            <Link href="/platform/built-for-enterprise">Explore Built for the Enterprise</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
