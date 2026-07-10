import Link from "next/link"
import Image from "next/image"
import { LogOut, PenSquare, Link as LinkIcon, User, Layers, AlignLeft, Type, PlusCircle, FileText } from "lucide-react"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"
import { Image as DBImage } from "@/lib/Image"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { ImageUpload } from "@/components/blog/image-upload"

async function createPost(formData: FormData) {
  "use server"

  await connectDB()

  const title = formData.get("title") as string
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  const excerpt = formData.get("excerpt") as string
  const content = formData.get("content") as string
  const author = formData.get("author") as string
  const category = formData.get("category") as string
  const imageFile = formData.get("imageFile") as File | null
  
  let imagePath = null

  if (imageFile && imageFile.size > 0) {
    const bytes = await imageFile.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadDir = join(process.cwd(), "public/uploads")
    try {
      await mkdir(uploadDir, { recursive: true })
    } catch (e) {}

    const filename = `${Date.now()}-${imageFile.name.replace(/\s+/g, '-')}`
    const filepath = join(uploadDir, filename)
    
    await writeFile(filepath, buffer)
    imagePath = `/uploads/${filename}`

    // Save uploaded image data to the MongoDB images table
    const newDbImage = new DBImage({
      name: imageFile.name,
      url: imagePath,
      altText: title
    })
    await newDbImage.save()
  }

  const newPost = new Post({
    title,
    slug,
    excerpt,
    content,
    author,
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    category: category.toUpperCase(),
    imageGradient: "from-[#f1f8e9] to-[#e8f5e9]", // Default gradient for now
    image: imagePath || null
  })

  await newPost.save()

  revalidatePath("/blog")
  redirect("/blog")
}

export default function AdminDashboard() {
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
      <main className="flex-1 overflow-hidden bg-white">
        <form action={createPost} className="h-full p-8 lg:p-12 max-w-5xl mx-auto flex flex-col pb-8">
          
          {/* HEADER (FLOWING) */}
          <div className="mb-8 flex items-end justify-between shrink-0">
            <div>
              <h1 className="text-[28px] font-bold tracking-tight text-slate-900">
                Content Manager
              </h1>
              <p className="text-slate-500 mt-1 text-[15px]">
                Create and publish new stories
              </p>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#593bee] to-[#180577] text-white font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 text-sm shadow-sm"
            >
              <PlusCircle className="h-4 w-4" />
              Publish Post
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
                    defaultValue="Cuva Team"
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
                    className="w-full h-[90px] bg-[#F4F6F8] rounded-[10px] px-4 py-3 text-[13px] text-slate-700 placeholder:text-[#A0AAB5] focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-none overflow-y-auto"
                    placeholder="1-2 sentence summary..."
                  />
                </div>

                {/* Image Upload */}
                <div className="sm:col-span-1">
                  <ImageUpload />
                </div>
              </div>

              {/* BOTTOM FLEX ROW (Dynamic Height) */}
              <div className="space-y-3 flex flex-col flex-1 min-h-0 pt-2 border-t border-slate-100">
                <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F] flex items-center gap-2.5 shrink-0">
                  <FileText className="h-[14px] w-[14px]" /> Full Content (HTML)
                </label>
                <textarea
                  name="content"
                  required
                  className="w-full h-full bg-[#F4F6F8] rounded-[10px] px-4 py-3 text-[13px] text-slate-700 placeholder:text-[#A0AAB5] focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-none font-mono overflow-y-auto leading-relaxed"
                  placeholder="<p>Write your amazing blog content here...</p>"
                />
              </div>

            </div>
          </div>
        </form>
      </main>
    </div>
  )
}
