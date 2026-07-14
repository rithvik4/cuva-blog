import sanitizeHtml from "sanitize-html"

export type HeadingLevel = "h2" | "h3" | "h4"
export type ImageAlignment = "left" | "center" | "right"
export type ImageWidth = "content" | "wide" | "full"
export type ImageLayout = "single" | "grid" | "carousel"
export type QuoteBackgroundStyle = "plain" | "tinted" | "accent"
export type DividerStyle = "simple" | "dotted" | "gradient" | "icon"

export type BlogImageItem = {
  url: string
  alt: string
  caption: string
}

export type BlogComparisonRow = {
  feature: string
  optionA: string
  optionB: string
}

export type BlogSectionBlock =
  | {
      type: "heading"
      text: string
      level: HeadingLevel
    }
  | {
      type: "paragraph"
      content: string
    }
  | {
      type: "image"
      mode: "single" | "multiple"
      imageUrl: string
      imageAlt: string
      title: string
      titlePosition: "top" | "bottom"
      uploadKey?: string
      alignment: ImageAlignment
      width: ImageWidth
      layout: ImageLayout
      images: BlogImageItem[]
    }
  | {
      type: "quote"
      quote: string
      author: string
      backgroundStyle: QuoteBackgroundStyle
    }
  | {
      type: "table"
      columns: string[]
      rows: string[][]
      hasHeader: boolean
      responsive: boolean
    }
  | {
      type: "comparisonTable"
      featureLabel: string
      optionALabel: string
      optionBLabel: string
      rows: BlogComparisonRow[]
    }
  | {
      type: "checklist"
      items: string[]
    }
  | {
      type: "numberList"
      items: string[]
    }
  | {
      type: "bulletList"
      items: string[]
    }
  | {
      type: "cta"
      text: string
      buttonLabel: string
      buttonUrl: string
      alignment: ImageAlignment
    }
  | {
      type: "divider"
      style: DividerStyle
      icon: string
    }

export type BlogSection = {
  heading: string
  subheading: string
  content: string
  bulletPoints: string[]
  imageUrl: string
  imageAlt: string
  imagePosition: "left" | "right"
  blocks: BlogSectionBlock[]
}

