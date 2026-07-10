import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedPost } from "@/components/blog/featured-post"
import { BlogList } from "@/components/blog/blog-list"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"

// Make the page dynamic so it fetches fresh data
export const dynamic = "force-dynamic"

export default async function BlogPage() {
  await connectDB()

  // Fetch all posts, lean() converts Mongoose objects to plain JS objects
  const allPosts = await Post.find({}).sort({ createdAt: -1 }).lean()

  // Format for the client
  const formattedPosts = allPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    author: post.author,
    date: post.date,
    href: post.slug.startsWith("http") ? post.slug : `/blog/${post.slug}`,
    category: post.category,
    imageGradient: post.imageGradient,
  }))

  // The featured post could be the latest post or a specific one. 
  // Let's use the first one as featured, and the rest for the grid.
  const featuredPost = formattedPosts.length > 0 ? formattedPosts[0] : null
  const gridPosts = formattedPosts.length > 1 ? formattedPosts.slice(1) : []

  return (
    <div className="min-h-screen bg-background flex flex-col" suppressHydrationWarning>
      <Header />

      <main className="flex-1 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {featuredPost && <FeaturedPost post={featuredPost} />}
          <BlogList initialPosts={gridPosts} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
