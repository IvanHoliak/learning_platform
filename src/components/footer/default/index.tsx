import Logo from "components/logo";
import Nav from "components/nav";
import Sprite from "components/ui/sprite";
import { NavLinks } from "constants/nav";

export const Footer = () => {
    
    return (
        <footer className="h-[25.2rem] w-screen bg-Dark_gradient mt-auto">
            <div className="w-container px-lg mx-auto flex justify-between pt-[5.6rem] items-center">
                <Logo 
                    classNames="flex-1"
                />
                <Nav 
                    className="h-full flex-1"
                    list={NavLinks}
                    classNameList="justify-center"
                />
                <div className="flex gap-[3.2rem] flex-1 justify-end">
                    <Sprite 
                        id="icon-brand-facebook"
                        size="medium"
                        className="stroke-Grey cursor-pointer"
                    />
                    <Sprite 
                        id="icon-brand-youtube"
                        size="medium"
                        className="stroke-Grey cursor-pointer"
                    />
                    <Sprite 
                        id="icon-brand-instagram"
                        size="medium"
                        className="stroke-Grey cursor-pointer"
                    />
                </div>
            </div>
        </footer>
    );
};