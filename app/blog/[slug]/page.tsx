import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)

  await connectDB()

  // Fetch the current post (try both raw and decoded to be safe against spaces)
  const postDoc = await Post.findOne({
    $or: [
      { slug: slug },
      { slug: decodedSlug }
    ]
  }).lean()

  if (!postDoc) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-8 lg:py-12">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            ← Back to all posts
          </Link>

          {/* Post Header */}
          <header className="mb-8 pt-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.3] mb-5">
              {postDoc.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                <span>Author - {postDoc.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>Date - {postDoc.date}</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative w-full aspect-[21/9] lg:aspect-[2.5/1] rounded-2xl overflow-hidden mb-12 shadow-sm border border-border/50">
             {postDoc.image ? (
               <img src={postDoc.image} alt={postDoc.title} className="w-full h-full object-cover" />
             ) : (
               <div className={`w-full h-full bg-gradient-to-br ${postDoc.imageGradient} flex items-center justify-center p-8`}>
                 <div className="text-xl sm:text-3xl font-bold text-foreground/40 text-center px-4">
                   {postDoc.title.split(":")[0]}
                 </div>
               </div>
             )}
          </div>

          {/* Post Content */}
          <div className="mt-8">
            <div 
              className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: postDoc.content || "" }} 
            />
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}
