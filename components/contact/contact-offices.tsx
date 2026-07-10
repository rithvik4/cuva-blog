import Image from "next/image"
import { MapPin } from "lucide-react"

const offices = [
  {
    country: "United States",
    image: "/golden-gate-bridge.png",
    address: ["Plug and Play Tech Center", "440 N Wolfe Rd", "Sunnyvale, CA 94085", "United States"],
  },
  {
    country: "United Arab Emirates",
    image: "/burj-al-arab-dubai-skyline.jpg",
    address: ["IFZA Business Park, Building A1", "Dubai Digital Park", "Dubai Silicon Oasis", "United Arab Emirates"],
  },
  {
    country: "Sweden",
    image: "/stockholm-city-hall-sweden.jpg",
    address: ["Regeringsgatan 25", "111 53 Stockholm", "Sweden"],
  },
]

export function ContactOffices() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] text-center mb-4">Our Offices</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Cuva operates as a globally distributed company. Meetings and communications are handled across regions to
          best support customers, partners, and stakeholders.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div
              key={office.country}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image src={office.image || "/placeholder.svg"} alt={office.country} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-lg font-semibold text-[#0F0D1A]">{office.country}</h3>
                </div>
                <div className="space-y-1">
                  {office.address.map((line, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
