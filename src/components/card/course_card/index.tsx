import { FC, useMemo } from "react";
import cx from "classnames";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import { ICoursesListItem } from "types";
import Rating from "components/rating";

interface ICourseCard {
    titleClassName?: string,
    colorRating: "yellow" | "yellow-light"
}

const CourseCard: FC<ICoursesListItem & ICourseCard> = ({title, author, rating, imgSrc, img_src, popular, num_lectures, lectures, titleClassName, colorRating}) => {

    const titleClassNames = cx("font-bold text-paragraph_2 mt-[8px]", titleClassName);
    
    const ratingFloor = useMemo(() => {
        return +rating.toFixed(1);
    }, [rating]);

    const Popular = () => {
        return (
            <span className="font-regular text-paragraph_3 text-White px-[1.6rem] py-[6px] rounded-full bg-Blue absolute top-[1.6rem] left-[1.6rem]">Popular</span>
        );
    };

    return (
        <div className="max-w-[28rem] flex flex-col cursor-pointer relative overflow-hidden">
            {popular && <Popular />}
            <img src={imgSrc || img_src} alt={title} className="rounded-[4px]"/>
            <div className="flex items-center mt-[1.6rem]">
                <Typography
                    tagName="p"
                    className={cx("font-bold text-paragraph_2 text-Yellow_light", {
                        "text-Yellow": colorRating === "yellow",
                        "text-Yellow_light": colorRating === "yellow-light",
                    })}
                >   
                    {ratingFloor}
                </Typography>
                <div className="flex gap-[3.5px] ml-[9px] bg-clip-text bg-Yellow relative">
                    <Rating 
                        rating={ratingFloor}
                        color={colorRating}
                    />
                </div>
            </div>
            <Typography
                tagName="p"
                className={titleClassNames}
            >
                {title}
            </Typography>
            <div className="flex items-center gap-x-[1.6rem] mt-[6px] flex-wrap">
                <Typography
                    tagName="span"
                    className="font-regular text-paragraph_3 text-Grey mt-[6px] flex items-center gap-[1rem] overflow-ellipsis whitespace-nowrap overflow-x-hidden"
                >
                    <Sprite 
                        id="icon-user"
                        size="small"
                        className="stroke-Grey flex-[0_0_auto]"
                    />
                    {author}
                </Typography>
                <Typography
                    tagName="span"
                    className="font-regular text-paragraph_3 text-Grey mt-[6px] flex items-center gap-[1rem] overflow-ellipsis whitespace-nowrap overflow-x-hidden"
                >
                    <Sprite 
                        id="icon-player-play"
                        size="small"
                        className="stroke-Grey flex-[0_0_auto]"
                    />
                    {lectures || num_lectures} lessons
                </Typography>
            </div>
        </div>
    );
};

export default CourseCard;