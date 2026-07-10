import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AppConnectorsCta() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to connect your enterprise applications?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Unify your business tools and enable intelligent workflows across your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#593BEE] hover:bg-white/90" asChild>
            <Link href="/demo">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <Link href="/platform/connectors">Explore Connectors</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <Link href="/platform/connectors/financial-connectors">See Financial Connectors</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
