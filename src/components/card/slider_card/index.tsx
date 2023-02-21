import { FC } from "react";
import cx from "classnames";
import IconBox from "components/ui/icon_box";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import { ICard } from "types";

interface ISliderCard {
    className?: string,
}

const SliderCard: FC<ICard & ISliderCard> = ({id, icon, title, desc, className}) => {
    const classNames = cx("group py-[4rem] px-[3rem] rounded-[1.2rem] bg-White shadow-card cursor-pointer hover:bg-Blue min-w-[38.4rem]", className);

    return (
        <div className={classNames}>
            <div className="flex items-center gap-[3.2rem]">
                <IconBox
                    rounded="10"
                    size="medium"
                    className="bg-Blue/[.1] group-hover:bg-White"
                >
                    <Sprite 
                        id={icon}
                        className="w-full h-full"
                    />
                </IconBox>
                <Typography
                    tagName="h4"
                    className="font-bold text-heading_4 text-Black group-hover:text-White"
                >{title}</Typography>
            </div>
            <Typography
                tagName="p"
                className="font-regular text-paragraph_2 text-Grey mt-[2.4rem] group-hover:text-White"
            >
                {desc}
            </Typography>
        </div>
    );
};

export default SliderCard;