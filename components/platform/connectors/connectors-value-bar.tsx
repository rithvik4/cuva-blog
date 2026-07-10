import { Plug, Library, Shield } from "lucide-react"

const values = [
  {
    icon: Plug,
    title: "Easy to connect",
    description:
      "Pre-built connectors and standard authentication methods make it straightforward to connect enterprise and financial systems without heavy custom integration work.",
  },
  {
    icon: Library,
    title: "Growing library of connectors",
    description:
      "A continuously expanding set of application and financial connectors ensures the platform can adapt as enterprise systems and requirements evolve.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade security",
    description:
      "All connections follow enterprise security standards, including authentication, permission controls, and compliance requirements across regulated environments.",
  },
]

export function ConnectorsValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Secure enterprise connectivity
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            A flexible connector layer that makes it easy to integrate enterprise and financial systems, while
            maintaining security, control, and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E8E4FD] flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{value.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
