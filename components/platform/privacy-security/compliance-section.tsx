import { Check, FileCheck, ClipboardList, Users, Globe } from "lucide-react"

const complianceAlignment = ["SOC 2 Type II aligned", "ISO 27001 aligned", "GDPR ready"]

const auditReadiness = [
  "Detailed execution and access logs",
  "Change history and control documentation",
  "Support for internal and external audit processes",
]

export function ComplianceSection() {
  return (
    <section id="compliance" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Compliance</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cuva is designed to support regulatory and compliance requirements commonly found in financial and
            enterprise environments.
          </p>

          {/* Compliance Alignment */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">Compliance alignment & readiness</h3>
            </div>
            <ul className="space-y-3 ml-13">
              {complianceAlignment.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4 ml-13">
              Cuva aligns with widely adopted security and privacy frameworks. Formal certifications are supported
              through documented controls and audit-ready processes.
            </p>
          </div>

          {/* Audit Readiness */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">Audit readiness & assurance</h3>
            </div>
            <ul className="space-y-3 ml-13">
              {auditReadiness.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shared Responsibility */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">Shared responsibility model</h3>
            </div>
            <p className="text-muted-foreground ml-13">
              Cuva provides the platform-level controls and safeguards, while customers retain responsibility for
              configuring workflows, access policies, and regulatory usage in line with their obligations.
            </p>
          </div>

          {/* Data Residency */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">Data residency & regulatory flexibility</h3>
            </div>
            <p className="text-muted-foreground ml-13">
              Cuva supports flexible deployment models and data residency configurations to help customers meet local
              regulatory and jurisdictional requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
