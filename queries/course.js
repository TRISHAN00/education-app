const { Course } = require("@/model/course-model");

async function getCourses() {
    const courses = await Course.find();
    return courses
}

export { getCourses };

