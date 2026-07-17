import Link from "next/link"
import Image from "next/image"
import { PenSquare } from "lucide-react"
import { deletePostById, listPosts } from "@/lib/blog-store"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { BlogAdminForm } from "@/components/blog/blog-admin-form"
import { DeletePostButton } from "@/components/blog/delete-post-button"
import { normalizeBlogSections } from "@/lib/blog-content"

async function deletePost(formData: FormData) {
  "use server"

  const postId = (formData.get("postId") as string)?.trim()

  if (!postId) {
    throw new Error("Invalid post id")
  }

  await deletePostById(postId)
}

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<{ edit?: string }> }) {
  const resolvedSearchParams = await searchParams
  const editId = resolvedSearchParams?.edit

  const posts = await listPosts()

  const editingPost = editId
    ? posts.find((post) => post.id === editId) || null
    : null

  const initialSections = normalizeBlogSections(editingPost?.sections || [])

  return (
    <div className="h-screen overflow-hidden flex bg-background">

      {/* LEFT SIDEBAR */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col hidden md:flex">
        <div className="p-8 pb-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/cuva-black.png" alt="Cuva AI" width={120} height={32} className="h-8 w-auto" />
          </Link>
        </div>
        
        <nav className="flex-1 p-4 mt-2">
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-3 px-4 py-3 bg-[#EEECF9] text-[#5B3CF5] rounded-xl font-semibold text-sm">
                <PenSquare className="h-4 w-4" />
                Blog post upload
              </div>
            </li>
          </ul>
        </nav>
        
        <div className="p-6">
          <form action={async () => {
            "use server"
            const cookieStore = await cookies()
            cookieStore.delete("admin_token")
            redirect("/blog/admin/login")
          }}>
            <button type="submit" className="flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors w-full text-left">
              <div className="bg-[#2D2D2D] text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">N</div>
              <span className="font-medium text-sm">Sign Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="p-8 lg:p-12 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-6 items-start">
          <BlogAdminForm
            editingPost={
              editingPost
                ? {
                    _id: editingPost.id,
                    title: editingPost.title,
                    slug: editingPost.slug,
                    excerpt: editingPost.excerpt,
                    sections: editingPost.sections || [],
                    author: editingPost.author,
                    category: editingPost.category,
                    image: editingPost.image || null,
                  }
                : null
            }
            initialSections={initialSections}
          />

          <aside className="border border-slate-200 rounded-[24px] p-5 shadow-sm bg-white xl:sticky xl:top-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Previous Blogs</h2>
              {editingPost ? (
                <Link href="/blog/admin" className="text-sm font-medium text-[#5B3CF5] hover:text-[#4329c9]">
                  Cancel
                </Link>
              ) : null}
            </div>

            {posts.length === 0 ? (
              <p className="text-sm text-slate-500">No blog posts found yet.</p>
            ) : (
              <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
                {posts.map((post) => (
                  <div key={post.id} className="border border-slate-200 rounded-xl p-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">{post.title}</p>
                      <p className="text-xs text-slate-500 truncate">/{post.slug} • {post.date}</p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <Link
                        href={`/blog/admin?edit=${post.id}`}
                        className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-[#EEF2FF] text-[#4338CA] hover:bg-[#E0E7FF]"
                        title="Edit post"
                        aria-label="Edit post"
                      >
                        <PenSquare className="h-3.5 w-3.5" />
                      </Link>
                      <DeletePostButton postId={post.id} postTitle={post.title} deleteAction={deletePost} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  )
}
