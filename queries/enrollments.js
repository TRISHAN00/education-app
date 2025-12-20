import { replaceMongoIdInArray } from "@/lib/convertData";
import Enrollment from "@/model/enrollment-model";

async function getAllEnrollments() {
  const enrollments = await Enrollment.find({}).lean();
  return replaceMongoIdInArray(enrollments);
}

export { getAllEnrollments };

