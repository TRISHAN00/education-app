import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import Category from "@/model/category-mode";
import Course from "@/model/course-model";
import Module from "@/model/module-model";
import Testimonials from "@/model/testimonials-mode";
import User from "@/model/user-model";

async function getCourses() {
  const courses = await Course.find({active: true})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "modules",
      model: Module,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "testimonials",
      model: Testimonials,
    }).lean();
  return replaceMongoIdInArray(courses);
}

async function getCourseById(id) {
  const course = await Course.findById(id).lean();
  return replaceMongoIdInObject(course);
}

export { getCourseById, getCourses };

