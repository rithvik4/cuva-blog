import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaStrip() {
  return (
    <section className="py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4 text-balance">
          Ready to Transform Your Financial Operations?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Learn how Cuva can automate financial workflows end-to-end.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all"
        >
          <Link href="/demo">
            Book a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
