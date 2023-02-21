import { FC, useMemo } from "react";
import cx from "classnames";
import parse from "html-react-parser";
import Button from "components/ui/button";
import Typography from "components/ui/typography";
import { ICourseDetails, ICourseLesson, ICourseSection } from "types";
import { useRecoilState } from "recoil";
import { courseState } from "store/course";
import Player from "components/player";
import { sectionState } from "store/section";
import NextLessonCard from "components/card/next_lesson_card";

const LessonHeading: FC<ICourseDetails> = ({sections, title, headline}) => {
    const [{section_id, lesson_id}, setCourseValue] = useRecoilState(courseState);
    const [sectionValue, setSectionValue] = useRecoilState(sectionState);

    const testValue = useMemo(() => {
        return sections.filter((item => item.index === section_id)).map(item => ({...item, lessons: (item.lessons as ICourseLesson[])?.filter(lesson => lesson.id === lesson_id)}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lesson_id]);

    const nextCourseById = useMemo(() => {
        if(testValue[0]?.lessons[0]?.next_id !== null && testValue[0]?.lessons[0]?.type === "text"){
            const copySections = JSON.parse(JSON.stringify(sections));
            const result = (copySections as ICourseSection[]).filter(section => {
                section.lessons = (section.lessons as ICourseLesson[]).filter(lesson => lesson.id === testValue[0].lessons[0].next_id);
                if(section.lessons.length > 0) return section.lessons;
                return null;
            });
                
            return result;
        };

        return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [testValue, lesson_id]);

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSectionValue(prev => !prev);
    };

    const onClickNextLessonHandler = (e: React.MouseEvent<HTMLButtonElement>, les_id: number, sec_id: number) => {
        setCourseValue(prev => ({...prev, lesson_id: les_id, section_id: sec_id}));
    };

    return (
        <section className="w-full mt-[-8rem] bg-Dark_gradient">
            <div className={cx("w-container px-lg mx-auto pt-[13.6rem] pb-[4.8rem] flex items-start justify-between relative duration-200 ease-in", {
                "min-h-[51.6rem]": testValue[0]?.lessons[0]?.type === "video",
                "min-h-[47.6rem]": testValue[0]?.lessons[0]?.type === "text",
            })}>
                <div className={cx("flex flex-col justify-start mt-[1.6rem]", {
                    "w-[43.2rem]": testValue[0]?.lessons[0]?.type === "video",
                    "w-auto": testValue[0]?.lessons[0]?.type === "text",
                })}>
                    {/* COURSE TITLE */}
                    <Typography
                        tagName="h3"
                        className="font-extra text-heading_3 text-White"
                    >
                        {title}
                    </Typography>
                    {/* COURSE SECTION TITLE */}
                    <Typography
                        tagName="p"
                        className="font-regular text-paragraph_2 text-Grey mt-[4.8rem]"
                    >
                        {testValue[0]?.title} · Lesson {testValue[0]?.lessons[0]?.object_id}
                    </Typography>
                    {/* COURSE LESSON TITLE */}
                    <Typography
                        tagName="h4"
                        className="font-bold text-heading_4 text-White mt-[1.2rem]"
                    >
                        {testValue[0]?.lessons[0]?.title}
                    </Typography>
                    {/* COURSE LESSON DESC */}
                    {testValue[0]?.lessons[0]?.description.length > 0 ? (
                        <div className="font-regular text-paragraph_2 text-Grey mt-[2.4rem] max-w-[59.2rem]">
                            {parse(testValue[0]?.lessons[0]?.description)}
                        </div>
                    ) : (
                        <Typography
                            tagName="p"
                            className="font-regular text-paragraph_2 text-Grey mt-[2.4rem] max-w-[59.2rem]"
                        >
                            {headline}
                        </Typography>
                    )}
                </div>
                <div className="flex flex-col items-end h-full">
                    <Button
                        rounded
                        outline
                        className="font-bold text-paragraph_2 text-Yellow_light px-[2.4rem] py-[1rem] hover:text-Dark mt-[1.6rem] flex-[0_0_auto]"
                        onClick={onClickHandler}
                    >
                        {sectionValue ? "Show lessons" : "Hide lessons"}
                    </Button>
                    {testValue[0]?.lessons[0]?.type === "text" && nextCourseById && (
                        <NextLessonCard 
                            data={nextCourseById}
                            onClickNextLessonhandler={onClickNextLessonHandler}
                            className="mb-[2.4rem] mt-[5.2rem]"
                        />
                    )}
                </div>
                <Player 
                    url={testValue[0]?.lessons[0]?.video_url!}
                    typeButton="primary"
                    className={cx("transition-all duration-200 ease-in", {
                        "-bottom-[12.8rem] right-[11.2rem] opacity-100": testValue[0]?.lessons[0]?.type === "video",
                        "-bottom-[12.8rem] -right-[200%] opacity-0": testValue[0]?.lessons[0]?.type === "text",
                    })}
                />
            </div>
        </section>
    );
};

export default LessonHeading;