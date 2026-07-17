"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { BlogSectionsBuilder } from "@/components/blog/blog-sections-builder"
import { ImageUpload, type ImageUploadData } from "@/components/blog/image-upload"
import { PlusCircle, Type, User, Layers, AlignLeft } from "lucide-react"
import type { BlogSection } from "@/lib/blog-content"

interface BlogAdminFormProps {
  editingPost?: {
    _id: string
    title: string
    slug: string
    excerpt: string
    sections: BlogSection[]
    author: string
    category: string
    image: string | null
  } | null
  initialSections: BlogSection[]
}

const CATEGORY_OPTIONS = [
  { value: "BLOGS", label: "Blogs" },
  { value: "USE CASES", label: "Use Cases" },
  { value: "CASE STUDIES", label: "Case Studies" },
]

export function BlogAdminForm({ editingPost, initialSections }: BlogAdminFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(editingPost?.category || "BLOGS")
  const [imageData, setImageData] = useState<ImageUploadData | null>(null)
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(editingPost?.image || null)
  const [isCoverImageRemoved, setIsCoverImageRemoved] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const builderRef = useRef<{ getSections: () => BlogSection[]; processImageUploads: () => Promise<BlogSection[]> } | null>(null)

  useEffect(() => {
    // Keep local cover-image state aligned when navigating between posts in edit mode.
    setCoverImageUrl(editingPost?.image || null)
    setIsCoverImageRemoved(false)
    setImageData(null)
    setSelectedCategory(editingPost?.category || "BLOGS")
  }, [editingPost?._id, editingPost?.image, editingPost?.category])

  const handleCoverImageSelected = (data: ImageUploadData | null) => {
    setImageData(data)
    if (data) {
      setIsCoverImageRemoved(false)
    }
  }

  const handleCoverImageDelete = () => {
    setImageData(null)
    setCoverImageUrl(null)
    setIsCoverImageRemoved(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)

      // Process image uploads in blocks first
      let currentSections = initialSections
      if (builderRef.current?.processImageUploads) {
        try {
          currentSections = await builderRef.current.processImageUploads()
        } catch (err) {
          throw new Error("Failed to process image uploads")
        }
      } else {
        // Fallback to getSections if processImageUploads not available
        currentSections = builderRef.current?.getSections?.() || initialSections
      }
      
      // Collect form data
      const postPayload = {
        postId: editingPost ? editingPost._id : undefined,
        title: formData.get("title"),
        slug: editingPost ? editingPost.slug : formData.get("title"),
        excerpt: formData.get("excerpt"),
        sections: currentSections,
        author: formData.get("author"),
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        category: selectedCategory,
        image: isCoverImageRemoved ? null : coverImageUrl,
        imageGradient: "from-[#f1f8e9] to-[#e8f5e9]",
      } as Record<string, any>

      // Add base64 image if selected
      if (imageData) {
        postPayload.imageBase64 = imageData.base64
        postPayload.imageFilename = imageData.filename
        postPayload.imageMimeType = imageData.mimeType
      }

      const response = await fetch("/api/save-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "post",
          payload: postPayload,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to save post")
      }

      router.push("/blog")
      router.refresh()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 flex flex-col pb-8">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* HEADER */}
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
          disabled={isSubmitting}
          className="bg-gradient-to-r from-[#593bee] to-[#180577] text-white font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2 text-sm shadow-sm"
        >
          <PlusCircle className="h-4 w-4" />
          {isSubmitting ? "Saving..." : editingPost ? "Update Post" : "Publish Post"}
        </button>
      </div>

      {/* FORM BODY */}
      <div className="border border-slate-200 rounded-[24px] p-8 shadow-sm flex-1 flex flex-col min-h-0">
        <div className="flex flex-col h-full gap-6 min-h-0">
          {/* TOP GRID */}
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
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  className="w-full appearance-none bg-[#F4F6F8] rounded-[10px] px-4 py-3 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 cursor-pointer"
                >
                  {!CATEGORY_OPTIONS.some((option) => option.value === selectedCategory) ? (
                    <option value={selectedCategory}>{selectedCategory}</option>
                  ) : null}
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="h-[14px] w-[14px] text-[#A0AAB5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
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
              <ImageUpload
                initialImageUrl={coverImageUrl}
                onImageSelected={handleCoverImageSelected}
                onDeleteImage={handleCoverImageDelete}
              />
            </div>
          </div>

          {/* SECTIONS BUILDER */}
          <BlogSectionsBuilder ref={builderRef} initialSections={initialSections} />
        </div>
      </div>
    </form>
  )
}
