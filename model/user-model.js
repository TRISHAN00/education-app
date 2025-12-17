import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
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
      required: Schema.Types.ObjectId,
    },
    lessonIds: {
      required: [String],
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
