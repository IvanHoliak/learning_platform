import { FC, RefObject } from "react";
import cx from "classnames";
import { ICard } from "types";

interface ISliderList {
    data: ICard[],
    className?:string,
    renderItem: (item: ICard, index: number, currentSlides: number) => JSX.Element,
    currentSlides: number,
    sliderRef: RefObject<HTMLDivElement>,
};

const SliderList: FC<ISliderList> = ({data, sliderRef, className, renderItem, currentSlides}) => {
    const classNames = cx("flex flex-row gap-[3.2rem] flex-nowrap mt-[5.8rem]", className);

    const render = data.map((item, index) => {
        return (
            renderItem(item, index, currentSlides)
        );
    });

    return (
        <div className={classNames} ref={sliderRef}>
            {render}
        </div>
    );
};

export default SliderList;