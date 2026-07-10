import { ShieldCheck, Server, ClipboardList } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with encryption, access controls, permissions, audit logs, and alignment with SOC, ISO, and GDPR.",
  },
  {
    icon: Server,
    title: "Deployment Flexibility",
    description:
      "Deploy in cloud, hybrid, or VPC environments with strict boundary controls and minimal integration overhead.",
  },
  {
    icon: ClipboardList,
    title: "Audit Trail",
    description:
      "Track all agent actions, model activity, system changes, and workflow events with immutable logs to ensure transparency, traceability, and compliance.",
  },
]

export function EnterpriseFeatureTrio() {
  return (
    <section id="capabilities" className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Enterprise-Grade Capabilities
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Built for regulated financial institutions that demand the highest standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{feature.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
