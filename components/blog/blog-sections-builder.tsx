"use client"

import { forwardRef, useEffect, useMemo, useImperativeHandle, useRef, useState } from "react"
import type { ReactNode } from "react"
import { AlignLeft, ChevronDown, GripVertical, Heading, Image as ImageIcon, List, PlusCircle, Rows3, Trash2 } from "lucide-react"
import type { BlogSection, BlogSectionBlock } from "@/lib/blog-content"

type BlockType = BlogSectionBlock["type"]

type AdminImageHistoryItem = {
  id: string
  url: string
  alt: string
  caption: string
}

const MAX_IMAGE_UPLOAD_COUNT = 6
let idCounter = 0

function DropdownField({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="h-4 w-4 text-slate-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
    </div>
  )
}

type AdminSectionBlock = {
  id: string
  type: BlockType
  imageMode: "single" | "multiple"
  headingText: string
  headingLevel: "h2" | "h3" | "h4"
  paragraphText: string
  imageUrl: string
  imageAlt: string
  imageCaption: string
  imageTitlePosition: "top" | "bottom"
  imageAlignment: "left" | "center" | "right"
  imageWidth: "content" | "wide" | "full"
  imageLayout: "single" | "grid" | "carousel"
  imageUrlsText: string
  imageCaptionsText: string
  imageFileName: string
  imageFilesNames: string[]
  imageHistory: AdminImageHistoryItem[]
  quoteText: string
  quoteAuthor: string
  quoteBackgroundStyle: "plain" | "tinted" | "accent"
  tableColumnsText: string
  tableRowsText: string
  tableHasHeader: boolean
  tableResponsive: boolean
  comparisonFeatureLabel: string
  comparisonOptionALabel: string
  comparisonOptionBLabel: string
  comparisonRowsText: string
  listItemsText: string
  ctaText: string
  ctaButtonLabel: string
  ctaButtonUrl: string
  ctaAlignment: "left" | "center" | "right"
  dividerStyle: "simple" | "dotted" | "gradient" | "icon"
  dividerIcon: string
}

type AdminBlogSection = {
  id: string
  selectedBlockType: BlockType
  blocks: AdminSectionBlock[]
}

const BLOCK_OPTIONS: Array<{ value: BlockType; label: string }> = [
  { value: "heading", label: "Heading" },
  { value: "paragraph", label: "Paragraph" },
  { value: "image", label: "Image" },
  { value: "quote", label: "Quote" },
  { value: "table", label: "Table" },
  { value: "comparisonTable", label: "Comparison Table" },
  { value: "checklist", label: "Checklist" },
  { value: "numberList", label: "Number List" },
  { value: "bulletList", label: "Bullet List" },
  { value: "cta", label: "CTA" },
  { value: "divider", label: "Divider" },
]

function makeId() {
  idCounter += 1
  return `builder-id-${idCounter}`
}

function makeBlock(type: BlockType): AdminSectionBlock {
  return {
    id: makeId(),
    type,
    imageMode: "single",
    headingText: "",
    headingLevel: "h2",
    paragraphText: "",
    imageUrl: "",
    imageAlt: "",
    imageCaption: "",
    imageTitlePosition: "bottom",
    imageAlignment: "center",
    imageWidth: "wide",
    imageLayout: "single",
    imageUrlsText: "",
    imageCaptionsText: "",
    imageFileName: "",
    imageFilesNames: [],
    imageHistory: [],
    quoteText: "",
    quoteAuthor: "",
    quoteBackgroundStyle: "plain",
    tableColumnsText: "",
    tableRowsText: "",
    tableHasHeader: true,
    tableResponsive: true,
    comparisonFeatureLabel: "Feature",
    comparisonOptionALabel: "Option A",
    comparisonOptionBLabel: "Option B",
    comparisonRowsText: "",
    listItemsText: "",
    ctaText: "",
    ctaButtonLabel: "",
    ctaButtonUrl: "",
    ctaAlignment: "center",
    dividerStyle: "simple",
    dividerIcon: "",
  }
}

function splitLines(text: string) {
  return text
    .split(/\r?\n/g)
    .map((part) => part.trim())
    .filter(Boolean)
}

