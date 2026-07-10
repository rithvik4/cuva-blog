import { Briefcase, Settings, ShieldCheck, Code } from "lucide-react"

const audiences = [
  {
    icon: Briefcase,
    title: "Executives and business leaders",
  },
  {
    icon: Settings,
    title: "Operations and transformation teams",
  },
  {
    icon: ShieldCheck,
    title: "Risk, compliance, and governance stakeholders",
  },
  {
    icon: Code,
    title: "Product, platform, and AI teams",
  },
]

export function DemoWhoFor() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">Who the Demo Is For</h2>
          <p className="mt-4 text-center text-muted-foreground">
            This demo is designed for teams evaluating AI for production use, including:
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-5 border shadow-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#E5FAFE]">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-gray-900">{item.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            If you are exploring AI beyond pilots or experimentation, this session is for you.
          </p>
        </div>
      </div>
    </section>
  )
}
