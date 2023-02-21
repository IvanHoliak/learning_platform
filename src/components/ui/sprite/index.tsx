import { FC } from "react";
import cx from "classnames";
import sprites from "assets/sprites/icon-sprites.svg";

interface ISprite {
    id: string,
    size?: "small" | "medium" | "big",
    className?: string,
    props?: JSX.IntrinsicElements
};

const Sprite: FC<ISprite> = ({id, size, className, ...props}) => {
    const classNames = cx("fill-transparent", {
        "h-[1.6rem] w-[1.6rem]": size === "small",
        "h-[2.4rem] w-[2.4rem]": size === "medium",
        "h-[3.6rem] w-[3.6rem]": size === "big",
    }, className);
    
    return (
        <svg className={classNames} {...props}>
            <use xlinkHref={`${sprites}#${id}`}/>
        </svg>
    );
};

export default Sprite;