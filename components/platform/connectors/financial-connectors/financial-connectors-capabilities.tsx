import { CreditCard, Users, Building, ShieldCheck, Landmark, TrendingUp } from "lucide-react"

const capabilities = [
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Connect PayPal, Stripe, MasterCard, Visa API, and other payment networks for automated payouts, collections, and transaction processing.",
  },
  {
    icon: Users,
    title: "Financial CRM",
    description:
      "Integrate systems like WealthBox, Salesforce, Advyzon, and Advisor Engine to unify client profiles, portfolios, and advisory workflows.",
  },
  {
    icon: Building,
    title: "Open Banking",
    description:
      "Connect Plaid, Yodlee, and similar providers to access bank accounts, balances, transactions, and financial data securely.",
  },
  {
    icon: ShieldCheck,
    title: "KYC / AML",
    description:
      "Integrate LexisNexis, Alloy, ID.me, Onfido, Incode, Jumio, and Socure for verification, identity checks, and risk/compliance workflows.",
  },
  {
    icon: Landmark,
    title: "Core Banking",
    description:
      "Connect FIS Core Banking, Fiserv DNA, Fiserv Signature, Fiserv Premier, and Mambu to access real-time banking operations with full auditability.",
  },
  {
    icon: TrendingUp,
    title: "Wealth Management",
    description:
      "Integrate BlackRock Aladdin, Charles River IMS, SimCorp Dimension, Orion Advisor, and Black Diamond to enable portfolio insights and wealth operations.",
  },
]

export function FinancialConnectorsCapabilities() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Connector Capabilities</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Enterprise-grade integrations across your entire financial ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-[#E5E5E5] hover:shadow-md hover:border-[#593BEE]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-5">
                <capability.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0F0D1A] mb-3">{capability.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
