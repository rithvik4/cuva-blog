import { Shield, FileCheck, Building2 } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "Permission-aware results and actions",
  },
  {
    icon: FileCheck,
    title: "Audit-ready outputs and logs",
  },
  {
    icon: Building2,
    title: "Enterprise governance alignment",
  },
]

export function CuvabotTrustBlock() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Built for finance and compliance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="text-white font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
