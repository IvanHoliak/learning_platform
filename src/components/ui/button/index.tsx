import React, { ComponentProps, PropsWithChildren } from "react";
import cx from "classnames";


type ButtonDefaultProps = Extract<keyof JSX.IntrinsicElements, "button">

interface IButton {
    children: React.ReactNode,
    className?: string,
    rounded?: boolean,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, ...props: any) => void,
};

interface IButtonPrimary extends IButton{
    primary?: boolean
};

interface IButtonExplore extends IButton{
    explore?: boolean
};

interface IButtonSubscribe extends IButton{
    subscribe?: boolean
};

interface IButtonOutline extends IButton{
    outline?: boolean
};

type ButtonOverload = IButtonPrimary & IButtonOutline & IButtonSubscribe & IButtonExplore;

type ButtonPrimaryProps<E extends ButtonDefaultProps> = PropsWithChildren<IButtonPrimary> & Omit<ComponentProps<E>, keyof IButtonPrimary>; 
type ButtonOutlineProps<E extends ButtonDefaultProps> = PropsWithChildren<IButtonOutline> & Omit<ComponentProps<E>, keyof IButtonOutline>; 
type ButtonSubscribeProps<E extends ButtonDefaultProps> = PropsWithChildren<IButtonSubscribe> & Omit<ComponentProps<E>, keyof IButtonSubscribe>; 
type ButtonExploreProps<E extends ButtonDefaultProps> = PropsWithChildren<IButtonExplore> & Omit<ComponentProps<E>, keyof IButtonExplore>; 
type ButtonOverloadProps<E extends ButtonDefaultProps> = PropsWithChildren<ButtonOverload> & Omit<ComponentProps<E>, keyof ButtonOverload>; 

export default function Button({children, className, rounded, primary, onClick, ...props}: ButtonPrimaryProps<ButtonDefaultProps>): JSX.Element;
export default function Button({children, className, rounded, outline, onClick, ...props}: ButtonOutlineProps<ButtonDefaultProps>): JSX.Element;
export default function Button({children, className, rounded, subscribe, onClick, ...props}: ButtonSubscribeProps<ButtonDefaultProps>): JSX.Element;
export default function Button({children, className, rounded, explore, onClick, ...props}: ButtonExploreProps<ButtonDefaultProps>): JSX.Element;
export default function Button({children, className, rounded, primary, subscribe, explore, outline, onClick, ...props}: ButtonOverloadProps<ButtonDefaultProps>){
    const classNames = cx("flex items-center justify-center", {
        "rounded-[4px]": rounded,
        "bg-Yellow_light hover:bg-Dark hover:text-Yellow_light hover:shadow-inner hover:shadow-Yellow_light hover:shadow-[0px_0px_0px_1px] ease-in duration-200": primary,
        "bg-Grey_light font-bold text-paragraph_3 text-Blue px-[2.4rem] py-[1rem] hover:text-Grey_light hover:bg-Blue ease-in duration-200": explore,
        "bg-Black rounded-[1rem] text-Yellow_light hover:text-Black hover:bg-Yellow_light hover:shadow-inner hover:shadow-Black hover:shadow-[0_0_0_2px] ease-in duration-200": subscribe,
        "border-[1px] border-solid border-Yellow_light hover:bg-Yellow_light ease-in duration-200": outline,
    }, className);

    return (
        <button className={classNames} onClick={onClick} {...props}>
            {children}
        </button>
    );
};