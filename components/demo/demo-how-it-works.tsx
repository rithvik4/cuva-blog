const steps = [
  {
    number: "1",
    title: "Guided Walkthrough",
    description: "A live session led by our team",
  },
  {
    number: "2",
    title: "Focused Discussion",
    description: "Centered on how Cuva supports financial enterprise customers",
  },
  {
    number: "3",
    title: "Q&A Session",
    description: "Time for questions and discussion. Typical duration: 30–45 minutes",
  },
]

export function DemoHowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">How the Demo Works</h2>
          <div className="mt-12 relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg z-10">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
