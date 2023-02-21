import React, { ComponentProps, PropsWithChildren } from "react";

type InputDefaultProps = Extract<keyof JSX.IntrinsicElements, "input">;

type InputOwnProps = {
    id?: string,
    className?: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label?: React.ReactNode | string,
    labelClassName?: string,
};

type InputProps<E extends InputDefaultProps> = PropsWithChildren<InputOwnProps> & Omit<ComponentProps<E>, keyof InputOwnProps>; 

const Input = <E extends InputDefaultProps> ({id, className, placeholder, label, labelClassName, value, onChange, ...props}: InputProps<E> ) => {
    return (
        <>
            <input 
                id={id} 
                className={className} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
                {...props}
            />
            {label && (
                <label htmlFor={id} className={labelClassName}>{label}</label>
            )}
        </>
    );
};

export default Input;