function makeBlockFromInitial(block: BlogSectionBlock): AdminSectionBlock {
  const base = makeBlock(block.type)

  if (block.type === "heading") {
    return { ...base, headingText: block.text, headingLevel: block.level }
  }

  if (block.type === "paragraph") {
    return { ...base, paragraphText: block.content }
  }

  if (block.type === "image") {
    const imageBlock = block as {
      mode?: "single" | "multiple"
      title?: string
      titlePosition?: "top" | "bottom"
      caption?: string
      imageUrl: string
      imageAlt: string
      alignment: "left" | "center" | "right"
      width: "content" | "wide" | "full"
      layout: "single" | "grid" | "carousel"
      images: Array<{ url: string; alt?: string; caption: string }>
    }

    const hydratedHistory = (imageBlock.images.length > 0
      ? imageBlock.images
      : imageBlock.imageUrl
        ? [{ url: imageBlock.imageUrl, alt: imageBlock.imageAlt, caption: imageBlock.title || imageBlock.caption || "" }]
        : [])
      .filter((item) => item.url)
      .slice(0, MAX_IMAGE_UPLOAD_COUNT)
      .map((item) => ({
        id: makeId(),
        url: item.url,
        alt: item.alt || imageBlock.imageAlt,
        caption: item.caption || "",
      }))

    return {
      ...base,
      imageMode: imageBlock.mode || (imageBlock.images.length > 1 ? "multiple" : "single"),
      imageUrl: imageBlock.imageUrl,
      imageAlt: imageBlock.imageAlt,
      imageCaption: imageBlock.title || imageBlock.caption || "",
      imageTitlePosition: imageBlock.titlePosition || "bottom",
      imageAlignment: imageBlock.alignment,
      imageWidth: imageBlock.width,
      imageLayout: imageBlock.layout,
      imageUrlsText: imageBlock.images.map((item) => item.url).join("\n"),
      imageCaptionsText: imageBlock.images.map((item) => item.caption).join("\n"),
      imageHistory: hydratedHistory,
    }
  }

  if (block.type === "quote") {
    return {
      ...base,
      quoteText: block.quote,
      quoteAuthor: block.author,
      quoteBackgroundStyle: block.backgroundStyle,
    }
  }

  if (block.type === "table") {
    return {
      ...base,
      tableColumnsText: block.columns.join("\n"),
      tableRowsText: block.rows.map((row) => row.join(" | ")).join("\n"),
      tableHasHeader: block.hasHeader,
      tableResponsive: block.responsive,
    }
  }

  if (block.type === "comparisonTable") {
    return {
      ...base,
      comparisonFeatureLabel: block.featureLabel,
      comparisonOptionALabel: block.optionALabel,
      comparisonOptionBLabel: block.optionBLabel,
      comparisonRowsText: block.rows.map((row) => `${row.feature} | ${row.optionA} | ${row.optionB}`).join("\n"),
    }
  }

  if (block.type === "checklist" || block.type === "numberList" || block.type === "bulletList") {
    return {
      ...base,
      listItemsText: block.items.join("\n"),
    }
  }

  if (block.type === "cta") {
    return {
      ...base,
      ctaText: block.text,
      ctaButtonLabel: block.buttonLabel,
      ctaButtonUrl: block.buttonUrl,
      ctaAlignment: block.alignment,
    }
  }

  return {
    ...base,
    dividerStyle: block.style,
    dividerIcon: block.icon,
  }
}

function makeSectionFromInitial(section: BlogSection): AdminBlogSection {
  const initialBlocks = section.blocks.map(makeBlockFromInitial)

  return {
    id: makeId(),
    selectedBlockType: "heading",
    blocks: initialBlocks.length > 0 ? initialBlocks : [makeBlock("heading")],
  }
}

function makeSection(): AdminBlogSection {
  return {
    id: makeId(),
    selectedBlockType: "heading",
    blocks: [makeBlock("heading")],
  }
}

