import { Check, X } from "lucide-react"

const thisIs = [
  "A live, guided walkthrough",
  "Focused on business outcomes and real use cases",
  "Adapted to your industry and priorities",
]

const thisIsNot = ["A generic sales pitch", "A one-size-fits-all product tour", "A theoretical AI discussion"]

export function DemoWhatIsIsnt() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">What This Is and Isn't</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* This Is */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">This is:</h3>
              <ul className="space-y-3">
                {thisIs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* This Is Not */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">This is not:</h3>
              <ul className="space-y-3">
                {thisIsNot.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
