import IconBox from "components/ui/icon_box";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import { FC } from "react";
import { ICard } from "types";

const FeaturesCard: FC<ICard> = ({id, icon, title, desc}) => {
    return (
        <div className=" group max-w-[38.4rem] p-[3.6rem] rounded-[4px] shadow-[inset_0_0_0_1px] shadow-Black/[.1] bg-transparent cursor-pointer hover:bg-White hover:shadow-[0_6.6rem_11rem] hover:shadow-White/[.05] ease-in duration-200">
            <IconBox
                rounded="full"
                size="medium"
                className="bg-Blue/[.1] float-left mr-[1.6rem] group-hover:bg-Blue ease-in duration-200"
            >
                <Sprite 
                    id={icon}
                    size="medium"
                    className="stroke-Blue group-hover:stroke-White ease-in duration-200"
                />
            </IconBox>
            <div className="flex flex-col mt-[1.1rem]">
                <Typography
                    tagName="p"
                    className="font-bold text-paragraph_1 text-Black"
                >
                    {title}
                </Typography>
                <Typography
                    tagName="p"
                    className="font-regular text-paragraph_2 text-Grey mt-[4px]"
                >
                    {desc}
                </Typography>
            </div>
        </div>
    );
};

export default FeaturesCard;