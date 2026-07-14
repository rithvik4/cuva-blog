import Link from "next/link"
import Image from "next/image"
import { PenSquare, User, Layers, AlignLeft, Type, PlusCircle, Pencil } from "lucide-react"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"
import { Image as DBImage } from "@/lib/Image"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { ImageUpload } from "@/components/blog/image-upload"
import { BlogSectionsBuilder } from "@/components/blog/blog-sections-builder"
import { DeletePostButton } from "@/components/blog/delete-post-button"
import { buildBlogHtmlFromSections, normalizeBlogSections, parseBlogSectionsField, sanitizeBlogHtml } from "@/lib/blog-content"
import { generateUniquePostSlug, normalizeCategory, slugifyTitle } from "@/lib/post-utils"
import mongoose from "mongoose"

async function saveUploadedImage(imageFile: File, altText: string) {
  const MAX_UPLOAD_SIZE = 5 * 1024 * 1024
  const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"])

  if (imageFile.size > MAX_UPLOAD_SIZE) {
    throw new Error("Image must be 5MB or smaller")
  }

  if (!ALLOWED_IMAGE_TYPES.has(imageFile.type)) {
    throw new Error("Unsupported image format")
  }

  const bytes = await imageFile.arrayBuffer()
  const fileData = new DataView(bytes)

  const uploadDir = join(process.cwd(), "public/uploads")
  try {
    await mkdir(uploadDir, { recursive: true })
  } catch {}

  const safeOriginalName = imageFile.name.replace(/[^a-zA-Z0-9._-]/g, "-")
  const filename = `${Date.now()}-${safeOriginalName}`
  const filepath = join(uploadDir, filename)

  await writeFile(filepath, fileData)
  const imagePath = `/uploads/${filename}`

  const newDbImage = new DBImage({
    name: safeOriginalName,
    url: imagePath,
    altText,
  })
  await newDbImage.save()

  return imagePath
}

async function createPost(formData: FormData) {
  "use server"

  await connectDB()

  const postId = (formData.get("postId") as string)?.trim()
  const title = (formData.get("title") as string)?.trim()
  const excerpt = (formData.get("excerpt") as string)?.trim()
  const sections = parseBlogSectionsField(formData.get("sections"))
  const author = (formData.get("author") as string)?.trim()
  const category = normalizeCategory((formData.get("category") as string) || "BLOGS")
  const imageFile = formData.get("imageFile") as File | null

  if (!title || !excerpt || !author || sections.length === 0) {
    throw new Error("Missing required fields")
  }

  let editingPost: any = null

  if (postId) {
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      throw new Error("Invalid post id")
    }

    editingPost = await Post.findById(postId).lean()

    if (!editingPost) {
      throw new Error("Post not found")
    }
  }

  const baseSlug = slugifyTitle(title)
  const slug = editingPost ? editingPost.slug : await generateUniquePostSlug(baseSlug)
  const sectionsWithImages = await Promise.all(
    sections.map(async (section, index) => {
      const sectionImageFile = formData.get(`sectionImageFile-${index}`) as File | null

      if (sectionImageFile && sectionImageFile.size > 0) {
        const uploadedPath = await saveUploadedImage(sectionImageFile, section.imageAlt || section.heading || title)

        return {
          ...section,
          imageUrl: uploadedPath,
          imageAlt: section.imageAlt || section.heading || title,
        }
      }

      return section
    }),
  )

  const content = sanitizeBlogHtml(buildBlogHtmlFromSections(sectionsWithImages))

  let imagePath = null

  if (imageFile && imageFile.size > 0) {
    imagePath = await saveUploadedImage(imageFile, title)
  }

  if (editingPost) {
    await Post.updateOne(
      { _id: editingPost._id },
      {
        $set: {
          title,
          excerpt,
          content,
          sections: sectionsWithImages,
          author,
          category,
          image: imagePath || editingPost.image || null,
          date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        },
      },
    )
  } else {
    const newPost = new Post({
      title,
      slug,
      excerpt,
      content,
      sections: sectionsWithImages,
      author,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      category,
      imageGradient: "from-[#f1f8e9] to-[#e8f5e9]", // Default gradient for now
      image: imagePath || null
    })

    await newPost.save()
  }

  revalidatePath("/blog")
  revalidatePath("/blog/admin")
  redirect("/blog")
}

