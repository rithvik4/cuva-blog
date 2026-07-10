import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Consistent data across teams",
  "Faster automation deployment",
  "Reduced engineering effort",
  "Secure read/write operations",
]

export function ConnectorsDeepFeature() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
              One integration layer for your entire financial stack
            </h2>
            <p className="text-lg text-[#3D3D4E] mb-8 leading-relaxed">
              Cuva's connectors eliminate silos and enable workflows to span multiple systems effortlessly.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#593BEE] flex-shrink-0" />
                  <span className="text-[#3D3D4E] text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/unified-data-integration-layer-connecting-multiple.jpg" alt="Unified integration layer" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#593BEE]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
