import { model, Schema } from "mongoose";
import { IPost } from "../Interfaces/Post.type.js";

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true, default: "Generic" },
    tags: {
      type: [String],
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

export const Post = model<IPost>("Post", PostSchema);
