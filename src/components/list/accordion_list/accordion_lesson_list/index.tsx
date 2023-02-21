import { FC } from "react";
import cx from "classnames";
import IconBox from "components/ui/icon_box";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import { ICourseLesson } from "types";
import { convertTime } from "utils/convert_time";
import { useRecoilState } from "recoil";
import { courseState } from "store/course";

interface IAccordionLessonList {
    data: ICourseLesson[],
    preview: boolean
};

const AccordionLessonList: FC<IAccordionLessonList> = ({data, preview}) => {
    const [{lesson_id}, setCourseValue] = useRecoilState(courseState);

    const totalDuration = (time: number) => convertTime(time);
    
    const onClickHandler = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
        if(lesson_id !== id){
            setCourseValue(prev => ({...prev, lesson_id: id}));
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        };
    };

    return (
        <>
            {data.map((lesson) => (
                <li 
                    key={lesson.id} className="flex items-start gap-[1.6rem] cursor-pointer"
                    onClick={(e) => onClickHandler(e, lesson.id)}
                >
                    <IconBox 
                        rounded="full" 
                        size="small" 
                        className={cx("bg-Grey_light flex-[0_0_3.6rem]", {
                            "!bg-Yellow_light": !preview && !lesson.completed
                        })}
                    >
                        <Sprite
                            id={lesson?.completed && !preview ? "icon-check" : lesson?.in_progress && !preview ? "icon-player-pause" : lesson.icon_class}
                            size="medium"
                            className={cx("stroke-Grey", {
                                "!stroke-Black": !preview && !lesson.completed,
                                "!fill-Black": !preview && lesson.in_progress
                            })}
                        />
                    </IconBox>
                    <div className="flex flex-col gap-[4px]">
                        <Typography
                            tagName="p"
                            className="font-medium text-paragraph_2 text-Black mt-[6px]">
                            {lesson.object_id}.{lesson.title}
                        </Typography>
                        {lesson.content_length !== 0 && (
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_3 text-Grey flex items-center gap-[6px]">
                                <Sprite
                                    id="icon-clock"
                                    size="small"
                                    className="stroke-Grey"
                                />
                                {totalDuration(lesson.content_length).withSeconds}
                            </Typography>
                        )}
                    </div>
                </li>
            ))}
        </>
    );
};

export default AccordionLessonList;