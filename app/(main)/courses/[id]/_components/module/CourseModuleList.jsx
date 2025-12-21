import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Video } from "lucide-react";
import CourseLessonList from "./CourseLessonList";

export default async function CourseModuleList({ module }) {

  return (
    <AccordionItem className="border-none" value="item-1">
      <AccordionTrigger>{module.title}</AccordionTrigger>
      <AccordionContent>
        {/* header */}
        <div class="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
          <span className="flex items-center gap-1.5">
            <Video className="w-4 h-4" />
            {module.lessonIds.length} Lessons
          </span>
        </div>
        {/* header ends */}

        <div className="space-y-3">
          {module.lessonIds.map((lessonId) => {
            console.log(lessonId)
            return (
                <CourseLessonList lessonId={lessonId} />
            )
          })}

         
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
