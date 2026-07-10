import { Workflow, Brain, Shield, Users } from "lucide-react"

const highlights = [
  {
    icon: Workflow,
    text: "How AI-driven workflows operate end to end in financial environments",
  },
  {
    icon: Brain,
    text: "How enterprise context and knowledge are applied to real decisions",
  },
  {
    icon: Shield,
    text: "How governance is built into execution by default",
  },
  {
    icon: Users,
    text: "How Cuva supports financial enterprise customers",
  },
]

export function DemoWhatYouSee() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">What You'll See in the Demo</h2>
          <p className="mt-4 text-center text-muted-foreground">
            This demo is tailored to your context and focuses on real financial workflows rather than generic product
            tours.
          </p>
          <p className="mt-6 text-center text-sm font-medium text-gray-700">During the session, we typically cover:</p>
          <div className="mt-8 space-y-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-5 border shadow-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#E5FAFE]">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-gray-700 pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
