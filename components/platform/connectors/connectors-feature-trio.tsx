import { AppWindow, Landmark, Lock } from "lucide-react"

const features = [
  {
    icon: AppWindow,
    title: "Application Connectors",
    description:
      "Integrate CRM, collaboration platforms, file storage, communication tools, ticketing systems, and productivity apps.",
  },
  {
    icon: Landmark,
    title: "Financial Connectors",
    description: "Connect PMS, core banking, payments, KYC/AML systems, onboarding platforms, and financial CRMs.",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description:
      "Enterprise-grade authentication with OAuth, SSO, token-based security, permission inheritance, and RBAC alignment.",
  },
]

export function ConnectorsFeatureTrio() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Connector Capabilities</h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            From enterprise applications to specialized financial systems, connect everything your workflows need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E8E4FD] flex items-center justify-center mb-6">
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
