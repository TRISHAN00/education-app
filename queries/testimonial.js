const { replaceMongoIdInArray } = require("@/lib/convertData");
const { default: Testimonials } = require("@/model/testimonials-mode");

async function getTestimonialForCourse(courseId) {
  const testimonials = await Testimonials.find({ courseId: courseId }).lean();
  return replaceMongoIdInArray(testimonials);
}

export { getTestimonialForCourse };

