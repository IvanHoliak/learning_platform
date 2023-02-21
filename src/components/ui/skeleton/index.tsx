import { FC } from "react";
import cx from "classnames";


interface ISkeleton {
    type: "card" | "text",
    count: number,
    classNameBox?: string,
    classNameItem?: string,
    props?: JSX.IntrinsicAttributes,
};

const Skeleton: FC<ISkeleton> = ({type, count, classNameBox, classNameItem, props}) => {
    const elementsArray = Array(count).fill(null);

    const classNamesBox = cx("animate-pulse", {}, classNameBox);

    const classNamesItem = cx("bg-Grey_light", {
        "w-[28rem] h-[18.4rem] rounded-[4px]": type === "card",
        "w-[28rem] h-[2rem] rounded-[4px]": type === "text",
    }, classNameItem);
    
    if(type === "card"){
        return (
            <div className={classNamesBox}>
                {elementsArray.map((_, index) => (
                    <div key={index} className={classNamesItem}>

                    </div>
                ))}
            </div>
        );
    };
    
    return (
        <div className={classNamesBox}>
            {elementsArray.map((_, index) => (
                <div key={index} className={classNamesItem}>

                </div>
            ))}
        </div>
    );
};

export default Skeleton;
