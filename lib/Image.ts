import mongoose from "mongoose"

const imageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true }, // Can be base64, external URL, or S3 link
    altText: { type: String, default: "" },
  },
  { timestamps: true }
)

export const Image = mongoose.models.Image || mongoose.model("Image", imageSchema)
