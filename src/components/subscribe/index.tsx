import Button from "components/ui/button";
import Typography from "components/ui/typography";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authValue } from "store/auth";
import { modalState } from "store/modal";

const Subscribe = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsOpen] = useRecoilState(modalState);
    const {isAuth} = useRecoilValue(authValue);

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
        if(isAuth) navigate("/browse");
        else setIsOpen(prev => ({...prev, isOpen: true, type}));
    };
    
    return (
        <section className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[12.5rem]">
            <div className="w-container px-lg mx-auto">
                <div className="flex items-center h-[25rem] rounded-[4px] bg-Yellow_light shadow-[0_0.3rem_5.5rem_rgba(3,41,75,.1)]">
                    <div className="flex flex-col justify-center items-start ml-[7.2rem]">
                        <Typography
                            tagName="h3"
                            className="font-extra text-heading_3 text-Black"
                        >
                            Join now for <br /> get special features!
                        </Typography>
                        <Typography
                            tagName="p"
                            className="font-regular text-paragraph_2 text-Black mt-[1.8rem]"
                        >
                            Let's subscribe with us and find the fun.
                        </Typography>
                    </div>
                    <Button
                        subscribe
                        className="font-bold text-paragraph_1 px-[8rem] py-[1.65rem] ml-auto mr-[13.4rem]"
                        onClick={(e) => onClickHandler(e, "registration")}
                    >
                        Get started
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default Subscribe;