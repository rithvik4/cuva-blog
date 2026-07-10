import { Database, Zap, Code, Lock } from "lucide-react"

const benefits = [
  { icon: Database, text: "Consistent data across teams" },
  { icon: Zap, text: "Faster automation deployment" },
  { icon: Code, text: "Reduced engineering effort" },
  { icon: Lock, text: "Secure read/write operations" },
]

export function ConnectorsIntegrationValue() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            One integration layer for your entire financial stack
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Cuva's connectors eliminate silos and enable workflows to span multiple systems effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-[#F4F4F7] hover:bg-[#E8E4FD]/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8E4FD] flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#593BEE]" />
              </div>
              <p className="text-[#0F0D1A] font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
