import { FC } from "react";
import cx from "classnames";
import Sprite from "components/ui/sprite";

interface IRating {
    rating: number,
    color?: "yellow" | "yellow-light"
    props?: JSX.IntrinsicAttributes
};

const Rating: FC<IRating> = ({rating, color}) => {
    const numStars = Array(5).fill(null).map((_, index) => {
        if(index > 0 && rating > 1) rating = rating - 1;
        else if(rating < 1) rating = rating - rating;
        else if(rating === 0) return 0;
        return rating;
    });

    return (
        <>
            {
                numStars.map((star, index) => (
                    <Sprite 
                        key={index}
                        id={star > 1 ? "icon-star-full" : star < 1 && star !== 0 ? "icon-star-half" : "icon-star"}
                        size="small"
                        className={cx("", {
                            "!fill-Yellow_light": star > 1 && color === "yellow-light",
                            "!fill-Yellow": star > 1 && color === "yellow",
                            "!stroke-Yellow_light": star === 0 && color === "yellow-light",
                            "!stroke-Yellow": star === 0 && color === "yellow",
                            "!stroke-Yellow_light !fill-Yellow_light": star < 1 && star !== 0 && color === "yellow-light",
                            "!stroke-Yellow !fill-Yellow": star < 1 && star !== 0 && color === "yellow",
                        })}
                    />
                ))
            }
        </>
    );
};

export default Rating;