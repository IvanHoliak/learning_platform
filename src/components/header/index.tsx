import Logo from "components/logo";
import { useLocation } from "react-router-dom";
import Nav from "components/nav";
import Button from "components/ui/button";
import { NavLinks } from "constants/nav";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "store/modal";
import { authValue } from "store/auth";
import Typography from "components/ui/typography";
import Sprite from "components/ui/sprite";
import { auth } from "services/firebase";

export const Header = () => {
    const { pathname } = useLocation();

    const {isAuth} = useRecoilValue(authValue);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsOpen] = useRecoilState(modalState);

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
        e.preventDefault();
        setIsOpen(prev => ({...prev, isOpen: true, type}));
    };

    const onClickLogoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        auth.signOut();
    };

    return (
        <header className="w-screen h-[8rem] bg-transparent border-b border-solid border-White/[.1] sticky z-10">
            <div className="w-container pr-lg pl-md h-full mx-auto flex items-center justify-between">
                <Logo />
                <Nav className="h-full" list={NavLinks} currentRoute={pathname} />
                <div className="flex gap-[2.4rem] h-full items-center">
                    {!isAuth ? (
                        <>
                            <Button 
                                className="text-White font-bold text-paragraph_2 hover:text-Yellow_light duration-200 ease-in"
                                onClick={(e) => onClickHandler(e, "login")}
                            >
                                Sign in
                            </Button>
                            <Button
                                className="px-[1.6rem] py-[0.6rem] text-Yellow_light font-bold text-paragraph_2 hover:text-Dark ease-in duration-200"
                                outline
                                rounded
                                onClick={(e) => onClickHandler(e, "registration")}>
                                Get started
                            </Button>
                        </>
                    ) : (
                        <div className="cursor-pointer group relative h-full">
                            <Typography
                                tagName="p"
                                className="font-bold text-paragraph_2 text-White flex items-center gap-[1.2rem] h-full group-hover:text-Yellow_light"
                            >
                                <Sprite 
                                    id="icon-user"
                                    size="medium"
                                    className="stroke-White group-hover:stroke-Yellow_light"
                                />
                                Profile
                            </Typography>
                            <div className="flex-col px-[2rem] py-[1rem] absolute top-[100%] left-0 border border-t-[0] border-White/[.2] rounded-b-[4px] hidden group-hover:flex">
                                <Button
                                    className="font-bold text-paragraph_2 text-White hover:text-Yellow_light"
                                    onClick={onClickLogoutHandler}
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
