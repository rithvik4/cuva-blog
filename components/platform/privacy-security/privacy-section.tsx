import { Check } from "lucide-react"

const privacyPoints = [
  "Customer data remains the property of the customer",
  "Data is isolated by tenant and environment",
  "Customer data is not used to train shared models",
  "Data access is governed by explicit permissions and policies",
]

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Privacy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cuva is built to ensure customers retain control over their data at all times.
          </p>
          <ul className="space-y-4">
            {privacyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
