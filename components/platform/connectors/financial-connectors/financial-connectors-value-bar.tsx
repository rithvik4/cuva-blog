import { Link2, RefreshCw, Shield } from "lucide-react"

const pillars = [
  {
    icon: Link2,
    title: "Deep financial system connectivity",
    description:
      "Connect directly with core banking, payments, wealth management, and compliance platforms through pre-built integrations designed for complex financial environments.",
  },
  {
    icon: RefreshCw,
    title: "Real-time financial updates",
    description:
      "Access up-to-date, real-time financial information, ensuring workflows and decisions are always based on current data.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade security and access control",
    description:
      "All connections follow strict security standards, with controlled access, permission enforcement, and audit-ready operations across regulated financial systems.",
  },
]

export function FinancialConnectorsValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Built for secure, real-time financial operations
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Financial Connectors provide a reliable integration layer that connects core financial systems, keeps data
            up to date in real time, and enforces enterprise-grade security and access controls across all financial
            workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-[#E5E5E5] hover:shadow-md hover:border-[#593BEE]/30 transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-10 h-10 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0F0D1A] mb-3">{pillar.title}</h3>
              <p className="text-[#3D3D4E] text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
