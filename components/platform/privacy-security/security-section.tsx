import { Lock, Key, Shield, UserCheck } from "lucide-react"

const securityControls = [
  {
    icon: Lock,
    title: "Encryption (AES)",
    description:
      "Sensitive data is encrypted using industry-standard AES encryption to protect data at rest and in transit.",
  },
  {
    icon: Key,
    title: "JWT-based authorization",
    description:
      "Access to platform resources is controlled through token-based authorization, enabling secure and auditable access for users, agents, and services.",
  },
  {
    icon: Shield,
    title: "Role-based access control (RBAC)",
    description:
      "Access to platform capabilities can be restricted based on defined roles and responsibilities, helping enforce least-privilege access across users, agents, and workflows.",
  },
  {
    icon: UserCheck,
    title: "OAuth consent-based access",
    description:
      "OAuth-based consent mechanisms ensure controlled and explicit access when connecting external systems and integrations.",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Security</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cuva implements enterprise-grade security controls to protect data, systems, and access across the platform.
          </p>
          <h3 className="font-semibold text-xl text-foreground mb-6">Security controls</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityControls.map((control, index) => (
              <div key={index} className="bg-muted/30 rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <control.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-2">{control.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{control.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
