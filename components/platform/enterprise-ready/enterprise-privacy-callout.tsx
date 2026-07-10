import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export function EnterprisePrivacyCallout() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Privacy, Security & Compliance
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Cuva is designed with strong privacy, security, and compliance foundations suitable for regulated financial
            environments. Detailed information about security controls, certifications, and compliance posture is
            provided separately.
          </p>
          <Button asChild variant="outline" className="font-semibold bg-transparent">
            <Link href="/platform/privacy-security">
              Learn more: Privacy, Security & Compliance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
