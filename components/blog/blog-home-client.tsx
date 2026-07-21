"use client"

import { useEffect, useMemo, useState } from "react"
import { FeaturedPost } from "@/components/blog/featured-post"
import { BlogList } from "@/components/blog/blog-list"
import type { BlogPost } from "@/components/blog/blog-card"

const BLOG_CACHE_KEY = "cuva-blog-cache-v1"
const REMOTE_BLOG_JSON_URL =
  process.env.NEXT_PUBLIC_BLOG_JSON_URL ||
  "https://ffbf8c801e7b61747c6091b406df45773665bd88ea97bee0ce358b8-apidata.googleusercontent.com/download/storage/v1/b/cuva-ai-live-v1/o/blogs%2Fblog.json?jk=AWuF6PjLkCtm1zwTBAMUysZQVn1K7O9OIJ7XECSp0gzbhDgxNBJvo-Pkud4HfTFXu9yhHvCPumdp22PkHciKRvXD6HDOBd2MntrHsZVPdlieSEcf3ifKDqnaOmWt0qWu8pxqKYvafpKFhyS1wtxJOTIBP0mxWVF6LAmu1DOHLaUnOQoTIZ9nnRbLfulrfhgVTDAjrYZAjdnWYtIJH0Nuo69zZ9NWN2Wo52M3XOjGtWvFzl97ZP7kGMRrDYMpo-EmY0rTZykOy7cs66XM5FVTJA0kYk2Yivx5SsgQzqsCGuTB7zCOE9nXKcWyVgnpHNPmcmMkfFNXpFJh7oi4f6TyK57B-uno_CqzckhTc6_f-NG2qfgvyTipuby5ue0cCfY5gpU9gtvwguVHGpx_HUAEEwfYu5IbyYU4aHDn46LCVe9li0ivnv0ZTPHed_K6qLV-KVOAwzCNDC_Tyg_97P_lIXsjXS5SHyXBEWUDN5lQGxUqAYPe5qW2pwcfNkkk6KVHS_Baq7GYPNdf8opMyzV3Pb1xb2h4lL2Cw-7DhhKwLGGrR_t6YqwNY11EbUELT_QxFiXgENp00vfEbe3DnJg-IhH40XZMRbJ5sxhaRbmGZZOG_qgmlYOu5QcBaiKEfyMqMPp1nXOEjCihZwSgLaP05Ml0x95xI1usW_z_fnwgOvlX6SHXtw-zQJGc2nKlGK6cNlLPBBdBvxzMV5ae_lPsH5jBnEl_bh0Id0YXp2eu_2DppA_LW78jcqbEothgP-vx38lpUUQIL70uOqCcY6djobH3wGkrJg9Iws7l-up100QcJki1Sw-wcsFjJk7jqBldDAP3yNVt6IfCC8SWiknxxwRGLuolCb1Qkq-2AvnpTuSeD9_iRPZ5-d-QBGvl6daaZf7zBecrr-E2_obkUI6qgcCGjLqvuxJJU83pxdG-1zfrHSmV7D7F1vGm2ejrMQKWxXnlADvPFBikgIWTp1ddGdgIXkLstP060pq_xo21DxHQV841DbeDiIfB08G7QDloLuGqNbKkiXPY1HiM82PDW3Z10Vlnj9rLBdZ-cLYgSQeJvhTtY5zdtNd8kxX6b8VcUQJafo_awohstkfOFaHa0Ry3apcutLqJKnA7JfieYaPf_ogCr5O9Sjo-QEwU89xIBFKd_g15rnzE6nUGaouJkuz0GnaFkWszs4X85QE8POq4TjudOPCbQCNgtDin0HXPAWy_GG-DnDLEGZKAuAq2USOn6Y56ZjRS8riYAyLAZ64RTWDXTfc76Wfpm49JvmMJfa46kJV1VSb8hC_3FgaBXNCorSrcUSVMdY66KKzWRl138wnYenViApZqCLBPPsk4J6v2S3wNpcEK0n9dDimC&isca=1"

type RawBlogPost = {
  title?: string
  slug?: string
  excerpt?: string
  author?: string
  date?: string
  category?: string
  imageGradient?: string
  image?: string | null
}

