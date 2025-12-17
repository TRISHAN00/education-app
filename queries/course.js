import Category from "@/model/category-mode";
import Course from "@/model/course-model";
import Module from "@/model/module-model";
import User from "@/model/user-model";

async function getCourses() {
  const courses = await Course.find()
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
    });
  return courses;
}

export { getCourses };

