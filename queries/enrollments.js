import { replaceMongoIdInArray } from "@/lib/convertData";
import Enrollment from "@/model/enrollment-model";

async function getAllEnrollments() {
  const enrollments = await Enrollment.find({}).lean();
  return replaceMongoIdInArray(enrollments);
}

async function getEnrollmentsByCourseId(courseId) {
    const enrollments = await Enrollment.find({course_id: courseId}).lean();
    return enrollments;
}

export { getAllEnrollments, getEnrollmentsByCourseId };

