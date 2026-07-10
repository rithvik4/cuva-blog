"use client"

import { useState } from "react"
import { BlogPost } from "./blog-card"
import { BlogCard } from "./blog-card"

const CATEGORIES = ["Blogs", "Infographics", "Use Cases", "Case Studies"]

interface BlogListProps {
  initialPosts: BlogPost[]
}

export function BlogList({ initialPosts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("Blogs")
  
  const filteredPosts = activeCategory === "Blogs" 
    ? initialPosts.filter(post => post.category === "BLOGS")
    : initialPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <>
      {/* Filters */}
      <section className="mb-12">
        <div className="border-t border-border pt-10 pb-4 flex flex-wrap items-center gap-4 justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-2 rounded-full font-semibold text-sm transition-colors ${
                activeCategory === category
                  ? "border-2 border-primary text-primary bg-transparent hover:bg-primary/5"
                  : "bg-slate-950 text-white hover:bg-slate-900 border-2 border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