function serializeBlock(block: AdminSectionBlock, sectionIndex: number, blockIndex: number) {
  if (block.type === "heading") {
    const text = block.headingText.trim()
    return {
      block: { type: "heading" as const, text, level: block.headingLevel },
      hasContent: Boolean(text),
    }
  }

  if (block.type === "paragraph") {
    const content = block.paragraphText.trim()
    return {
      block: { type: "paragraph" as const, content },
      hasContent: Boolean(content),
    }
  }

  if (block.type === "image") {
    const persistedHistory = block.imageHistory
      .filter((item) => item.url.trim())
      .slice(0, MAX_IMAGE_UPLOAD_COUNT)
      .map((item) => ({
        url: item.url.trim(),
        alt: item.alt.trim() || block.imageAlt.trim(),
        caption: item.caption.trim(),
      }))
    const singleHistory = persistedHistory[0]
    const hasPendingImageUpload =
      block.imageMode === "multiple" ? block.imageFilesNames.length > 0 : Boolean(block.imageFileName)

    return {
      block: {
        type: "image" as const,
        mode: block.imageMode,
        title: block.imageCaption.trim(),
        titlePosition: block.imageTitlePosition,
        imageUrl: singleHistory?.url || block.imageUrl.trim(),
        imageAlt: (singleHistory?.alt || block.imageAlt).trim(),
        uploadKey: `${sectionIndex}-${blockIndex}`,
        alignment: block.imageAlignment,
        width: block.imageWidth,
        layout: block.imageMode === "multiple" ? block.imageLayout : "single",
        images: block.imageMode === "multiple" ? persistedHistory : [],
      },
      hasContent: Boolean(block.imageAlt.trim() || block.imageCaption.trim() || persistedHistory.length > 0 || hasPendingImageUpload),
    }
  }

  if (block.type === "quote") {
    const quote = block.quoteText.trim()
    return {
      block: {
        type: "quote" as const,
        quote,
        author: block.quoteAuthor.trim(),
        backgroundStyle: block.quoteBackgroundStyle,
      },
      hasContent: Boolean(quote),
    }
  }

  if (block.type === "table") {
    const columns = splitLines(block.tableColumnsText)
    const rows = splitLines(block.tableRowsText).map((line) => line.split("|").map((cell) => cell.trim()))

    return {
      block: {
        type: "table" as const,
        columns,
        rows,
        hasHeader: block.tableHasHeader,
        responsive: block.tableResponsive,
      },
      hasContent: Boolean(columns.length > 0 || rows.length > 0),
    }
  }

  if (block.type === "comparisonTable") {
    const rows = splitLines(block.comparisonRowsText)
      .map((line) => line.split("|").map((part) => part.trim()))
      .map((parts) => ({
        feature: parts[0] || "",
        optionA: parts[1] || "",
        optionB: parts[2] || "",
      }))
      .filter((row) => row.feature || row.optionA || row.optionB)

    return {
      block: {
        type: "comparisonTable" as const,
        featureLabel: block.comparisonFeatureLabel.trim() || "Feature",
        optionALabel: block.comparisonOptionALabel.trim() || "Option A",
        optionBLabel: block.comparisonOptionBLabel.trim() || "Option B",
        rows,
      },
      hasContent: Boolean(rows.length > 0),
    }
  }

  if (block.type === "checklist" || block.type === "numberList" || block.type === "bulletList") {
    const items = splitLines(block.listItemsText)
    return {
      block: {
        type: block.type,
        items,
      },
      hasContent: Boolean(items.length > 0),
    }
  }

  if (block.type === "cta") {
    const text = block.ctaText.trim()
    const buttonLabel = block.ctaButtonLabel.trim()
    const buttonUrl = block.ctaButtonUrl.trim()

    return {
      block: {
        type: "cta" as const,
        text,
        buttonLabel,
        buttonUrl,
        alignment: block.ctaAlignment,
      },
      hasContent: Boolean(text || buttonLabel || buttonUrl),
    }
  }

  return {
    block: {
      type: "divider" as const,
      style: block.dividerStyle,
      icon: block.dividerIcon.trim(),
    },
    hasContent: true,
  }
}