function toText(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function toBool(value: unknown, fallback = false) {
  if (typeof value === "boolean") {
    return value
  }

  if (typeof value === "string") {
    if (value === "true") {
      return true
    }

    if (value === "false") {
      return false
    }
  }

  return fallback
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function splitParagraphs(value: string) {
  return value
    .split(/\r?\n\s*\r?\n/g)
    .map((part) => part.trim())
    .filter(Boolean)
}

function splitLines(value: string) {
  return value
    .split(/\r?\n/g)
    .map((part) => part.trim())
    .filter(Boolean)
}

function normalizeHeadingLevel(value: unknown): HeadingLevel {
  if (value === "h3" || value === "h4") {
    return value
  }

  return "h2"
}

function normalizeImageAlignment(value: unknown): ImageAlignment {
  if (value === "left" || value === "right") {
    return value
  }

  return "center"
}

function normalizeImageWidth(value: unknown): ImageWidth {
  if (value === "full" || value === "wide") {
    return value
  }

  return "content"
}

function normalizeImageLayout(value: unknown): ImageLayout {
  if (value === "grid" || value === "carousel") {
    return value
  }

  return "single"
}

function normalizeQuoteBackgroundStyle(value: unknown): QuoteBackgroundStyle {
  if (value === "tinted" || value === "accent") {
    return value
  }

  return "plain"
}

function normalizeDividerStyle(value: unknown): DividerStyle {
  if (value === "dotted" || value === "gradient" || value === "icon") {
    return value
  }

  return "simple"
}

function legacySectionHasContent(section: {
  heading: string
  subheading: string
  content: string
  bulletPoints: string[]
  imageUrl: string
}) {
  return Boolean(
    section.heading ||
      section.subheading ||
      section.content ||
      section.bulletPoints.length > 0 ||
      section.imageUrl,
  )
}

function blocksFromLegacySection(section: {
  heading: string
  subheading: string
  content: string
  bulletPoints: string[]
  imageUrl: string
  imageAlt: string
  imagePosition: "left" | "right"
}): BlogSectionBlock[] {
  const blocks: BlogSectionBlock[] = []

  if (section.heading) {
    blocks.push({
      type: "heading",
      text: section.heading,
      level: "h2",
    })
  }

  if (section.subheading) {
    blocks.push({
      type: "heading",
      text: section.subheading,
      level: "h3",
    })
  }

  if (section.content) {
    blocks.push({
      type: "paragraph",
      content: section.content,
    })
  }

  if (section.bulletPoints.length > 0) {
    blocks.push({
      type: "bulletList",
      items: section.bulletPoints,
    })
  }

  if (section.imageUrl) {
    blocks.push({
      type: "image",
      mode: "single",
      imageUrl: section.imageUrl,
      imageAlt: section.imageAlt,
      title: "",
      titlePosition: "bottom",
      alignment: section.imagePosition,
      width: "wide",
      layout: "single",
      images: [],
    })
  }

  return blocks
}

function normalizeBlogSectionBlocks(input: unknown): BlogSectionBlock[] {
  if (!Array.isArray(input)) {
    return []
  }

  return input
    .map((item): BlogSectionBlock | null => {
      const type = toText(item?.type)

      if (type === "heading") {
        const text = toText(item?.text)
        if (!text) {
          return null
        }

        return {
          type: "heading",
          text,
          level: normalizeHeadingLevel(item?.level),
        } satisfies BlogSectionBlock
      }

      if (type === "paragraph") {
        const content = toText(item?.content)
        if (!content) {
          return null
        }

        return {
          type: "paragraph",
          content,
        } satisfies BlogSectionBlock
      }

      if (type === "image") {
        const imageUrl = toText(item?.imageUrl)
        const imageAlt = toText(item?.imageAlt)
        const title = toText(item?.title) || toText(item?.caption)
        const titlePosition = item?.titlePosition === "top" ? "top" : "bottom"
        const uploadKey = toText(item?.uploadKey)
        const images = Array.isArray(item?.images)
          ? item.images
              .map((imageItem: unknown) => {
                const imageRecord = imageItem && typeof imageItem === "object" ? (imageItem as Record<string, unknown>) : {}
                const url = toText(imageRecord.url)
                const alt = toText(imageRecord.alt)
                const itemCaption = toText(imageRecord.caption)

                if (!url) {
                  return null
                }

                return {
                  url,
                  alt,
                  caption: itemCaption,
                } satisfies BlogImageItem
              })
                .filter((imageItem: BlogImageItem | null): imageItem is BlogImageItem => imageItem !== null)
          : []

        if (!imageUrl && images.length === 0 && !uploadKey) {
          return null
        }

        return {
          type: "image",
          mode: item?.mode === "multiple" || item?.layout === "grid" || item?.layout === "carousel" || images.length > 1 ? "multiple" : "single",
          imageUrl,
          imageAlt,
          title,
          titlePosition,
          ...(uploadKey ? { uploadKey } : {}),
          alignment: normalizeImageAlignment(item?.alignment),
          width: normalizeImageWidth(item?.width),
          layout: normalizeImageLayout(item?.layout),
          images,
        } satisfies BlogSectionBlock
      }

      if (type === "quote") {
        const quote = toText(item?.quote)
        if (!quote) {
          return null
        }

        return {
          type: "quote",
          quote,
          author: toText(item?.author),
          backgroundStyle: normalizeQuoteBackgroundStyle(item?.backgroundStyle),
        } satisfies BlogSectionBlock
      }

      if (type === "table") {
        const columns = Array.isArray(item?.columns)
          ? item.columns.map((column: unknown) => toText(column)).filter(Boolean)
          : []
        const rows = Array.isArray(item?.rows)
          ? item.rows
              .map((row: unknown) => {
                if (!Array.isArray(row)) {
                  return []
                }

                return row.map((cell: unknown) => toText(cell))
              })
              .filter((row: string[]) => row.some(Boolean))
          : []

        if (columns.length === 0 && rows.length === 0) {
          return null
        }

        return {
          type: "table",
          columns,
          rows,
          hasHeader: toBool(item?.hasHeader, true),
          responsive: toBool(item?.responsive, true),
        } satisfies BlogSectionBlock
      }

      if (type === "comparisonTable") {
        const rows = Array.isArray(item?.rows)
          ? item.rows
              .map((row: unknown) => {
                const rowRecord = row && typeof row === "object" ? (row as Record<string, unknown>) : {}
                const feature = toText(rowRecord.feature)
                const optionA = toText(rowRecord.optionA)
                const optionB = toText(rowRecord.optionB)

                if (!feature && !optionA && !optionB) {
                  return null
                }

                return {
                  feature,
                  optionA,
                  optionB,
                } satisfies BlogComparisonRow
              })
                .filter((row: BlogComparisonRow | null): row is BlogComparisonRow => row !== null)
          : []

        if (rows.length === 0) {
          return null
        }

        return {
          type: "comparisonTable",
          featureLabel: toText(item?.featureLabel) || "Feature",
          optionALabel: toText(item?.optionALabel) || "Option A",
          optionBLabel: toText(item?.optionBLabel) || "Option B",
          rows,
        } satisfies BlogSectionBlock
      }

      if (type === "checklist" || type === "numberList" || type === "bulletList") {
        const items = Array.isArray(item?.items)
          ? item.items.map((entry: unknown) => toText(entry)).filter(Boolean)
          : splitLines(toText(item?.itemsText))

        if (items.length === 0) {
          return null
        }

        return {
          type,
          items,
        } satisfies BlogSectionBlock
      }

      if (type === "cta") {
        const text = toText(item?.text)
        const buttonLabel = toText(item?.buttonLabel)
        const buttonUrl = toText(item?.buttonUrl)

        if (!text && !buttonLabel && !buttonUrl) {
          return null
        }

        return {
          type: "cta",
          text,
          buttonLabel,
          buttonUrl,
          alignment: normalizeImageAlignment(item?.alignment),
        } satisfies BlogSectionBlock
      }

      if (type === "divider") {
        const style = normalizeDividerStyle(item?.style)
        const icon = toText(item?.icon)

        return {
          type: "divider",
          style,
          icon,
        } satisfies BlogSectionBlock
      }

      return null
    })
    .filter((block): block is BlogSectionBlock => block !== null)
}

function getImageWidthClass(width: ImageWidth) {
  if (width === "full") {
    return "is-full"
  }

  if (width === "wide") {
    return "is-wide"
  }

  return "is-content"
}

function getImageAlignmentClass(alignment: ImageAlignment) {
  if (alignment === "left") {
    return "align-left"
  }

  if (alignment === "right") {
    return "align-right"
  }

  return "align-center"
}

function getQuoteStyleClass(style: QuoteBackgroundStyle) {
  if (style === "accent") {
    return "quote-accent"
  }

  if (style === "tinted") {
    return "quote-tinted"
  }

  return "quote-plain"
}

function renderBlocksToHtml(blocks: BlogSectionBlock[]) {
  return blocks
    .map((block) => {
      if (block.type === "heading") {
        const tag = block.level
        return `<${tag}>${escapeHtml(block.text)}</${tag}>`
      }

      if (block.type === "paragraph") {
        return splitParagraphs(block.content)
          .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
          .join("")
      }

      if (block.type === "image") {
        const classList = ["blog-block-image", `layout-${block.layout}`, getImageAlignmentClass(block.alignment), getImageWidthClass(block.width)]
        const items = block.images.length > 0 ? block.images : [{ url: block.imageUrl, alt: block.imageAlt, caption: block.title }]
        const imageItems = items
          .filter((item) => item.url)
          .map((item) => {
            return [
              `<figure>`,
              `<img src="${escapeHtml(item.url)}" alt="${escapeHtml(item.alt || "Section image")}" loading="lazy" />`,
              item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : "",
              `</figure>`,
            ].join("")
          })
          .join("")

        if (!imageItems) {
          return ""
        }

        const titleHtml = block.title ? `<div class="blog-block-image-title title-${block.titlePosition}">${escapeHtml(block.title)}</div>` : ""

        return `<div class="${classList.join(" ")}">${block.titlePosition === "top" ? titleHtml : ""}${imageItems}${block.titlePosition === "bottom" ? titleHtml : ""}</div>`
      }

      if (block.type === "quote") {
        return [
          `<blockquote class="blog-block-quote ${getQuoteStyleClass(block.backgroundStyle)}">`,
          `<p>${escapeHtml(block.quote)}</p>`,
          block.author ? `<cite>${escapeHtml(block.author)}</cite>` : "",
          `</blockquote>`,
        ].join("")
      }

      if (block.type === "table") {
        const columnCount = Math.max(
          block.columns.length,
          ...block.rows.map((row) => row.length),
          1,
        )
        const columns =
          block.columns.length >= columnCount
            ? block.columns
            : [...block.columns, ...Array.from({ length: columnCount - block.columns.length }, (_, index) => `Column ${block.columns.length + index + 1}`)]
        const head = block.hasHeader
          ? `<thead><tr>${columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead>`
          : ""
        const body = `<tbody>${block.rows
          .map((row) => {
            const normalizedRow = row.length >= columnCount ? row : [...row, ...Array.from({ length: columnCount - row.length }, () => "")]
            return `<tr>${normalizedRow.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`
          })
          .join("")}</tbody>`
        const table = `<table>${head}${body}</table>`

        return block.responsive ? `<div class="blog-block-table responsive">${table}</div>` : `<div class="blog-block-table">${table}</div>`
      }

      if (block.type === "comparisonTable") {
        const rows = block.rows
          .map(
            (row) =>
              `<tr><td>${escapeHtml(row.feature)}</td><td>${escapeHtml(row.optionA)}</td><td>${escapeHtml(row.optionB)}</td></tr>`,
          )
          .join("")

        return [
          `<div class="blog-block-table responsive">`,
          `<table>`,
          `<thead><tr><th>${escapeHtml(block.featureLabel)}</th><th>${escapeHtml(block.optionALabel)}</th><th>${escapeHtml(block.optionBLabel)}</th></tr></thead>`,
          `<tbody>${rows}</tbody>`,
          `</table>`,
          `</div>`,
        ].join("")
      }

      if (block.type === "checklist") {
        return `<ul class="blog-block-checklist">${block.items
          .map((item) => `<li><span class="check">✓</span><span>${escapeHtml(item)}</span></li>`)
          .join("")}</ul>`
      }

      if (block.type === "numberList") {
        return `<ol>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>`
      }

      if (block.type === "bulletList") {
        return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
      }

      if (block.type === "cta") {
        const alignClass = getImageAlignmentClass(block.alignment)
        const button = block.buttonLabel && block.buttonUrl
          ? `<a class="cta-button" href="${escapeHtml(block.buttonUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(block.buttonLabel)}</a>`
          : ""
        return `<div class="blog-block-cta ${alignClass}">${block.text ? `<p>${escapeHtml(block.text)}</p>` : ""}${button}</div>`
      }

      const dividerClass = block.style === "icon" ? "divider-icon" : `divider-${block.style}`
      return `<div class="blog-block-divider ${dividerClass}">${block.style === "icon" && block.icon ? `<span>${escapeHtml(block.icon)}</span>` : ""}</div>`
    })
    .join("")
}

export function normalizeBlogSections(input: unknown): BlogSection[] {
  if (!Array.isArray(input)) {
    return []
  }

  return input
    .map((item) => {
      const heading = toText(item?.heading)
      const subheading = toText(item?.subheading)
      const content = toText(item?.content)
      const bulletPoints = Array.isArray(item?.bulletPoints)
        ? item.bulletPoints.map((point: unknown) => toText(point)).filter(Boolean)
        : []
      const imageUrl = toText(item?.imageUrl)
      const imageAlt = toText(item?.imageAlt)
      const imagePosition = item?.imagePosition === "left" ? "left" : "right"
      const explicitBlocks = normalizeBlogSectionBlocks(item?.blocks)
      const blocks =
        explicitBlocks.length > 0
          ? explicitBlocks
          : blocksFromLegacySection({
              heading,
              subheading,
              content,
              bulletPoints,
              imageUrl,
              imageAlt,
              imagePosition,
            })

      if (!legacySectionHasContent({ heading, subheading, content, bulletPoints, imageUrl }) && blocks.length === 0) {
        return null
      }

      return {
        heading,
        subheading,
        content,
        bulletPoints,
        imageUrl,
        imageAlt,
        imagePosition,
        blocks,
      } satisfies BlogSection
    })
    .filter((section): section is BlogSection => section !== null)
}

export function parseBlogSectionsField(value: FormDataEntryValue | null) {
  if (typeof value !== "string" || !value.trim()) {
    return []
  }

  try {
    const parsed = JSON.parse(value)
    return normalizeBlogSections(parsed)
  } catch {
    return []
  }
}

export function buildBlogHtmlFromSections(sections: BlogSection[]) {
  if (sections.length === 0) {
    return ""
  }

  return sections
    .map((section) => {
      const blocks = section.blocks.length > 0
        ? section.blocks
        : blocksFromLegacySection({
            heading: section.heading,
            subheading: section.subheading,
            content: section.content,
            bulletPoints: section.bulletPoints,
            imageUrl: section.imageUrl,
            imageAlt: section.imageAlt,
            imagePosition: section.imagePosition,
          })

      return [
        `<section class="blog-section">`,
        `<div class="blog-section-copy">${renderBlocksToHtml(blocks)}</div>`,
        `</section>`,
      ].join("")
    })
    .join("")
}

export function sanitizeBlogHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "section",
      "div",
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "span",
      "figure",
      "figcaption",
      "blockquote",
      "cite",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "ol",
      "li",
      "hr",
    ],
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      "*": ["class"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    disallowedTagsMode: "discard",
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
  })
}
