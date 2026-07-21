import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHomeClient } from "../../components/blog/blog-home-client"

// Make the page dynamic so it fetches fresh data
export const dynamic = "force-dynamic"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col" suppressHydrationWarning>
      <Header />

      <main className="flex-1 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogHomeClient />
        </div>
      </main>

      <Footer />
    </div>
  )
}
