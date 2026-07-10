import { Shield, Users, Link2, Rocket } from "lucide-react"

const trustSignals = [
  { icon: Shield, text: "Designed for regulated financial institutions" },
  { icon: Users, text: "Supports complex, multi-party SCF programs" },
  { icon: Link2, text: "Integrates with ERP, banking, and payment systems" },
  { icon: Rocket, text: "Production-ready from day one" },
]

export function SCFSolutionsEnterprise() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-white mb-12">Enterprise Readiness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <signal.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="text-white/90">{signal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
