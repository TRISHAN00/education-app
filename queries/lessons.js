import { replaceMongoIdInObject } from "@/lib/convertData";
import Lesson from "@/model/lesson-mode";

async function getLesson(lessonId) {
  const lesson = await Lesson.findById(lessonId).lean();
  return replaceMongoIdInObject(lesson);
}

export { getLesson };

