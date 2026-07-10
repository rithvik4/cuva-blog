import { Link2, Workflow, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Link2,
    title: "Connect Core Enterprise Applications",
    description: "Integrate CRM, communication, documentation, and storage platforms seamlessly.",
  },
  {
    icon: Workflow,
    title: "Enable Cross-System Workflows",
    description: "Power automated workflows that span multiple applications and data sources.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication & Control",
    description: "OAuth, token-based security, and permission inheritance for enterprise-grade access.",
  },
]

export function AppConnectorsValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Growing Ecosystem of Connectors
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Cuva's connector ecosystem expands continuously, adding new application categories and deeper integrations
            across enterprise tools.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E5] rounded-xl p-8 hover:shadow-lg hover:border-[#593BEE] transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-10 h-10 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
