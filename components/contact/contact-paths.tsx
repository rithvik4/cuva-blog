import { Mail, Briefcase, Users, TrendingUp } from "lucide-react"

const contactPaths = [
  {
    title: "General Inquiries",
    description: "For general questions, media inquiries, or anything not covered below.",
    email: "info@cuva.ai",
    icon: Mail,
  },
  {
    title: "Careers",
    description: "For open roles, applications, and career-related questions.",
    email: "jobs@cuva.ai",
    icon: Briefcase,
  },
  {
    title: "Sales",
    description: "For product questions, demos, and solution discussions.",
    email: "sales@cuva.ai",
    icon: Users,
  },
  {
    title: "Investors",
    description: "For investor relations and related inquiries.",
    email: "investor@cuva.ai",
    icon: TrendingUp,
  },
]

export function ContactPaths() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] text-center mb-12">Contact Paths</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactPaths.map((path) => (
            <div
              key={path.title}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-4">
                <path.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#0F0D1A] mb-2">{path.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
              <a href={`mailto:${path.email}`} className="text-sm font-medium text-primary hover:underline">
                {path.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
