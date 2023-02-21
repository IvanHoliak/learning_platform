import LessonContent from "components/course/lesson/content";
import LessonHeading from "components/course/lesson/heading";
import Loader from "components/ui/loader";
import useCustomQuery from "hooks/useCustomQuery";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getCourseDetails } from "services/getCourseDetails";
import { courseState } from "store/course";
import { ICourseDetails, ICourseLesson } from "types";

const Course = () => {
    const {id} = useParams();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {isLoading, error, data} = useCustomQuery(["course", `${id}`], () => getCourseDetails(+id!));

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setCourseValue] = useRecoilState(courseState);

    useEffect(() => {
        if(data){
            const unCompletedSectionId = (data as ICourseDetails).sections.find(section => !section.completed)?.index!;
            const inProgressLessonId = ((data as ICourseDetails).sections.find(section => section.index === unCompletedSectionId)!.lessons as ICourseLesson[])?.find(lesson => lesson.in_progress)?.id ?? ((data as ICourseDetails).sections[0].lessons[0] as ICourseLesson).id;
            setCourseValue(prev => ({...prev, lesson_id: inProgressLessonId!, section_id: unCompletedSectionId!}));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    if(isLoading){
        return (
            <>
                <div className="w-full mt-[-8rem] bg-Dark_gradient min-h-[51.6rem] flex items-center justify-center">
                    <Loader />
                </div>
                <div className="w-full mt-[-8rem] bg-White min-h-[51.6rem] flex items-center justify-center">
                    <Loader 
                        className="!border-Grey"
                    />
                </div>
            </>
        );
    };

    return (
        <>
            <LessonHeading {...data as ICourseDetails}/>
            <LessonContent {...data as ICourseDetails}/>        
        </>
    );
};

export default Course;