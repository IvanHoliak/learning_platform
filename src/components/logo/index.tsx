import { FC } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Typography from "components/ui/typography";

const LogoImg = require("assets/images/logo2x.png");

interface ILogo {
    classNames?: string,
    onClickHandler?: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void,
}

const Logo: FC<ILogo> = ({classNames, onClickHandler}) => {
    const className = classnames("flex items-center gap-[1.7rem]", classNames);
    
    return (
        <Link 
            to="/" 
            className={className}
            onClick={e => onClickHandler ? onClickHandler(e, -1) : null}
        >
            <img src={LogoImg} alt="Logo" className="w-[3.2rem]"/>
            <Typography tagName={"p"} className="text-White font-extra text-paragraph_2">
                learningPlatform
            </Typography>
        </Link>
    );
};

export default Logo;