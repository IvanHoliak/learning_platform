import { FC } from "react";
import cx from "classnames";
import Button from "components/ui/button";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import { ICourseLesson, ICourseSection } from "types";
import { convertTime } from "utils/convert_time";

interface INextLessonCard {
    data: ICourseSection[],
    onClickNextLessonhandler: (e: React.MouseEvent<HTMLButtonElement>, les_id: number, sec_id: number) => void,
    className?: string,
};

const NextLessonCard: FC<INextLessonCard> = ({data, onClickNextLessonhandler, className}) => {
    const classNames = cx("w-[44rem] h-[15.6rem] pl-[3.6rem] py-[2.4rem] pr-[2.4rem] border border-White/[.15] rounded-[1.2rem]", {}, className);
    
    const {index} = data[0];
    const {id, title, object_id, content_length} = (data[0].lessons as ICourseLesson[])[0];
    const totalDuration = (time: number) => convertTime(time);

    return (
        <div className={classNames}>
            <div className="flex items-start justify-between w-full h-full">
                <div className="flex flex-col h-full justify-center overflow-hidden">
                    <Typography
                        tagName="span"
                        className="font-regular text-paragraph_3 text-Grey"
                    >
                        Next · Lesson {object_id} 
                    </Typography>
                    <Typography
                        tagName="span"
                        className="font-regular text-paragraph_2 text-White mt-[4px] whitespace-nowrap text-ellipsis overflow-x-hidden"
                        title={title}
                    >
                        {title}
                    </Typography>
                    <Typography
                        tagName="span"
                        className="font-regular text-paragraph_3 text-Grey flex items-center gap-[6px] mt-[1.6rem]">
                        <Sprite id="icon-clock" size="small" className="stroke-Grey" />
                        {totalDuration(content_length).withSeconds}
                    </Typography>
                </div>
                <Button
                    rounded
                    outline
                    className="font-bold text-paragraph_2 text-White px-[2.4rem] py-[1.2rem] flex-[0_0_auto] !border-White hover:!bg-White hover:text-Black"
                    onClick={(e) => onClickNextLessonhandler(e, id, index)}
                >
                    Next lesson
                </Button>
            </div>
        </div>
    );
};

export default NextLessonCard;