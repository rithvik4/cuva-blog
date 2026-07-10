import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PrivacyHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Privacy, Security & Compliance
          </h1>
          <p className="text-lg text-muted-foreground">
            Built to meet the privacy, security, and compliance needs of financial institutions
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Cuva is designed to meet the privacy, security, and compliance requirements of financial institutions and
            regulated enterprises. The platform provides strong safeguards, clear responsibility boundaries, and
            audit-ready capabilities to support secure and compliant operations.
          </p>
          <div className="flex justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
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
