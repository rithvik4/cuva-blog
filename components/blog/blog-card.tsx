import Link from "next/link"
export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  href: string
  category: string
  imageGradient: string
  image?: string
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      {/* Image Placeholder */}
      <Link href={post.href} className="block relative h-48 overflow-hidden">
        {post.image ? (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${post.imageGradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
            <span className="text-lg font-medium text-foreground/40 text-center px-6">
              {post.title.split(":")[0]}
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {post.category}
        </div>
      </Link>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-[17px] font-bold text-foreground leading-[1.4] mb-3 group-hover:text-primary transition-colors">
          <Link href={post.href}>
            {post.title}
          </Link>
        </h3>
        <p className="text-[13px] text-muted-foreground/80 line-clamp-3 mb-6 flex-1 leading-relaxed">
          {post.excerpt}
        </p>
        
        <Link href={post.href} className="text-primary font-bold text-[11px] uppercase tracking-widest mb-4 hover:underline flex items-center">
          READ MORE »
        </Link>

        <div className="border-t border-border pt-4 flex items-center text-[11px] font-medium text-muted-foreground/70">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
      </div>
    </article>
  )
}
