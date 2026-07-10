import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinancialConnectorsHero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight mb-4">
          Financial Connectors
        </h1>
        <p className="text-xl md:text-2xl text-[#593BEE] font-medium mb-6">
          Powering secure, enterprise-grade financial automation
        </p>
        <p className="text-lg md:text-xl text-[#3D3D4E] max-w-3xl mx-auto leading-relaxed mb-8">
          Our Financial Connectors enable complex financial workflow automation by integrating deeply with leading
          financial systems, including wealth management platforms, payment networks, and core banking systems. With
          pre-built, enterprise-grade integrations, automating financial operations becomes significantly simpler and
          more reliable.
        </p>
        <Button asChild size="lg" className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white">
          <Link href="/demo">
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
