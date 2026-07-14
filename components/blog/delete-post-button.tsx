"use client"

import { useState } from "react"
import { AlertTriangle, Trash2 } from "lucide-react"

type DeletePostButtonProps = {
  postId: string
  postTitle: string
  deleteAction: (formData: FormData) => Promise<void>
}

export function DeletePostButton({ postId, postTitle, deleteAction }: DeletePostButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-[#FEF2F2] text-[#B91C1C] hover:bg-[#FEE2E2]"
        title="Delete post"
        aria-label="Delete post"
        onClick={() => setIsOpen(true)}
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/45"
            aria-label="Close delete confirmation"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-xl p-6">
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-[#FEF2F2] text-[#B91C1C] inline-flex items-center justify-center shrink-0">
                <AlertTriangle className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Delete this blog post?</h3>
                <p className="mt-1 text-sm text-slate-600">
                  This action cannot be undone. The post
                  <span className="font-semibold text-slate-800"> "{postTitle}"</span>
                  will be permanently removed.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <form
                action={async (formData) => {
                  await deleteAction(formData)
                  setIsOpen(false)
                }}
              >
                <input type="hidden" name="postId" value={postId} readOnly />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#B91C1C] text-white hover:bg-[#991B1B]"
                >
                  Yes, Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
