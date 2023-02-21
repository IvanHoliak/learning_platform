import Sprite from "components/ui/sprite";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { ICard } from "types";
import SliderList from "components/list/slider_list";

interface ISlider {
    data: ICard[],
    dots: boolean,
    renderItem: (item: ICard, index: number, currentSlides: number) => JSX.Element,
};

const Slider: FC<ISlider> = ({data, dots, renderItem}) => {
    const [currentSlideId, setCurrentSlideId] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const dotsMap = Array(Math.floor(data.length / 3)).fill(0);

    const onClickHandlerPrev = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if(currentSlideId !== 0) setCurrentSlideId(prev => prev - 1);
    }, [currentSlideId]);

    const onClickHandlerNext = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if(currentSlideId !== Math.floor((data.length - 1) / 3)) setCurrentSlideId(prev => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlideId]);

    useEffect(() => {
        (sliderRef.current as HTMLDivElement).style.cssText = `transform: translateX(-${currentSlideId * 1248}px); transition: all .2s ease-in`;
    }, [currentSlideId]);

    return (
        <div className="w-full flex flex-col">
            <div className="flex gap-[2.4rem] justify-end">
                <button className="w-[3.6rem] h-[3.6rem] border rounded-full border-Blue flex items-center justify-center"
                    onClick={onClickHandlerPrev}
                >
                    <Sprite 
                        id="icon-chevron-left"
                        size="medium"
                        className="stroke-Blue"
                    />
                </button>
                <button className="w-[3.6rem] h-[3.6rem] border rounded-full border-Blue flex items-center justify-center bg-Blue"
                    onClick={onClickHandlerNext}
                >
                    <Sprite 
                        id="icon-chevron-right"
                        size="medium"
                        className="stroke-White"
                    />
                </button>
            </div>
            <div>

            </div>
            <SliderList 
                data={data}
                renderItem={renderItem}
                currentSlides={currentSlideId}
                sliderRef={sliderRef}
            />
            <div
                className="flex justify-center gap-[1.2rem] mt-[3.6rem]"
            >
                {dotsMap.map((_, index) => (
                    <div 
                        key={index} 
                        onClick={() => setCurrentSlideId(index)}
                        className={cx("h-[8px] cursor-pointer transition-[width] duration-200", {
                            "w-[3.6rem] bg-Blue rounded-[4px]": (index as number) === currentSlideId,
                            "w-[8px] bg-Grey rounded-full": (index as number) !== currentSlideId
                        })}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;