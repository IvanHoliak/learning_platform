import cx from "classnames";
import TapeList from "components/list/tape_list";
import Sprite from "components/ui/sprite";
import React, { FC, useRef, useState, useCallback, useEffect } from "react";
import { ITapeItem } from "types";

interface ITape {
    data: ITapeItem[],
    className?: string,
    listClassName?: string
    onClickCategories?: (e: React.MouseEvent<HTMLLIElement>, id: number) => void;
};

const Tape: FC<ITape> = ({data, className, listClassName, onClickCategories}) => {
    const [scrolled, setScrolled] = useState<number>(0);
    const [scrolledMax, setScrolledMax] = useState<number>(0);
    const refList = useRef<HTMLUListElement>(null);

    const classNames = cx("flex gap-[4.8rem] items-center relative", className);
    const listClassNames = cx("flex w-full overflow-hidden transform-x-0 flex-nowrap gap-[0.8rem] list-none p-[2px] ease-in duration-200 transition-all", 
        listClassName
    );

    useEffect(() => {
        const scrolledWidth = (refList?.current as HTMLUListElement).scrollWidth - (refList?.current as HTMLUListElement).clientWidth;
        setScrolledMax(scrolledWidth);
    }, [refList])

    const onClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>, to: string) => {
        const scrollStepWith = scrolledMax / 4;
        if(to === "left" && scrolled !== 0){
            (refList?.current as HTMLUListElement).scrollTo({
                top: 0,
                left: scrolled - scrollStepWith,
                behavior: "smooth"
            });
            setScrolled(prev => prev - scrollStepWith);
        }else if(to === "right" && scrolled !== scrolledMax && scrolled < scrolledMax){
            (refList?.current as HTMLUListElement).scrollTo({
                top: 0,
                left: scrolled + scrollStepWith,
                behavior: "smooth"
            });
            setScrolled(prev => prev + scrollStepWith);
        };
    }, [scrolled, scrolledMax]);

    return (
        <div className={classNames}>
            {scrolled !== 0 && (
                <div className="absolute top-0 left-0 w-[14rem] h-[5.6rem] bg-Tape_gradient_left z-20"></div>
            )}
            <button 
                className="w-[3.6rem] h-[3.6rem] border rounded-full border-White/[.15] flex items-center justify-center bg-transparent z-30 hover:shadow-[0_0_0_1px_White] duration-200 ease-in"
                onClick={(e) => onClickHandler(e, "left")}    
            >
                <Sprite 
                    id="icon-chevron-left"
                    size="medium"
                    className="stroke-White"
                />
            </button>
            <div 
                className="max-w-[104.4rem] overflow-hidden"
            >
                <TapeList 
                    ref={refList}  
                    data={data}
                    className={listClassNames}
                    renderItem={(item) => (
                        <li 
                            key={item.id} 
                            className="px-[2.4rem] py-[1.6rem] rounded-[0.4rem] border border-solid border-White/[.15] font-regular text-paragraph_3 text-White whitespace-nowrap cursor-pointer hover:shadow-[0_0_2px_rgba(255,255,255,1)]"
                            onClick={(e) => onClickCategories ? onClickCategories(e, item.id) : null}    
                        >{item.title}</li>
                    )}
                />
            </div>
            <button 
                className="w-[3.6rem] h-[3.6rem] border rounded-full border-White/[.15] flex items-center justify-center bg-transparent z-30 hover:shadow-[0_0_0_1px_White] duration-200 ease-in"
                onClick={(e) => onClickHandler(e, "right")}
            >
                <Sprite 
                    id="icon-chevron-right"
                    size="medium"
                    className="stroke-White"
                />
            </button>
            {scrolledMax !== scrolled && (
                <div className="absolute top-0 right-0 w-[14rem] h-[5.6rem] bg-Tape_gradient_right z-20"></div>
            )}
        </div>
    );
};

export default Tape;
