"use client"

import { useEffect, useMemo, useState } from "react"

type CarouselItem = {
  url: string
  alt?: string
  caption?: string
}

type AutoSlidingCarouselProps = {
  items: CarouselItem[]
  intervalMs?: number
}

export function AutoSlidingCarousel({ items, intervalMs = 10000 }: AutoSlidingCarouselProps) {
  const slides = useMemo(() => items.filter((item) => item.url), [items])
  const imagesPerSlide = 3
  const [activeIndex, setActiveIndex] = useState(0)
  const [disableTransition, setDisableTransition] = useState(false)

  const trackItems = useMemo(() => {
    if (slides.length === 0) {
      return [] as CarouselItem[]
    }

    const cloneCount = Math.min(imagesPerSlide, slides.length)
    return [...slides, ...slides.slice(0, cloneCount)]
  }, [slides])

  useEffect(() => {
    setActiveIndex(0)
  }, [slides.length])

  useEffect(() => {
    if (!disableTransition) {
      return
    }

    const frame = requestAnimationFrame(() => {
      setDisableTransition(false)
    })

    return () => cancelAnimationFrame(frame)
  }, [disableTransition])

  useEffect(() => {
    if (slides.length <= 1) {
      return
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => current + 1)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [slides.length, intervalMs])

  if (slides.length === 0) {
    return null
  }

  const activeDot = slides.length > 0 ? activeIndex % slides.length : 0

  return (
    <div className="space-y-3">
      <div className="overflow-hidden w-full">
        <div
          className={`flex ${disableTransition ? "" : "transition-transform duration-700 ease-out"}`}
          style={{ transform: `translateX(-${(activeIndex * 100) / imagesPerSlide}%)` }}
          onTransitionEnd={() => {
            if (activeIndex >= slides.length) {
              setDisableTransition(true)
              setActiveIndex(0)
            }
          }}
        >
          {trackItems.map((item, index) => (
            <figure key={`${item.url}-${index}`} className="w-1/3 shrink-0 px-1.5">
              <img src={item.url} alt={item.alt || "Section image"} className="w-full h-auto object-cover rounded-lg" loading="lazy" />
              {item.caption ? <figcaption className="px-1 py-2 text-sm text-slate-600">{item.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </div>

      {slides.length > 1 ? (
        <div className="flex items-center justify-center gap-1.5">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${index === activeDot ? "w-5 bg-slate-700" : "w-2 bg-slate-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
