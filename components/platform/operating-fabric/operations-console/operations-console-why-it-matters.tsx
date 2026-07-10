import { CheckCircle } from "lucide-react"

const benefits = [
  "Faster incident investigation",
  "Strong audit and compliance posture",
  "Operational confidence at scale",
  "Reduced downtime and errors",
]

export function OperationsConsoleWhyItMatters() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Why It Matters</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Without an operations console, agentic automation becomes opaque and risky. With Cuva's Operations
              Console, every execution is observable, traceable, and governable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-[#80E9FF] flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
