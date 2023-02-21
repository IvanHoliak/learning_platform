import { FC, useEffect, useState } from "react";
import cx from "classnames";
import Button from "components/ui/button";
import Sprite from "components/ui/sprite";
import { useRecoilValue } from "recoil";
import { courseState } from "store/course";

interface IPlayer {
    url: string,
    typeButton: "primary" | "outline",
    className?: string,
    classNameButton?: string,
    title?: string,
    props?: JSX.IntrinsicAttributes,
};

const Player: FC<IPlayer> = ({url, typeButton, className, classNameButton, title, ...props}) => {
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const {lesson_id} = useRecoilValue(courseState);

    const classNames = cx("w-[71.2rem] h-[40.4rem] bg-Grey absolute z-20", className);
    const classNamesButton = cx("", {
        "group py-[1rem] pl-[1.6rem] pr-[2.4rem] text-Dark font-bold text-paragraph_2 hover:text-Yellow_light ease-in duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2": typeButton === "primary",
        "group py-[1rem] pl-[1.6rem] pr-[2.4rem] text-Yellow_light font-bold text-paragraph_2 hover:text-Dark ease-in duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2": typeButton === "outline",
    }, classNameButton);

    useEffect(() => {
        setIsPlay(false);
    }, [lesson_id]);

    const onClickPlayHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsPlay(prev => !prev);
    };

    const renderButton = () => {
        if(typeButton === "primary"){
            return (
                <Button
                    primary
                    rounded
                    className={classNamesButton}
                    onClick={onClickPlayHandler}
                >
                    <Sprite 
                        id="icon-player-play"
                        size="medium"
                        className="stroke-Dark mr-[.8rem] group-hover:stroke-Yellow_light ease-in duration-200"
                    />
                    {title ?? "Watch video"}
                </Button>
            );
        };
        return (
            <Button
                outline
                rounded
                className={classNamesButton}
                onClick={onClickPlayHandler}
            >
                <Sprite 
                    id="icon-player-play"
                    size="medium"
                    className="stroke-Yellow mr-[.8rem] group-hover:stroke-Dark ease-in duration-200"
                />
                Watch preview
            </Button>
        );
    };

    return (
        <div className={classNames}>
            {!isPlay && (
                renderButton()
            )}
            {isPlay && (
                <iframe
                    width="100%"
                    height="100%"
                    src={`${url}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Youtube"
                />
            )}
        </div>
    );
};

export default Player;