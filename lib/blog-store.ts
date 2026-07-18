import "server-only"

import { mkdir, readFile, rename, writeFile } from "fs/promises"
import { dirname, join } from "path"
import type { BlogSection } from "@/lib/blog-content"

export type BlogPostRecord = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  sections: BlogSection[]
  author: string
  date: string
  category: string
  imageGradient: string
  image: string | null
  createdAt: string
  updatedAt: string
}

export type BlogImageRecord = {
  id: string
  name: string
  url: string
  altText: string
  createdAt: string
  updatedAt: string
}

const SOURCE_DATA_ROOT = join(process.cwd(), "data", "blog")
// Vercel serverless file system is read-only except /tmp.
const IS_SERVERLESS_RUNTIME = Boolean(
  process.env.VERCEL || process.env.AWS_EXECUTION_ENV || process.env.AWS_REGION || process.env.LAMBDA_TASK_ROOT,
)

function resolveRuntimeDataRoot() {
  const configured = process.env.BLOG_DATA_DIR?.trim()
  const serverlessDefault = join("/tmp", "cuva-blog", "data", "blog")

  if (!configured) {
    return IS_SERVERLESS_RUNTIME ? serverlessDefault : SOURCE_DATA_ROOT
  }

  if (IS_SERVERLESS_RUNTIME && configured.startsWith("/var/task")) {
    return serverlessDefault
  }

  return configured
}

const RUNTIME_DATA_ROOT = resolveRuntimeDataRoot()

const POSTS_PATH = join(RUNTIME_DATA_ROOT, "posts.json")
const IMAGES_PATH = join(RUNTIME_DATA_ROOT, "images.json")

const POSTS_SEED_PATH = join(SOURCE_DATA_ROOT, "posts.json")
const IMAGES_SEED_PATH = join(SOURCE_DATA_ROOT, "images.json")

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

async function ensureJsonArrayFile(filePath: string, seedPath?: string) {
  await mkdir(dirname(filePath), { recursive: true })

  try {
    await readFile(filePath, "utf8")
  } catch {
    try {
      if (seedPath) {
        const seed = await readFile(seedPath, "utf8")
        await writeFile(filePath, seed, "utf8")
        return
      }
    } catch {
      // Fall through to empty array when no seed file is available.
    }

    await writeFile(filePath, "[]\n", "utf8")
  }
}

async function readJsonArrayFile<T>(filePath: string, seedPath?: string): Promise<T[]> {
  await ensureJsonArrayFile(filePath, seedPath)
  const raw = await readFile(filePath, "utf8")

  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as T[]) : []
  } catch {
    return []
  }
}

async function writeJsonArrayFile<T>(filePath: string, data: T[], seedPath?: string) {
  await ensureJsonArrayFile(filePath, seedPath)
  const tempPath = `${filePath}.tmp`
  const serialized = `${JSON.stringify(data, null, 2)}\n`
  await writeFile(tempPath, serialized, "utf8")
  await rename(tempPath, filePath)
}

export async function listPosts(): Promise<BlogPostRecord[]> {
  const posts = await readJsonArrayFile<BlogPostRecord>(POSTS_PATH, POSTS_SEED_PATH)
  return posts.sort((a, b) => {
    const aTime = Date.parse(a.createdAt || "") || 0
    const bTime = Date.parse(b.createdAt || "") || 0
    return bTime - aTime
  })
}

export async function getPostById(id: string): Promise<BlogPostRecord | null> {
  const posts = await listPosts()
  return posts.find((post) => post.id === id) || null
}

export async function getPostBySlugCandidates(candidates: string[]): Promise<BlogPostRecord | null> {
  const set = new Set(candidates)
  if (set.size === 0) {
    return null
  }

  const posts = await listPosts()
  return posts.find((post) => set.has(post.slug)) || null
}

export async function createPost(
  input: Omit<BlogPostRecord, "id" | "createdAt" | "updatedAt">,
): Promise<BlogPostRecord> {
  const posts = await listPosts()
  const now = new Date().toISOString()
  const next: BlogPostRecord = {
    id: makeId(),
    ...input,
    image: input.image || null,
    createdAt: now,
    updatedAt: now,
  }

  posts.push(next)
  await writeJsonArrayFile(POSTS_PATH, posts, POSTS_SEED_PATH)
  return next
}

export async function updatePost(
  id: string,
  updates: Partial<Omit<BlogPostRecord, "id" | "createdAt" | "updatedAt">>,
): Promise<BlogPostRecord | null> {
  const posts = await listPosts()
  const index = posts.findIndex((post) => post.id === id)

  if (index === -1) {
    return null
  }

  const existing = posts[index]
  const next: BlogPostRecord = {
    ...existing,
    ...updates,
    image: typeof updates.image === "undefined" ? existing.image : updates.image,
    updatedAt: new Date().toISOString(),
  }

  posts[index] = next
  await writeJsonArrayFile(POSTS_PATH, posts, POSTS_SEED_PATH)
  return next
}

export async function deletePostById(id: string): Promise<boolean> {
  const posts = await listPosts()
  const remaining = posts.filter((post) => post.id !== id)

  if (remaining.length === posts.length) {
    return false
  }

  await writeJsonArrayFile(POSTS_PATH, remaining, POSTS_SEED_PATH)
  return true
}

export async function listImages(): Promise<BlogImageRecord[]> {
  const images = await readJsonArrayFile<BlogImageRecord>(IMAGES_PATH, IMAGES_SEED_PATH)
  return images.sort((a, b) => {
    const aTime = Date.parse(a.createdAt || "") || 0
    const bTime = Date.parse(b.createdAt || "") || 0
    return bTime - aTime
  })
}

export async function createImage(input: Omit<BlogImageRecord, "id" | "createdAt" | "updatedAt">): Promise<BlogImageRecord> {
  const images = await listImages()
  const now = new Date().toISOString()
  const next: BlogImageRecord = {
    id: makeId(),
    ...input,
    createdAt: now,
    updatedAt: now,
  }

  images.push(next)
  await writeJsonArrayFile(IMAGES_PATH, images, IMAGES_SEED_PATH)
  return next
}
