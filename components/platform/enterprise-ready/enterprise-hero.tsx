import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function EnterpriseHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: "40%",
          height: "50%",
          background: "linear-gradient(135deg, rgba(89,59,238,0.5) 0%, rgba(128,233,255,0.5) 100%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-primary font-medium text-lg">Built for the Enterprise</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Designed to operate in complex financial enterprises at scale
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cuva is designed to support mission-critical operations across large and complex financial organizations.
            From deployment flexibility to operational governance, the platform meets the needs of enterprise IT,
            platform, and financial operations teams.
          </p>
          <div className="flex justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
            >
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
