import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ConnectorsCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Connect Your Enterprise Systems</h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          See how Cuva's connectors can unify your application and financial data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#593BEE]">
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
            <Link href="/platform/connectors/application-connectors">Explore Application Connectors</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="/platform/connectors/financial-connectors">See Financial Connectors</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
