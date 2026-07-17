import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedPost } from "@/components/blog/featured-post"
import { BlogList } from "@/components/blog/blog-list"
import { listPosts } from "@/lib/blog-store"

// Make the page dynamic so it fetches fresh data
export const dynamic = "force-dynamic"

export default async function BlogPage() {
  const allPosts = await listPosts()

  // Format for the client
  const formattedPosts = allPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    author: post.author,
    date: post.date,
    href: post.slug.startsWith("http") ? post.slug : `/blog/${post.slug}`,
    category: post.category === "INFOGRAPHICS" ? "BLOGS" : post.category,
    imageGradient: post.imageGradient,
    image: post.image || undefined,
  }))

  // Prefer a BLOGS item for the featured slot so category tabs can still show
  // posts created in other categories.
  const featuredPost = formattedPosts.find((post) => post.category === "BLOGS") || (formattedPosts[0] ?? null)
  // Keep all posts in the grid so the featured post also appears in its category tab.
  const gridPosts = formattedPosts

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
