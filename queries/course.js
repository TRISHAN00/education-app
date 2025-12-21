import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
import Category from "@/model/category-model";
import Course from "@/model/course-model";
import Module from "@/model/module-model";
import Testimonials from "@/model/testimonials-mode";
import User from "@/model/user-model";
import { getEnrollmentsByCourseId } from "./enrollments";
import { getTestimonialForCourse } from "./testimonial";

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

    throw new Error("Failed to retrieve course.");
  }
}

async function getCoursesByInstructorId(instructorId) {
  const courses = await Course.find({ instructor: instructorId }).lean();
  const replaceCourses = replaceMongoIdInArray(courses);

  const enrollments = await Promise.all(
    replaceCourses.map(async (course) => {
      const enrollment = await getEnrollmentsByCourseId(course.id);
      return enrollment;
    })
  );

  const totalEnrollments = enrollments.reduce((item, currentValue) => {
    return item.length + currentValue.length;
  });

  const testimonials = await Promise.all(
    replaceCourses.map(async (test) => {
      let testimonial = await getTestimonialForCourse(test.id);
      return testimonial;
    })
  );

  const totalTestimonials = testimonials.flat();

  const avrRating =
    totalTestimonials.reduce(function (acc, obj) {
      return acc + obj.rating;
    }, 0) / totalTestimonials.length;

  return {
    courses: courses.length,
    enrollments: totalEnrollments,
    reviews: totalTestimonials.length,
    ratings : avrRating.toPrecision(2)
  };
}
export { getCourseById, getCourses, getCoursesByInstructorId };