async function deletePost(formData: FormData) {
  "use server"

  await connectDB()

  const postId = (formData.get("postId") as string)?.trim()

  if (!postId || !mongoose.Types.ObjectId.isValid(postId)) {
    throw new Error("Invalid post id")
  }

  await Post.deleteOne({ _id: postId })

  revalidatePath("/blog")
  revalidatePath("/blog/admin")
}

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<{ edit?: string }> }) {
  await connectDB()

  const resolvedSearchParams = await searchParams
  const editId = resolvedSearchParams?.edit

  const posts = await Post.find({}).sort({ createdAt: -1 }).lean()

  const editingPost = editId && mongoose.Types.ObjectId.isValid(editId)
    ? posts.find((post: any) => String(post._id) === editId) || null
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
          <form action={createPost} className="min-w-0 flex flex-col pb-8">
            <input type="hidden" name="postId" value={editingPost ? String(editingPost._id) : ""} readOnly />
          
            {/* HEADER (FLOWING) */}
            <div className="mb-8 flex items-end justify-between shrink-0">
              <div>
                <h1 className="text-[28px] font-bold tracking-tight text-slate-900">
                  {editingPost ? "Edit Blog Post" : "Content Manager"}
                </h1>
                <p className="text-slate-500 mt-1 text-[15px]">
                  {editingPost ? "Update your existing story" : "Create and publish new stories"}
                </p>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#593bee] to-[#180577] text-white font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 text-sm shadow-sm"
              >
                <PlusCircle className="h-4 w-4" />
                {editingPost ? "Update Post" : "Publish Post"}
              </button>
            </div>

            {/* FORM BODY */}
            <div className="border border-slate-200 rounded-[24px] p-8 shadow-sm flex-1 flex flex-col min-h-0">
            
            <div className="flex flex-col h-full gap-6 min-h-0">
              
              {/* TOP GRID (Fixed Height) */}
              <div className="grid sm:grid-cols-3 gap-6 shrink-0">
                {/* Title */}
                <div className="space-y-3">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F] flex items-center gap-2.5">
                    <Type className="h-[14px] w-[14px]" /> Title
                  </label>
                  <input
                    name="title"
                    required
                    defaultValue={editingPost?.title || ""}
                    className="w-full bg-[#F4F6F8] rounded-[10px] px-4 py-3 text-[13px] text-slate-700 placeholder:text-[#A0AAB5] focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
                    placeholder="e.g. Next-Gen AI Models"
                  />
                </div>

                {/* Author */}
                <div className="space-y-3">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F] flex items-center gap-2.5">
                    <User className="h-[14px] w-[14px]" /> Author
                  </label>
                  <input
                    name="author"
                    required
                    defaultValue={editingPost?.author || "Cuva Team"}
                    className="w-full bg-[#F4F6F8] rounded-[10px] px-4 py-3 text-[13px] text-slate-700 placeholder:text-[#A0AAB5] focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
                  />
                </div>

                {/* Category */}
                <div className="space-y-3">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F] flex items-center gap-2.5">
                    <Layers className="h-[14px] w-[14px]" /> Category
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      defaultValue={editingPost?.category || "BLOGS"}
                      className="w-full appearance-none bg-[#F4F6F8] rounded-[10px] px-4 py-3 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 cursor-pointer"
                    >
                      <option value="BLOGS">Blogs</option>
                      <option value="USE CASES">Use Cases</option>
                      <option value="INFOGRAPHICS">Infographics</option>
                      <option value="CASE STUDIES">Case Studies</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="h-[14px] w-[14px] text-[#A0AAB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Excerpt */}
                <div className="space-y-3 sm:col-span-2">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F] flex items-center gap-2.5">
                    <AlignLeft className="h-[14px] w-[14px]" /> Short Excerpt
                  </label>
                  <textarea
                    name="excerpt"
                    required
                    defaultValue={editingPost?.excerpt || ""}
                    className="w-full h-[90px] bg-[#F4F6F8] rounded-[10px] px-4 py-3 text-[13px] text-slate-700 placeholder:text-[#A0AAB5] focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-none overflow-y-auto"
                    placeholder="1-2 sentence summary..."
                  />
                </div>

                {/* Image Upload */}
                <div className="sm:col-span-1">
                  <ImageUpload initialImageUrl={editingPost?.image || null} />
                </div>
              </div>

              {/* BOTTOM FLEX ROW (Dynamic Height) */}
              <BlogSectionsBuilder initialSections={initialSections} />

            </div>
            </div>
          </form>

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
                {posts.map((post: any) => (
                  <div key={String(post._id)} className="border border-slate-200 rounded-xl p-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">{post.title}</p>
                      <p className="text-xs text-slate-500 truncate">/{post.slug} • {post.date}</p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <Link
                        href={`/blog/admin?edit=${String(post._id)}`}
                        className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-[#EEF2FF] text-[#4338CA] hover:bg-[#E0E7FF]"
                        title="Edit post"
                        aria-label="Edit post"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </Link>
                      <DeletePostButton postId={String(post._id)} postTitle={post.title} deleteAction={deletePost} />
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
