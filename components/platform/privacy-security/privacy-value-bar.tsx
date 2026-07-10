"use client"

import { Shield, Lock, Scale } from "lucide-react"

const pillars = [
  {
    icon: Shield,
    title: "Privacy",
    description: "Customer data ownership, tenant isolation, and explicit access governance.",
    href: "#privacy",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Enterprise-grade encryption, authorization, and access controls.",
    href: "#security",
  },
  {
    icon: Scale,
    title: "Compliance",
    description: "Regulatory alignment, audit readiness, and flexible data residency.",
    href: "#compliance",
  },
]

export function PrivacyValueBar() {
  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Our Approach</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cuva applies privacy-first principles, security-by-design controls, and compliance-aligned practices across
            the platform to help organizations operate AI systems responsibly in regulated environments.
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-muted/50 rounded-2xl border border-border p-8 md:p-10 shadow-sm">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">
            Three Pillars of Trust
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => handleClick(pillar.href)}
                className="group bg-background rounded-xl p-6 border border-border hover:border-primary hover:shadow-md transition-all duration-300 text-left cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Jump to section</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
