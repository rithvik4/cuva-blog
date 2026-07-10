import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinancialConnectorsCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect Your Financial Systems?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Explore our connector ecosystem or talk to our team about your integration needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#593BEE] hover:bg-white/90">
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/platform/connectors">Explore Connectors</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/platform/connectors/application-connectors">See Application Connectors</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
