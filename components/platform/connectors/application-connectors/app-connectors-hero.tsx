import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AppConnectorsHero() {
  return (
    <section className="pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered layout with subtitle */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
            Application Connectors
          </h1>
          <p className="text-xl md:text-2xl text-[#593BEE] font-medium">
            Connect your enterprise applications securely and with ease.
          </p>
          <p className="text-lg md:text-xl text-[#3D3D4E] max-w-3xl mx-auto leading-relaxed">
            Application Connectors let you integrate your enterprise apps in just a few clicks and automate workflows
            across systems using secure, enterprise-grade integrations. A growing library of pre-built connectors helps
            you get started quickly without complex setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white" asChild>
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
