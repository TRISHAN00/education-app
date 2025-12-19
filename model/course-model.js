import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    modules: {
      type: [Schema.Types.Mixed],
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    testimonials: {
      type: [Schema.Types.ObjectId],
      required: false,
    },
    quizSet: {
      type: Schema.Types.ObjectId,
      ref: "Quiz",
      required: false,
    },
    createdOn: {
      type: Date,
      required: true,
    },
    modifiedOn: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
