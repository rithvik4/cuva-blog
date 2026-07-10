import { Building2, Users, Link, Shield } from "lucide-react"

export function AboutBuiltFor() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] sm:text-4xl mb-6">
            Built for the Financial Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuva is designed with the realities of financial institutions in mind.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#F4F4F7] rounded-xl p-6 border">
            <div className="w-12 h-12 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">Built for Regulated Environments</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed to meet the stringent requirements of financial regulators worldwide.
            </p>
          </div>
          <div className="bg-[#F4F4F7] rounded-xl p-6 border">
            <div className="w-12 h-12 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">Multi-Party Workflows</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed to support complex workflows involving multiple stakeholders and systems.
            </p>
          </div>
          <div className="bg-[#F4F4F7] rounded-xl p-6 border">
            <div className="w-12 h-12 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-4">
              <Link className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">Enterprise Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Integrates seamlessly with existing enterprise systems and technology stacks.
            </p>
          </div>
          <div className="bg-[#F4F4F7] rounded-xl p-6 border">
            <div className="w-12 h-12 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">Security & Auditability</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Emphasizes security, auditability, and operational control at every level.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
