import mongoose, { Schema } from "mongoose";
const courseSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  modules: {
    required: false,
    type: Array,
  },
  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },
  category: {
    required: true,
    type: Schema.ObjectId,
  },
  instructor: {
    required: false,
    type: Schema.ObjectId,
  },
  testimonials: {
    required: false,
    type: Array,
  },
  quizSet: {
    required: false,
    type: Schema.ObjectId,
  },
});

export const Course =
  mongoose.model.course ?? mongoose.model("Course", courseSchema);
