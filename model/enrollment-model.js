import mongoose from "mongoose";

const { Schema } = mongoose;

const enrollmentSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId, ref: 'User'
    },
    course_id: {
      type: Schema.Types.ObjectId, ref: 'Course'
    },
    enrollment_date: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    completion_date: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Enrollment = mongoose.models.Enrollment || mongoose.model("Enrollment", enrollmentSchema);

export default Enrollment;
