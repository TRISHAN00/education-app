import mongoose, { Schema } from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    lessonIds : [{type: Schema.ObjectId, ref: "Lesson"}]
  },
  { timestamps: true }
);

const Module =
  mongoose.models.Module || mongoose.model("Module", moduleSchema);

export default Module;
