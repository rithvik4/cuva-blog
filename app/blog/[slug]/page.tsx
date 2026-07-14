import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"
import { notFound } from "next/navigation"
import { normalizeBlogSections, sanitizeBlogHtml, type BlogSectionBlock } from "@/lib/blog-content"
import { AutoSlidingCarousel } from "@/components/blog/auto-sliding-carousel"

export const dynamic = "force-dynamic"

function splitParagraphs(text: string) {
  return text
    .split(/\r?\n\s*\r?\n/g)
    .map((part) => part.trim())
    .filter(Boolean)
}

function renderBlock(block: BlogSectionBlock, key: string) {
  if (block.type === "heading") {
    if (block.level === "h3") {
      return (
        <h3 key={key} className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 leading-tight">
          {block.text}
        </h3>
      )
    }

    if (block.level === "h4") {
      return (
        <h4 key={key} className="text-xl lg:text-2xl font-bold tracking-tight text-slate-700 leading-tight">
          {block.text}
        </h4>
      )
    }

    return (
      <h2 key={key} className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {block.text}
      </h2>
    )
  }

  if (block.type === "paragraph") {
    return (
      <div key={key} className="space-y-4">
        {splitParagraphs(block.content).map((paragraph, paragraphIndex) => (
          <p key={`${key}-paragraph-${paragraphIndex}`} className="text-base leading-relaxed text-foreground/90">
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  if (block.type === "image") {
    const items = block.images.length > 0 ? block.images : [{ url: block.imageUrl, alt: block.imageAlt, caption: block.title }]
    const filteredItems = items.filter((item) => item.url)
    if (filteredItems.length === 0) {
      return null
    }

    const wrapperAlignClass =
      block.alignment === "left"
        ? "justify-start"
        : block.alignment === "right"
          ? "justify-end"
          : "justify-center"
    const widthClass =
      block.mode === "multiple"
        ? "w-full"
        : block.width === "full"
          ? "w-full"
          : block.width === "wide"
            ? "w-full lg:w-[85%]"
            : "w-full lg:w-[70%]"

    const useAutoCarousel = block.mode === "multiple" && block.layout === "carousel"

    const gridClass = block.layout === "grid"
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
      : "space-y-4"

    return (
      <div key={key} className={`flex ${wrapperAlignClass}`}>
        <div className={widthClass}>
          {block.title && block.titlePosition === "top" ? <h4 className="mb-3 text-xl font-bold text-slate-800 text-center">{block.title}</h4> : null}
          {useAutoCarousel ? (
            <AutoSlidingCarousel items={filteredItems} intervalMs={2500} />
          ) : (
            <div className={gridClass}>
              {filteredItems.map((item, itemIndex) => (
                <figure key={`${key}-image-${itemIndex}`} className="rounded-xl overflow-hidden border border-border/50 shadow-sm bg-white">
                  <img src={item.url} alt={item.alt || "Section image"} className="w-full h-auto object-cover" loading="lazy" />
                  {item.caption ? <figcaption className="px-3 py-2 text-sm text-slate-600">{item.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          )}
          {block.title && block.titlePosition === "bottom" ? <h4 className="mt-3 text-xl font-bold text-slate-800 text-center">{block.title}</h4> : null}
        </div>
      </div>
    )
  }

  if (block.type === "quote") {
    const quoteClass =
      block.backgroundStyle === "accent"
        ? "bg-blue-50 border-blue-200"
        : block.backgroundStyle === "tinted"
          ? "bg-slate-50 border-slate-200"
          : "bg-white border-slate-200"

    return (
      <blockquote key={key} className={`rounded-xl border p-5 ${quoteClass}`}>
        <p className="text-lg font-medium text-slate-800 leading-relaxed">“{block.quote}”</p>
        {block.author ? <cite className="mt-3 block text-sm text-slate-500 not-italic">- {block.author}</cite> : null}
      </blockquote>
    )
  }

  if (block.type === "table") {
    const columnCount = Math.max(block.columns.length, ...block.rows.map((row) => row.length), 1)
    const columns =
      block.columns.length >= columnCount
        ? block.columns
        : [...block.columns, ...Array.from({ length: columnCount - block.columns.length }, (_, index) => `Column ${block.columns.length + index + 1}`)]
    const rows = block.rows.map((row) => (row.length >= columnCount ? row : [...row, ...Array.from({ length: columnCount - row.length }, () => "")]))

    const tableContent = (
      <table className="w-full border-collapse text-sm">
        {block.hasHeader ? (
          <thead>
            <tr className="bg-slate-100">
              {columns.map((column, columnIndex) => (
                <th key={`${key}-head-${columnIndex}`} className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${key}-row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${key}-cell-${rowIndex}-${cellIndex}`} className="border border-slate-200 px-3 py-2 text-slate-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )

    return (
      <div key={key} className="rounded-xl border border-slate-200 bg-white p-3">
        {block.responsive ? <div className="overflow-x-auto">{tableContent}</div> : tableContent}
      </div>
    )
  }

  if (block.type === "comparisonTable") {
    return (
      <div key={key} className="rounded-xl border border-slate-200 bg-white p-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">{block.featureLabel}</th>
              <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">{block.optionALabel}</th>
              <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">{block.optionBLabel}</th>
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${key}-row-${rowIndex}`}>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.feature}</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.optionA}</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.optionB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (block.type === "checklist") {
    return (
      <ul key={key} className="space-y-2">
        {block.items.map((item, itemIndex) => (
          <li key={`${key}-check-${itemIndex}`} className="flex items-start gap-2 text-foreground/90">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === "numberList") {
    return (
      <ol key={key} className="list-decimal pl-6 space-y-2 text-foreground/90">
        {block.items.map((item, itemIndex) => (
          <li key={`${key}-number-${itemIndex}`}>{item}</li>
        ))}
      </ol>
    )
  }

  if (block.type === "bulletList") {
    return (
      <ul key={key} className="list-disc pl-6 space-y-2 text-foreground/90">
        {block.items.map((item, itemIndex) => (
          <li key={`${key}-bullet-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    )
  }

  if (block.type === "cta") {
    const alignClass =
      block.alignment === "left"
        ? "items-start text-left"
        : block.alignment === "right"
          ? "items-end text-right"
          : "items-center text-center"

    return (
      <div key={key} className={`rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 flex flex-col gap-3 ${alignClass}`}>
        {block.text ? <p className="text-base font-medium text-slate-800">{block.text}</p> : null}
        {block.buttonLabel && block.buttonUrl ? (
          <a href={block.buttonUrl} className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700" target="_blank" rel="noopener noreferrer">
            {block.buttonLabel}
          </a>
        ) : null}
      </div>
    )
  }

  if (block.style === "dotted") {
    return <div key={key} className="border-t-2 border-dotted border-slate-300 my-2" />
  }

  if (block.style === "gradient") {
    return <div key={key} className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent my-2" />
  }

  if (block.style === "icon") {
    return (
      <div key={key} className="flex items-center gap-3 py-1">
        <div className="h-px flex-1 bg-slate-300" />
        <span className="text-sm text-slate-500">{block.icon || "*"}</span>
        <div className="h-px flex-1 bg-slate-300" />
      </div>
    )
  }

  return <hr key={key} className="border-slate-300" />
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let decodedSlug = slug

  try {
    decodedSlug = decodeURIComponent(slug)
  } catch {
    notFound()
  }

  await connectDB()

  // Fetch the current post (try both raw and decoded to be safe against spaces)
  const postDoc = await Post.findOne({
    $or: [
      { slug: slug },
      { slug: decodedSlug }
    ]
  }).lean()

  if (!postDoc) {
    notFound()
  }

  const safeContent = sanitizeBlogHtml(postDoc.content || "")
  const sections = normalizeBlogSections(postDoc.sections)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-8 lg:py-12">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            ← Back to all posts
          </Link>

          {/* Post Header */}
          <header className="mb-8 pt-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.3] mb-5">
              {postDoc.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                <span>Author - {postDoc.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>Date - {postDoc.date}</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative w-full aspect-[21/9] lg:aspect-[2.5/1] rounded-2xl overflow-hidden mb-12 shadow-sm border border-border/50">
             {postDoc.image ? (
               <img src={postDoc.image} alt={postDoc.title} className="w-full h-full object-cover" />
             ) : (
               <div className={`w-full h-full bg-gradient-to-br ${postDoc.imageGradient} flex items-center justify-center p-8`}>
                 <div className="text-xl sm:text-3xl font-bold text-foreground/40 text-center px-4">
                   {postDoc.title.split(":")[0]}
                 </div>
               </div>
             )}
          </div>

          {/* Post Content */}
          <div className="mt-8">
            {sections.length > 0 ? (
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <section key={`section-${index}`} className="space-y-5">
                    {section.blocks.map((block, blockIndex) => renderBlock(block, `${index}-${blockIndex}`))}
                  </section>
                ))}
              </div>
            ) : (
              <>
                <div
                  className="legacy-structured-content prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: safeContent }}
                />
                <style>{`
                  .legacy-structured-content .blog-section {
                    display: grid;
                    gap: 1.5rem;
                    align-items: start;
                    margin-bottom: 2.5rem;
                  }

                  .legacy-structured-content .blog-section h2 {
                    font-size: 1.875rem;
                    line-height: 1.1;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 0.65rem;
                  }

                  .legacy-structured-content .blog-section h3 {
                    font-size: 1.25rem;
                    line-height: 1.25;
                    font-weight: 700;
                    color: #334155;
                    margin-bottom: 0.85rem;
                  }

                  .legacy-structured-content .blog-section-media img {
                    width: 100%;
                    height: auto;
                    border-radius: 0.75rem;
                    border: 1px solid rgb(226 232 240 / 0.8);
                    box-shadow: 0 4px 12px rgb(15 23 42 / 0.08);
                  }

                  @media (min-width: 768px) {
                    .legacy-structured-content .blog-section {
                      grid-template-columns: minmax(0, 1fr) minmax(0, 360px);
                      gap: 2rem;
                    }

                    .legacy-structured-content .blog-section-left .blog-section-copy {
                      order: 2;
                    }

                    .legacy-structured-content .blog-section-left .blog-section-media {
                      order: 1;
                    }

                    .legacy-structured-content .blog-section-right .blog-section-copy {
                      order: 1;
                    }

                    .legacy-structured-content .blog-section-right .blog-section-media {
                      order: 2;
                    }
                  }
                `}</style>
              </>
            )}
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}
