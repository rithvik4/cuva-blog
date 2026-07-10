import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function DemoSchedule() {
  return (
    <section id="schedule" className="py-20 bg-[#F7F8F9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Schedule Your Demo</h2>
          <p className="mt-4 text-muted-foreground">Use the scheduling link below to book a session with our team.</p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
              <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Demo
              </Link>
            </Button>
          </div>
          <div className="mt-12 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2gNaj0iwH_1JWP3ql44f5QO3Gq-3tAhg8DHsbvBjQ_IjeHsYpL4MZfnVVwfCKStdNLsW_UT3sv?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Schedule a Demo with Cuva AI"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
