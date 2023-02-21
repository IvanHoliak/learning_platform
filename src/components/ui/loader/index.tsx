import { FC } from "react";
import cx from "classnames";

interface ILoader {
    className?: string,
};

const Loader: FC<ILoader> = ({className}) => {
    const classNames = cx("w-[5rem] h-[5rem] border-[3px] border-solid border-White rounded-full inline-block relative box-border animate-spin after:content-[''] after:box-border after:absolute after:left-0 after:rigth-0 after:bg-Blue after:w-[1.6rem] after:h-[1.6rem] after:rounded-full after:-translate-x-[50%] after:translate-y-[50%]", {

    }, className);
    
    return (
        <div className={classNames}></div>
    );
};

export default Loader;