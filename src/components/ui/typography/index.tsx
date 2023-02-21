import { ComponentPropsWithoutRef, ReactNode, PropsWithChildren, FC, HTMLAttributes } from "react";

enum TagNames {
    "p",
    "span",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
};

type TypographyDefaultProps = Extract<keyof JSX.IntrinsicElements, keyof typeof TagNames>;

type TypographyOwnProps<E extends TypographyDefaultProps> = {
    tagName: E,
    children?: ReactNode | string,
    className?: string,
};

type TypographyProps<E extends TypographyDefaultProps> = PropsWithChildren<TypographyOwnProps<E>> & Omit<ComponentPropsWithoutRef<E>, keyof TypographyOwnProps<E>>; 

interface HTMLTagProps extends HTMLAttributes<HTMLOrSVGElement> {
    tagName: TypographyDefaultProps;
};

const Typography = <E extends TypographyDefaultProps>({
    tagName,
    children,
    className,
    ...props
}: TypographyProps<E>) => {

    const TagName: FC<HTMLTagProps> = ({tagName: As, ...props}) => {
        return (
            <As {...props}/>
        );
    };

    return (
        <TagName 
            tagName={tagName}
            className={className}
            {...props}
        >
            {children}
        </TagName>
    );
};

export default Typography;