import React, { forwardRef } from "react"
import cx from "classnames";
import { ITapeItem } from "types";

interface ITapeList {
    data: ITapeItem[],
    className?: string,
    renderItem: ({id, title}: ITapeItem) => JSX.Element
}

const TapeList = forwardRef<HTMLUListElement, ITapeList>(({data, renderItem, className}, ref) => {
    const classNames = cx("", className);

    const render = data.map(item => {
        return (
            renderItem(item)
        );
    });
    return (
        <ul 
            ref={ref}
            className={classNames}
        >
            {render}
        </ul>
    );
});

export default TapeList;