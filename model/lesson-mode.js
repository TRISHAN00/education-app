import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    video_url: {
      type: String,
      required: false,
    },
    published: {
      type: Boolean,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Module = mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema);

export default Module;
