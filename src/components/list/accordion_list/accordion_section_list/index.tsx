import { FC } from "react";
import cx from "classnames";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import { ICourseLesson, ICourseSection } from "types";
import { convertTime } from "utils/convert_time";
import AccordionLessonList from "../accordion_lesson_list";
import { useRecoilState } from "recoil";
import { courseState } from "store/course";

interface IAccordionSectionList {
    data: ICourseSection[],
    preview: boolean,
    className?: string,
};

const AccordionSectionList: FC<IAccordionSectionList> = ({data, preview}) => {
    const [{section_id}, setCourseValue] = useRecoilState(courseState);

    const totalDuration = (time: number) => convertTime(time);

    const onClickAccordionSectionHandler = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
        e.stopPropagation();
        setCourseValue(prev => ({...prev, section_id: prev.section_id === id ? -1 : id}));
    };

    return (
        <>
            {data.map((item) => (
                <div
                    key={item.index}
                    className="flex flex-col border-b border-solid border-Black/[.1] last:border-none py-[2.4rem] first:pt-0">
                    <div
                        className="flex flex-col gap-[1.2rem] cursor-pointer"
                        onClick={(e) => onClickAccordionSectionHandler(e, item.index)}>
                        <div className="flex items-center justify-between">
                            <Typography
                                tagName="h5"
                                className="font-semi text-heading_5 text-Black whitespace-nowrap text-ellipsis overflow-hidden"
                                title={item.title}
                            >
                                {item.title}
                            </Typography>
                            <Sprite
                                id={
                                    item.index === section_id
                                        ? "icon-chevron-up"
                                        : "icon-chevron-down"
                                }
                                size="medium"
                                className="stroke-Grey flex-[0_0_2.4rem]"
                            />

                        </div>
                        <div className="flex items-center gap-[1.6rem]">
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_3 text-Grey flex items-center gap-[6px]">
                                <Sprite
                                    id="icon-player-play"
                                    size="small"
                                    className="stroke-Grey"
                                />
                                {item.lecture_count} lessons
                            </Typography>
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_3 text-Grey flex items-center gap-[6px]">
                                <Sprite id="icon-clock" size="small" className="stroke-Grey" />
                                {totalDuration(item.content_length).withSeconds}
                            </Typography>
                            {!preview && item.completed && (
                                <Typography
                                    tagName="span"
                                    className="font-regular text-paragraph_3 text-Green flex items-center gap-[6px]">
                                    <Sprite id="icon-check" size="small" className="stroke-Green" />
                                    Completed
                                </Typography>
                            )}
                        </div>
                    </div>
                    <ul
                        className={cx(
                            "flex flex-col gap-[2.4rem] mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-200 ease-in",
                            {
                                "!max-h-[1000rem] !opacity-100 !mt-[2.4rem]":
                                    item.index === section_id,
                            }
                        )}>
                        {section_id === item.index && (
                            <AccordionLessonList 
                                data={item.lessons as ICourseLesson[]}
                                preview={preview}
                            />
                        )}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default AccordionSectionList;