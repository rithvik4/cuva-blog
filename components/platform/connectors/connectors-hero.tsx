import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ConnectorsHero() {
  return (
    <section className="pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
            Connectors
          </h1>
          <p className="text-xl md:text-2xl text-[#593BEE] font-medium">
            A secure integration layer powering workflows and knowledge systems
          </p>
          <p className="text-lg md:text-xl text-[#3D3D4E] max-w-3xl mx-auto leading-relaxed">
            Connectors form a core integration layer of our AI-native platform. They support agent workflows and
            knowledge systems, allowing the platform to interact with enterprise systems securely and in line with
            compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button asChild size="lg" className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white">
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
