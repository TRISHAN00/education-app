import mongoose, { Schema } from "mongoose";

const testimonialsSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Testimonials =
  mongoose.models.Testimonials ||
  mongoose.model("Testimonials", testimonialsSchema);

export default Testimonials;
