import { FC } from "react";
import cx from "classnames";
import { ICard } from "types";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";

interface IOurCategoriesCard {
    className?: string,
}

const TestimonialsCard: FC<ICard & IOurCategoriesCard> = ({id, icon, author, desc, className}) => {
    const classNames = cx("group flex flex-col p-[2.4rem] rounded-[4px] bg-transparent shadow-[inset_0_0_0_1px] shadow-Black/[.1] cursor-pointer min-w-[38.4rem] hover:bg-White hover:shadow-[0_7px_55px_rgba(3,41,75,.1)] ease-in duration-200", className);

    return (
        <div className={classNames}>
            <Sprite 
                id={icon}
                size="big"
                className="stroke-Grey !fill-Grey group-hover:!fill-Blue group-hover:!stroke-Blue ease-in duration-200"
            />
            <Typography
                tagName="p"
                className="font-regular text-paragraph_2 text-Grey mt-[2.4rem]"
            >
                {desc}
            </Typography>
            <div className="flex items-center gap-[1.2rem] mt-[2.4rem]">
                <div className="w-[3.6rem] h-[3.6rem] rounded-full bg-Grey"></div>
                <Typography
                    tagName="span"
                    className="font-bold text-paragraph_2 text-Black"
                >
                    {author}
                </Typography>
            </div>
        </div>
    );
};

export default TestimonialsCard;