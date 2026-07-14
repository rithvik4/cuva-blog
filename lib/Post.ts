import mongoose from "mongoose"

const postSectionSchema = new mongoose.Schema(
  {
    heading: { type: String, default: "" },
    subheading: { type: String, default: "" },
    content: { type: String, default: "" },
    bulletPoints: { type: [String], default: [] },
    imageUrl: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    imagePosition: { type: String, enum: ["left", "right"], default: "right" },
    blocks: { type: [mongoose.Schema.Types.Mixed], default: [] },
  },
  { _id: false }
)

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true }, // The actual blog body
    sections: { type: [postSectionSchema], default: [] },
    author: { type: String, required: true },
    date: { type: String, required: true },
    category: { type: String, required: true },
    imageGradient: { type: String, required: true },
    image: { type: String, required: false },
  },
  { timestamps: true }
)

// In Next.js dev/runtime, stale compiled models can drop newly added fields.
if (mongoose.models.Post) {
  delete mongoose.models.Post
}

export const Post = mongoose.model("Post", postSchema)
