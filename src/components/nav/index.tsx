import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { INavLinks } from "types";

interface INav {
    list: INavLinks[],
    currentRoute?: string,
    classNameList?: string,
    className?: string,
    props?: JSX.IntrinsicElements 
};

const Nav: FC<INav> = ({list, currentRoute, className, classNameList, ...props}) => {
    return (
        <nav className={className} {...props}>
            <ul className={classNames("list-none flex flex-row gap-[3.2rem] h-full", classNameList)}>
                {list.map(item => (
                    <li key={item.id} className="h-full">
                        <Link 
                            to={item.link} 
                            className={classNames("text-White font-bold text-paragraph_2 h-full flex items-center relative b hover:text-Yellow_light duration-200 ease-in", {
                                "text-Yellow_light after:content-[''] after:absolute after:bottom-[-1px] after:h-[1px] after:w-full after:bg-Yellow_light": currentRoute === item.link
                            })}
                        >{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;