import { Target, Users, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Purpose-Built",
    description: "Purpose-built for wealth management workflows",
  },
  {
    icon: Users,
    title: "Advisor & Client Operations",
    description: "Automates advisor and client-facing operations",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Governance",
    description: "Enterprise-grade governance and compliance",
  },
]

export function WealthValueBar() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#E5FAFE] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
