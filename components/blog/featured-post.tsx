import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { BlogPost } from "./blog-card"

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <section className="mb-12 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
        {/* Image Placeholder */}
        <Link href={post.href} className="block aspect-[16/9] lg:aspect-[16/8] rounded-3xl overflow-hidden shadow-sm group">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${post.imageGradient} flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105`}>
               <div className="text-xl lg:text-3xl font-bold text-foreground/40 text-center max-w-md opacity-80 px-4">
                 {post.title.split(":")[0]}
               </div>
            </div>
          )}
        </Link>
        
        <div className="flex flex-col justify-center py-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight mb-4 hover:text-primary transition-colors">
            <Link href={post.href}>
              {post.title}
            </Link>
          </h1>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          
          <Link href={post.href} className="text-primary font-bold text-sm uppercase tracking-widest mb-6 hover:underline inline-flex items-center">
            READ MORE »
          </Link>

          <div className="flex items-center gap-6 pt-5 border-t border-border text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