function renderBlockFields(
  sectionIndex: number,
  blockIndex: number,
  block: AdminSectionBlock,
  updateBlockField: (sectionId: string, blockId: string, key: keyof AdminSectionBlock, value: string | boolean | string[] | AdminImageHistoryItem[]) => void,
  multiImageSelectionsRef: { current: Record<string, File[]> },
  imageInputRefs: { current: Record<string, HTMLInputElement | null> },
  sectionId: string,
) {
  if (block.type === "heading") {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2 sm:col-span-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Heading</label>
          <input
            value={block.headingText}
            onChange={(event) => updateBlockField(sectionId, block.id, "headingText", event.target.value)}
            className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            placeholder="Write heading text"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Level</label>
          <DropdownField>
            <select
              value={block.headingLevel}
              onChange={(event) => updateBlockField(sectionId, block.id, "headingLevel", event.target.value)}
              className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-9 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            >
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
            </select>
          </DropdownField>
        </div>
      </div>
    )
  }

  if (block.type === "paragraph") {
    return (
      <div className="space-y-2">
        <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Paragraph</label>
        <textarea
          value={block.paragraphText}
          onChange={(event) => updateBlockField(sectionId, block.id, "paragraphText", event.target.value)}
          className="w-full h-[120px] bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-y"
          placeholder="Write one or more paragraphs"
        />
      </div>
    )
  }

  if (block.type === "image") {
    const selectedCount = block.imageMode === "multiple" ? block.imageFilesNames.length : 0
    const remainingSlots = Math.max(0, MAX_IMAGE_UPLOAD_COUNT - block.imageHistory.length - selectedCount)
    const pendingFiles = multiImageSelectionsRef.current[block.id] || []

    return (
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Image Type</label>
            <DropdownField>
              <select
                value={block.imageMode}
                onChange={(event) => {
                  const nextMode = event.target.value as "single" | "multiple"
                  updateBlockField(sectionId, block.id, "imageMode", nextMode)

                  if (nextMode === "single") {
                    multiImageSelectionsRef.current[block.id] = []
                    updateBlockField(sectionId, block.id, "imageFilesNames", [])
                    return
                  }

                  updateBlockField(sectionId, block.id, "imageFileName", "")
                }}
                className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-9 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
              >
                <option value="single">Single Image</option>
                <option value="multiple">Multiple Images</option>
              </select>
            </DropdownField>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Alignment</label>
            <DropdownField>
              <select
                value={block.imageAlignment}
                onChange={(event) => updateBlockField(sectionId, block.id, "imageAlignment", event.target.value)}
                className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-9 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </DropdownField>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Size Display</label>
            <DropdownField>
              <select
                value={block.imageWidth}
                onChange={(event) => updateBlockField(sectionId, block.id, "imageWidth", event.target.value)}
                className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-9 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
              >
                <option value="content">Content</option>
                <option value="wide">Wide</option>
                <option value="full">Full</option>
              </select>
            </DropdownField>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">
              {block.imageMode === "multiple" ? `Upload Multiple Images (max ${MAX_IMAGE_UPLOAD_COUNT})` : "Upload Image"}
            </label>
            <input
              type="file"
              name={
                block.imageMode === "multiple"
                  ? `sectionBlockImageFiles-${sectionIndex}-${blockIndex}`
                  : `sectionBlockImageFile-${sectionIndex}-${blockIndex}`
              }
              ref={(element) => {
                imageInputRefs.current[block.id] = element
              }}
              accept="image/*"
              multiple={block.imageMode === "multiple"}
              onChange={(event) => {
                if (block.imageMode === "multiple") {
                  const incomingFiles = Array.from(event.target.files || [])
                  const existingFiles = multiImageSelectionsRef.current[block.id] || []
                  const maxSelectable = Math.max(0, MAX_IMAGE_UPLOAD_COUNT - block.imageHistory.length)
                  const mergedFiles = [...existingFiles, ...incomingFiles].slice(0, maxSelectable)

                  multiImageSelectionsRef.current[block.id] = mergedFiles

                  const dataTransfer = new DataTransfer()
                  mergedFiles.forEach((file) => dataTransfer.items.add(file))
                  event.currentTarget.files = dataTransfer.files

                  updateBlockField(
                    sectionId,
                    block.id,
                    "imageFilesNames",
                    mergedFiles.map((file) => file.name),
                  )
                  return
                }

                multiImageSelectionsRef.current[block.id] = event.target.files?.[0] ? [event.target.files[0]] : []
                updateBlockField(sectionId, block.id, "imageFileName", event.target.files?.[0]?.name || "")
              }}
              className="block w-full text-[12px] text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-[#EEF2FF] file:px-2.5 file:py-1.5 file:text-[12px] file:font-semibold file:text-[#4F46E5] hover:file:bg-[#E0E7FF]"
            />
            {block.imageMode === "multiple" ? (
              <p className="text-[11px] text-slate-500">You can keep up to {MAX_IMAGE_UPLOAD_COUNT} images. Remaining slots: {remainingSlots}</p>
            ) : null}
            {block.imageMode === "multiple" && block.imageFilesNames.length > 0 ? (
              <p className="text-[11px] text-slate-500">Selected now: {block.imageFilesNames.join(", ")}</p>
            ) : null}
            {block.imageMode === "single" && block.imageFileName ? (
              <p className="text-[11px] text-slate-500">Selected now: {block.imageFileName}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Title</label>
            <input
              value={block.imageCaption}
              onChange={(event) => updateBlockField(sectionId, block.id, "imageCaption", event.target.value)}
              className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
              placeholder="Image title"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Alt Text</label>
            <input
              value={block.imageAlt}
              onChange={(event) => updateBlockField(sectionId, block.id, "imageAlt", event.target.value)}
              className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
              placeholder="Describe the image"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Title Position</label>
            <DropdownField>
              <select
                value={block.imageTitlePosition}
                onChange={(event) => updateBlockField(sectionId, block.id, "imageTitlePosition", event.target.value)}
                className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-9 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
              >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
              </select>
            </DropdownField>
          </div>
          {block.imageMode === "multiple" ? (
            <div className="space-y-2">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Layout</label>
              <DropdownField>
                <select
                  value={block.imageLayout}
                  onChange={(event) => updateBlockField(sectionId, block.id, "imageLayout", event.target.value)}
                  className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-9 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
                >
                  <option value="grid">Grid</option>
                  <option value="carousel">Moving Carousel</option>
                </select>
              </DropdownField>
            </div>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Upload History</label>
          {((block.imageMode === "multiple" && pendingFiles.length > 0) || (block.imageMode === "single" && block.imageFileName)) ? (
            <div className="space-y-2">
              <p className="text-[12px] text-slate-600 font-medium">Pending uploads</p>
              {block.imageMode === "multiple" ? (
                pendingFiles.map((file, pendingIndex) => (
                  <div key={`${file.lastModified}-${file.name}-${file.size}`} className="rounded-lg border border-slate-200 bg-white px-3 py-2 flex items-center justify-between gap-3">
                    <p className="text-[12px] text-slate-600 truncate">{file.name}</p>
                    <button
                      type="button"
                      onClick={() => {
                        const currentFiles = [...(multiImageSelectionsRef.current[block.id] || [])]
                        currentFiles.splice(pendingIndex, 1)
                        multiImageSelectionsRef.current[block.id] = currentFiles

                        updateBlockField(
                          sectionId,
                          block.id,
                          "imageFilesNames",
                          currentFiles.map((item) => item.name),
                        )

                        const inputElement = imageInputRefs.current[block.id]
                        if (inputElement) {
                          const dataTransfer = new DataTransfer()
                          currentFiles.forEach((item) => dataTransfer.items.add(item))
                          inputElement.files = dataTransfer.files

                          if (currentFiles.length === 0) {
                            inputElement.value = ""
                          }
                        }
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 flex items-center justify-between gap-3">
                  <p className="text-[12px] text-slate-600 truncate">{block.imageFileName}</p>
                  <button
                    type="button"
                    onClick={() => {
                      multiImageSelectionsRef.current[block.id] = []
                      updateBlockField(sectionId, block.id, "imageFileName", "")

                      const inputElement = imageInputRefs.current[block.id]
                      if (inputElement) {
                        inputElement.value = ""
                      }
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-red-600"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          ) : null}

          {block.imageHistory.length === 0 ? (
            <p className="text-[12px] text-slate-500">No uploaded images yet.</p>
          ) : (
            <div className="space-y-3">
              {block.imageHistory.map((historyItem, historyIndex) => (
                <div key={historyItem.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-3 min-w-0">
                      <img src={historyItem.url} alt={historyItem.alt || `Uploaded image ${historyIndex + 1}`} className="h-12 w-12 rounded-md object-cover border border-slate-200" />
                      <p className="text-[12px] text-slate-600 truncate">{historyItem.url.split("/").pop() || historyItem.url}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        updateBlockField(
                          sectionId,
                          block.id,
                          "imageHistory",
                          block.imageHistory.filter((item) => item.id !== historyItem.id),
                        )
                      }
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={historyItem.alt}
                      onChange={(event) =>
                        updateBlockField(
                          sectionId,
                          block.id,
                          "imageHistory",
                          block.imageHistory.map((item) =>
                            item.id === historyItem.id ? { ...item, alt: event.target.value } : item,
                          ),
                        )
                      }
                      className="w-full bg-white rounded-[10px] px-3 py-2 text-[12px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
                      placeholder="Alt text"
                    />
                    <input
                      value={historyItem.caption}
                      onChange={(event) =>
                        updateBlockField(
                          sectionId,
                          block.id,
                          "imageHistory",
                          block.imageHistory.map((item) =>
                            item.id === historyItem.id ? { ...item, caption: event.target.value } : item,
                          ),
                        )
                      }
                      className="w-full bg-white rounded-[10px] px-3 py-2 text-[12px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
                      placeholder="Per-image caption"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  if (block.type === "quote") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Quote</label>
          <textarea
            value={block.quoteText}
            onChange={(event) => updateBlockField(sectionId, block.id, "quoteText", event.target.value)}
            className="w-full h-[90px] bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-y"
            placeholder="Write quote text"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Author</label>
          <input
            value={block.quoteAuthor}
            onChange={(event) => updateBlockField(sectionId, block.id, "quoteAuthor", event.target.value)}
            className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            placeholder="Quote author"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Background Style</label>
          <DropdownField>
            <select
              value={block.quoteBackgroundStyle}
              onChange={(event) => updateBlockField(sectionId, block.id, "quoteBackgroundStyle", event.target.value)}
              className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-9 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            >
              <option value="plain">Plain</option>
              <option value="tinted">Tinted</option>
              <option value="accent">Accent</option>
            </select>
          </DropdownField>
        </div>
      </div>
    )
  }

  if (block.type === "table") {
    return (
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Columns (one per line)</label>
            <textarea
              value={block.tableColumnsText}
              onChange={(event) => updateBlockField(sectionId, block.id, "tableColumnsText", event.target.value)}
              className="w-full h-[90px] bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-y"
              placeholder="Column 1&#10;Column 2"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Rows (use | between cells)</label>
            <textarea
              value={block.tableRowsText}
              onChange={(event) => updateBlockField(sectionId, block.id, "tableRowsText", event.target.value)}
              className="w-full h-[90px] bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-y"
              placeholder="Value A | Value B&#10;Value C | Value D"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="inline-flex items-center gap-2 text-[12px] text-slate-700">
            <input
              type="checkbox"
              checked={block.tableHasHeader}
              onChange={(event) => updateBlockField(sectionId, block.id, "tableHasHeader", event.target.checked)}
            />
            Header Row
          </label>
          <label className="inline-flex items-center gap-2 text-[12px] text-slate-700">
            <input
              type="checkbox"
              checked={block.tableResponsive}
              onChange={(event) => updateBlockField(sectionId, block.id, "tableResponsive", event.target.checked)}
            />
            Responsive Table
          </label>
        </div>
      </div>
    )
  }

  if (block.type === "comparisonTable") {
    return (
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Feature</label>
            <input
              value={block.comparisonFeatureLabel}
              onChange={(event) => updateBlockField(sectionId, block.id, "comparisonFeatureLabel", event.target.value)}
              className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Option A</label>
            <input
              value={block.comparisonOptionALabel}
              onChange={(event) => updateBlockField(sectionId, block.id, "comparisonOptionALabel", event.target.value)}
              className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Option B</label>
            <input
              value={block.comparisonOptionBLabel}
              onChange={(event) => updateBlockField(sectionId, block.id, "comparisonOptionBLabel", event.target.value)}
              className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Rows (Feature | Option A | Option B)</label>
          <textarea
            value={block.comparisonRowsText}
            onChange={(event) => updateBlockField(sectionId, block.id, "comparisonRowsText", event.target.value)}
            className="w-full h-[100px] bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-y"
            placeholder="Latency | Good | Better&#10;Cost | Medium | Low"
          />
        </div>
      </div>
    )
  }

  if (block.type === "checklist" || block.type === "numberList" || block.type === "bulletList") {
    return (
      <div className="space-y-2">
        <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Items (one per line)</label>
        <textarea
          value={block.listItemsText}
          onChange={(event) => updateBlockField(sectionId, block.id, "listItemsText", event.target.value)}
          className="w-full h-[100px] bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 resize-y"
          placeholder="First item&#10;Second item"
        />
      </div>
    )
  }

  if (block.type === "cta") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">CTA Text</label>
          <input
            value={block.ctaText}
            onChange={(event) => updateBlockField(sectionId, block.id, "ctaText", event.target.value)}
            className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            placeholder="Ready to see it in action?"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Button Label</label>
          <input
            value={block.ctaButtonLabel}
            onChange={(event) => updateBlockField(sectionId, block.id, "ctaButtonLabel", event.target.value)}
            className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            placeholder="Book Demo"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Button URL</label>
          <input
            value={block.ctaButtonUrl}
            onChange={(event) => updateBlockField(sectionId, block.id, "ctaButtonUrl", event.target.value)}
            className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
            placeholder="/demo"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="space-y-2">
        <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Divider Style</label>
        <DropdownField>
          <select
            value={block.dividerStyle}
            onChange={(event) => updateBlockField(sectionId, block.id, "dividerStyle", event.target.value)}
            className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-9 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
          >
            <option value="simple">Simple</option>
            <option value="dotted">Dotted</option>
            <option value="gradient">Gradient</option>
            <option value="icon">Icon</option>
          </select>
        </DropdownField>
      </div>
      <div className="space-y-2">
        <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Icon</label>
        <input
          value={block.dividerIcon}
          onChange={(event) => updateBlockField(sectionId, block.id, "dividerIcon", event.target.value)}
          className="w-full bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
          placeholder="Optional icon text"
        />
      </div>
    </div>
  )
}

export const BlogSectionsBuilder = forwardRef<
  { getSections: () => BlogSection[] },
  { initialSections?: BlogSection[] }
>(function BlogSectionsBuilder({ initialSections = [] }, ref) {
  const [sections, setSections] = useState<AdminBlogSection[]>(() => {
    if (initialSections.length > 0) {
      return initialSections.map(makeSectionFromInitial)
    }

    return [makeSection()]
  })
  const [draggedBlock, setDraggedBlock] = useState<{ sectionId: string; blockId: string } | null>(null)
  const [dragOverPosition, setDragOverPosition] = useState<{ sectionId: string; blockIndex: number } | null>(null)
  const multiImageSelectionsRef = useRef<Record<string, File[]>>({})
  const imageInputRefs = useRef<Record<string, HTMLInputElement | null>>({})

  const sectionsSeed = useMemo(() => JSON.stringify(initialSections), [initialSections])

  useEffect(() => {
    if (initialSections.length > 0) {
      setSections(initialSections.map(makeSectionFromInitial))
      return
    }

    setSections([makeSection()])
  }, [sectionsSeed, initialSections])

  const encodedSections = useMemo(() => {
    const payload = sections
      .map((section, sectionIndex) => {
        const serializedBlocks = section.blocks.map((block, blockIndex) => serializeBlock(block, sectionIndex, blockIndex))
        const blocks = serializedBlocks.filter((entry) => entry.hasContent).map((entry) => entry.block)

        return {
          heading: "",
          subheading: "",
          content: "",
          bulletPoints: [] as string[],
          imageUrl: "",
          imageAlt: "",
          imagePosition: "right" as const,
          blocks,
        }
      })
      .filter((section) => section.blocks.length > 0)

    return payload
  }, [sections])

  // Process pending image uploads and upload to server
  const processImageUploads = async (): Promise<BlogSection[]> => {
    // Create a copy of sections to update
    const updatedSections = sections.map(section => ({
      ...section,
      blocks: section.blocks.map(block => {
        if (block.type !== "image") return block
        
        const fileInput = imageInputRefs.current[block.id]
        if (!fileInput?.files?.length) return block
        
        // Mark that we'll process these files
        return { ...block, _pendingFiles: Array.from(fileInput.files) } as any
      })
    }))

    // Process each file and upload
    for (const section of updatedSections) {
      for (const block of section.blocks) {
        if (block.type !== "image" || !(block as any)._pendingFiles) continue

        const filesToProcess = (block as any)._pendingFiles as File[]
        const processedImages: Array<{ url: string; alt: string; caption: string }> = []

        for (const file of filesToProcess) {
          const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
              const dataUrl = reader.result as string
              const base64String = dataUrl.split(",")[1] || ""
              resolve(base64String)
            }
            reader.onerror = reject
            reader.readAsDataURL(file)
          })

          // Upload to server
          try {
            const uploadResponse = await fetch("/api/upload-image", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                imageBase64: base64,
                imageFilename: file.name,
                imageMimeType: file.type,
                altText: block.imageAlt || file.name,
              }),
            })

            const uploadResult = await uploadResponse.json()
            if (uploadResult.success && uploadResult.data?.url) {
              processedImages.push({
                url: uploadResult.data.url,
                alt: block.imageAlt || file.name,
                caption: block.title || "",
              })
            } else {
              throw new Error(uploadResult.error || "Upload failed")
            }
          } catch (err) {
            console.error("Failed to upload image:", err)
            throw new Error(`Failed to upload image: ${file.name}`)
          }
        }

        // Update the block with uploaded images
        if (processedImages.length > 0) {
          block.imageHistory = processedImages.map((img) => ({
            url: img.url,
            alt: img.alt,
            caption: img.caption,
          }))
          if (block.imageMode === "single") {
            block.imageUrl = processedImages[0].url
          }
          // Clear the file input
          const fileInput = imageInputRefs.current[block.id]
          if (fileInput) {
            const dataTransfer = new DataTransfer()
            fileInput.files = dataTransfer.files
          }
        }

        // Remove temp marker
        delete (block as any)._pendingFiles
      }
    }

    // Update sections state to trigger re-render of encodedSections
    setSections(updatedSections)
    
    // Return the re-encoded sections with proper serialization for all block types
    const finalSections = updatedSections
      .map((section, sectionIndex) => {
        const serializedBlocks = section.blocks.map((block, blockIndex) => {
          // Use serializeBlock for ALL block types (not just images)
          return serializeBlock(block, sectionIndex, blockIndex)
        })
        
        const blocks = serializedBlocks.filter((entry) => entry.hasContent).map((entry) => entry.block)

        return {
          heading: "",
          subheading: "",
          content: "",
          bulletPoints: [] as string[],
          imageUrl: "",
          imageAlt: "",
          imagePosition: "right" as const,
          blocks,
        }
      })
      .filter((section) => section.blocks.length > 0)

    return finalSections
  }

  // Expose getSections and processImages via ref
  useImperativeHandle(
    ref,
    () => ({
      getSections: () => encodedSections as BlogSection[],
      processImageUploads,
    }),
    [encodedSections, sections]
  )

  const addSection = () => {
    setSections((current) => [...current, makeSection()])
  }

  const removeSection = (id: string) => {
    setSections((current) => {
      if (current.length === 1) {
        return [makeSection()]
      }

      return current.filter((section) => section.id !== id)
    })
  }

  const updateSectionField = (sectionId: string, key: keyof AdminBlogSection, value: string) => {
    setSections((current) =>
      current.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              [key]: value,
            }
          : section,
      ),
    )
  }

  const addBlockToSection = (sectionId: string) => {
    setSections((current) =>
      current.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              blocks: [...section.blocks, makeBlock(section.selectedBlockType)],
            }
          : section,
      ),
    )
  }

  const removeBlock = (sectionId: string, blockId: string) => {
    setSections((current) =>
      current.map((section) => {
        if (section.id !== sectionId) {
          return section
        }

        const updatedBlocks = section.blocks.filter((block) => block.id !== blockId)

        return {
          ...section,
          blocks: updatedBlocks.length > 0 ? updatedBlocks : [makeBlock("heading")],
        }
      }),
    )
  }

  const updateBlockField = (
    sectionId: string,
    blockId: string,
    key: keyof AdminSectionBlock,
    value: string | boolean | string[] | AdminImageHistoryItem[],
  ) => {
    setSections((current) =>
      current.map((section) => {
        if (section.id !== sectionId) {
          return section
        }

        return {
          ...section,
          blocks: section.blocks.map((block) =>
            block.id === blockId
              ? {
                  ...block,
                  [key]: value,
                }
              : block,
          ),
        }
      }),
    )
  }

  const moveBlockInSection = (sectionId: string, fromBlockId: string, toBlockIndex: number) => {
    setSections((current) =>
      current.map((section) => {
        if (section.id !== sectionId) {
          return section
        }

        const fromIndex = section.blocks.findIndex((block) => block.id === fromBlockId)
        if (fromIndex < 0 || toBlockIndex < 0 || toBlockIndex >= section.blocks.length || fromIndex === toBlockIndex) {
          return section
        }

        const reordered = [...section.blocks]
        const [moved] = reordered.splice(fromIndex, 1)
        reordered.splice(toBlockIndex, 0, moved)

        return {
          ...section,
          blocks: reordered,
        }
      }),
    )
  }

  const handleBlockDragStart = (sectionId: string, blockId: string) => {
    setDraggedBlock({ sectionId, blockId })
  }

  const handleBlockDragOver = (sectionId: string, blockIndex: number) => {
    setDragOverPosition({ sectionId, blockIndex })
  }

  const handleBlockDrop = (sectionId: string, blockIndex: number) => {
    if (!draggedBlock) {
      return
    }

    if (draggedBlock.sectionId === sectionId) {
      moveBlockInSection(sectionId, draggedBlock.blockId, blockIndex)
    }

    setDraggedBlock(null)
    setDragOverPosition(null)
  }

  const handleBlockDragEnd = () => {
    setDraggedBlock(null)
    setDragOverPosition(null)
  }

  return (
    <div className="space-y-4 flex flex-col flex-1 min-h-0 pt-2 border-t border-slate-100">
      <div className="flex items-center justify-between shrink-0">
        <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F] flex items-center gap-2.5">
          <AlignLeft className="h-[14px] w-[14px]" /> Blog Sections
        </label>
        <button
          type="button"
          onClick={addSection}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#5B3CF5] hover:text-[#4a2fd5]"
        >
          <PlusCircle className="h-4 w-4" />
          Add section
        </button>
      </div>

      <p className="text-[12px] text-slate-500 shrink-0">
        Each section can contain multiple reusable blocks. Use the Section Blocks dropdown beside every section to add heading, paragraph, image, quote, table, checklist, list, CTA, or divider blocks.
      </p>

      <input type="hidden" name="sections" value={JSON.stringify(encodedSections)} readOnly />

      <div className="space-y-4 overflow-y-auto pr-1">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-sm font-semibold text-slate-800">Section {sectionIndex + 1}</h3>
              <div className="flex flex-wrap items-center gap-2">
                <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F]">Section Blocks</label>
                <DropdownField>
                  <select
                    value={section.selectedBlockType}
                    onChange={(event) => updateSectionField(section.id, "selectedBlockType", event.target.value)}
                    className="appearance-none bg-white rounded-[10px] px-3 py-2 pr-9 text-[12px] text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20"
                  >
                    {BLOCK_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </DropdownField>
                <button
                  type="button"
                  onClick={() => addBlockToSection(section.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B3CF5] hover:text-[#4a2fd5]"
                >
                  <PlusCircle className="h-3.5 w-3.5" />
                  Add block
                </button>
                <button
                  type="button"
                  onClick={() => removeSection(section.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-red-600"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Remove section
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {section.blocks.map((block, blockIndex) => {
                const blockLabel = BLOCK_OPTIONS.find((option) => option.value === block.type)?.label || block.type
                const isDragOver = dragOverPosition?.sectionId === section.id && dragOverPosition.blockIndex === blockIndex
                const isDragging = draggedBlock?.sectionId === section.id && draggedBlock.blockId === block.id

                return (
                  <div
                    key={block.id}
                    draggable
                    onDragStart={(event) => {
                      event.dataTransfer.effectAllowed = "move"
                      handleBlockDragStart(section.id, block.id)
                    }}
                    onDragOver={(event) => {
                      event.preventDefault()
                      event.dataTransfer.dropEffect = "move"
                      handleBlockDragOver(section.id, blockIndex)
                    }}
                    onDrop={(event) => {
                      event.preventDefault()
                      handleBlockDrop(section.id, blockIndex)
                    }}
                    onDragEnd={handleBlockDragEnd}
                    className={`rounded-lg border bg-white p-3 space-y-3 transition-all ${isDragOver ? "border-[#5B3CF5] ring-2 ring-[#5B3CF5]/20" : "border-slate-200"} ${isDragging ? "opacity-60" : "opacity-100"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className="inline-flex items-center text-slate-400 cursor-grab active:cursor-grabbing" title="Drag to reorder block">
                          <GripVertical className="h-3.5 w-3.5" />
                        </span>
                        {block.type === "heading" ? <Heading className="h-3.5 w-3.5" /> : block.type === "paragraph" ? <AlignLeft className="h-3.5 w-3.5" /> : block.type === "image" ? <ImageIcon className="h-3.5 w-3.5" /> : block.type === "checklist" || block.type === "numberList" || block.type === "bulletList" ? <List className="h-3.5 w-3.5" /> : <Rows3 className="h-3.5 w-3.5" />} 
                        {blockLabel} block
                      </div>
                      <button
                        type="button"
                        onClick={() => removeBlock(section.id, block.id)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 hover:text-red-600"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Delete
                      </button>
                    </div>

                    {renderBlockFields(sectionIndex, blockIndex, block, updateBlockField, multiImageSelectionsRef, imageInputRefs, section.id)}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