type CachedPayload = {
  posts: BlogPost[]
  cachedAt: string
}

function normalizeCategory(input: string) {
  const value = input.trim().toUpperCase()
  if (value === "INFOGRAPHICS") {
    return "BLOGS"
  }

  if (value === "USE CASE" || value === "USECASE") {
    return "USE CASES"
  }

  if (value === "CASE STUDY") {
    return "CASE STUDIES"
  }

  return value || "BLOGS"
}

function toBlogPost(raw: RawBlogPost): BlogPost | null {
  const title = String(raw.title || "").trim()
  const slug = String(raw.slug || "").trim()

  if (!title || !slug) {
    return null
  }

  return {
    title,
    slug,
    excerpt: String(raw.excerpt || ""),
    author: String(raw.author || "Cuva Team"),
    date: String(raw.date || ""),
    href: slug.startsWith("http") ? slug : `/blog/${slug}`,
    category: normalizeCategory(String(raw.category || "BLOGS")),
    imageGradient: String(raw.imageGradient || "from-[#f1f8e9] to-[#e8f5e9]"),
    image: raw.image || undefined,
  }
}

function parseRemotePosts(data: unknown): BlogPost[] {
  let candidates: unknown[] = []

  if (Array.isArray(data)) {
    candidates = data
  } else if (data && typeof data === "object") {
    const maybePosts = (data as { posts?: unknown; data?: { posts?: unknown } }).posts
    const maybeNestedPosts = (data as { data?: { posts?: unknown } }).data?.posts

    if (Array.isArray(maybePosts)) {
      candidates = maybePosts
    } else if (Array.isArray(maybeNestedPosts)) {
      candidates = maybeNestedPosts
    }
  }

  return candidates
    .map((item) => toBlogPost((item || {}) as RawBlogPost))
    .filter((item): item is BlogPost => item !== null)
}

export function BlogHomeClient() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let disposed = false

    async function loadPosts() {
      try {
        setError(null)

        const cachedRaw = localStorage.getItem(BLOG_CACHE_KEY)
        if (cachedRaw) {
          try {
            const cachedPayload = JSON.parse(cachedRaw) as CachedPayload
            if (Array.isArray(cachedPayload.posts) && cachedPayload.posts.length > 0) {
              if (!disposed) {
                setPosts(cachedPayload.posts)
                setLoading(false)
              }
              return
            }
          } catch {
            localStorage.removeItem(BLOG_CACHE_KEY)
          }
        }

        const response = await fetch(REMOTE_BLOG_JSON_URL, { cache: "no-store" })
        if (!response.ok) {
          throw new Error(`Failed to download blog JSON (${response.status})`)
        }

        const remoteData = await response.json()
        const normalizedPosts = parseRemotePosts(remoteData)

        if (normalizedPosts.length === 0) {
          throw new Error("Remote JSON did not contain posts")
        }

        const payload: CachedPayload = {
          posts: normalizedPosts,
          cachedAt: new Date().toISOString(),
        }

        localStorage.setItem(BLOG_CACHE_KEY, JSON.stringify(payload))

        if (!disposed) {
          alert("Blog JSON downloaded and imported for this browser.")
          setPosts(normalizedPosts)
          setLoading(false)
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to load blog JSON"

        if (!disposed) {
          setError(message)
          setLoading(false)
        }
      }
    }

    loadPosts()

    return () => {
      disposed = true
    }
  }, [])

  const featuredPost = useMemo(
    () => posts.find((post) => post.category === "BLOGS") || posts[0] || null,
    [posts],
  )

  if (loading) {
    return (
      <div className="py-16 text-center text-slate-500 text-sm">
        Loading blog data...
      </div>
    )
  }

  if (error) {
    return (
      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
        {error}
      </div>
    )
  }

  if (posts.length === 0) {
    return <p className="text-sm text-slate-500">No blog posts found.</p>
  }

  return (
    <>
      {featuredPost ? <FeaturedPost post={featuredPost} /> : null}
      <BlogList initialPosts={posts} />
    </>
  )
}
