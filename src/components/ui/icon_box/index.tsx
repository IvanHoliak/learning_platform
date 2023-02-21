import { FC } from "react";
import cx from "classnames";

interface IIconBox {
    rounded?: "10" | "12" | "full",
    size?: "big" | "medium" | "small",
    className?: string,
    children?: React.ReactNode,
    props?: JSX.IntrinsicAttributes  
};

const IconBox: FC<IIconBox> = ({rounded, size, className, children, ...props}) => {
    const classNames = cx("rounded-0 flex items-center justify-center", {
        "rounded-[10px]": rounded === "10",
        "rounded-[12px]": rounded === "12",
        "rounded-full": rounded === "full",
        "w-[5.6rem] h-[5.6rem]": size === "big",
        "w-[4.8rem] h-[4.8rem]": size === "medium",
        "w-[3.6rem] h-[3.6rem]": size === "small",
    }, className)
    
    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
};

export default IconBox;