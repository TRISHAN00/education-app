import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
import Category from "@/model/category-mode";
import Course from "@/model/course-model";
import Module from "@/model/module-model";
import Testimonials from "@/model/testimonials-mode";
import User from "@/model/user-model";

async function getCourses() {
  const courses = await Course.find({ active: true })
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
    })
    .lean();
  return replaceMongoIdInArray(courses);
}

async function getCourseById(id) {
  try {
    const course = await Course.findById(id)
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
        populate: {
          path: "userId",
          model: User,
        },
      })
      .lean();

    if (!course) {
      return null;
    }

    return replaceMongoIdInObject(course);
  } catch (error) {
    console.error(`Error fetching course with id ${id}:`, error);
    // Depending on your application's needs, you can rethrow the error
    // or return null/undefined
    throw new Error("Failed to retrieve course.");
  }
}

export { getCourseById, getCourses };

