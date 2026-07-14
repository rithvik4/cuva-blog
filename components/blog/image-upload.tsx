"use client"

import { useMemo, useState } from "react"
import { UploadCloud, Image as ImageIcon } from "lucide-react"

export function ImageUpload({ initialImageUrl }: { initialImageUrl?: string | null }) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const previewUrl = useMemo(() => {
    if (selectedFile) {
      return URL.createObjectURL(selectedFile)
    }

    return initialImageUrl || ""
  }, [selectedFile, initialImageUrl])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        setSelectedFile(file)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type.startsWith("image/")) {
        setSelectedFile(file)
      }
    }
  }

  return (
    <div className="space-y-3 flex flex-col h-[116px]">
      <label className="text-[11px] font-semibold uppercase tracking-widest text-[#798A9F] flex items-center gap-2.5">
        <ImageIcon className="h-[14px] w-[14px]" /> Cover Image
      </label>
      
      <div 
        className={`relative w-full border border-dashed rounded-[10px] flex-1 flex flex-col items-center justify-center transition-colors ${
          dragActive ? "border-[#5B3CF5] bg-[#5B3CF5]/5" : "border-[#E1E5F2] bg-[#F4F6F8] hover:border-slate-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {/* Hidden file input */}
        <input 
          type="file" 
          name="imageFile" 
          accept="image/*"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />

        <div className="flex flex-col items-center justify-center text-center px-4 w-full">
          {previewUrl ? (
            <>
              <img src={previewUrl} alt="Cover preview" className="h-10 w-16 rounded object-cover border border-slate-200 mb-1.5" />
              <p className="text-[12px] font-semibold text-slate-700 truncate w-full">{selectedFile ? selectedFile.name : "Current cover image"}</p>
              <p className="text-[10px] font-medium text-[#5B3CF5] mt-1">Change</p>
            </>
          ) : (
            <>
              <UploadCloud className="h-[18px] w-[18px] text-[#A0AAB5] mb-1.5" strokeWidth={2} />
              <p className="text-[11px] font-medium text-[#798A9F]">
                Upload image
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
