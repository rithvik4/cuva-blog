import { Building2, Briefcase, CreditCard, Truck, Settings } from "lucide-react"

const segments = [
  { icon: Briefcase, label: "Wealth Management" },
  { icon: Building2, label: "Banking" },
  { icon: CreditCard, label: "Payments" },
  { icon: Truck, label: "Supply Chain Finance" },
  { icon: Settings, label: "Operations" },
]

export function PlatformBuiltForFinancial() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Financial Enterprises</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Cuva supports financial enterprises across wealth management, banking, payments, supply chain finance, and
            operations, providing a shared platform for intelligence, automation, and control.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {segments.map((segment) => (
              <div
                key={segment.label}
                className="flex items-center gap-2 px-5 py-3 bg-[#F7F8F9] rounded-full border border-gray-200"
              >
                <segment.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-700">{segment.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
