import Button from "components/ui/button";
import { useNavigate } from "react-router-dom";
import IconBox from "components/ui/icon_box";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";

import {ReactComponent as HeroBgFirst} from "assets/svg/hero-multi-circle-1.svg";
import {ReactComponent as HeroBgSecond} from "assets/svg/hero-multi-circle-2.svg";
import {ReactComponent as HeroBgThird} from "assets/svg/hero-multi-circle-3.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "store/modal";
import { authValue } from "store/auth";
const HeroImg = require("assets/images/hero.webp");

const Hero = () => {
    const navigate = useNavigate();
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsOpen] = useRecoilState(modalState);
    const {isAuth} = useRecoilValue(authValue);

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
        if(isAuth) navigate("/browse");
        else setIsOpen(prev => ({...prev, isOpen: true, type}));
    };

    return (
        <section className="w-full mt-[-8rem]">
            <div className="h-[72.2rem] bg-Dark_gradient py-[6rem] flex items-end">
                <div className="w-container px-lg mx-auto flex items-center justify-between relative">
                    <HeroBgFirst className="absolute top-[3.8rem] left-[-5.5rem] animate-spin_slow"/>
                    <HeroBgSecond className="absolute bottom-[-22rem] right-[-6rem] animate-spin_slow"/>
                    <HeroBgThird className="absolute bottom-[-22rem] right-[-6rem] animate-spin_slow"/>
                    <div className="flex flex-col max-w-[46rem]">
                        <span className="px-[12px] py-[4px] rounded-[4px] font-regular text-paragraph_3 text-Blue bg-Blue/[.1] self-start">
                            Education
                        </span>
                        <Typography
                            tagName="h1"
                            className="font-extra text-heading_1 text-White mt-[2.4rem]">
                            Learn anything <br /> to improve your skills
                        </Typography>
                        <Typography
                            tagName="p"
                            className="font-regular text-paragraph_2 text-Grey mt-[2rem]">
                            LearningPlatform is an online learning site that provides tens of
                            thousands of classes with experienced instructions.
                        </Typography>
                        <div className="flex items-center mt-[5.6rem] gap-[3.6rem]">
                            <div className="flex items-center gap-[1.8rem]">
                                <IconBox
                                    size="big"
                                    rounded="12"
                                    className="bg-White/[.1]"
                                >
                                    <Sprite
                                        id="icon-briefcase"
                                        size="medium"
                                        className="stroke-White"
                                    />
                                </IconBox>
                                <Typography
                                    tagName="span"
                                    className="font-bold text-paragraph_2 text-White">
                                    Career-Oriented
                                </Typography>
                            </div>
                            <div className="flex items-center gap-[1.8rem]">
                                <IconBox
                                    size="big"
                                    rounded="12"
                                    className="bg-White/[.1]"
                                >
                                    <Sprite
                                        id="icon-bulb"
                                        size="medium"
                                        className="stroke-White"
                                    />
                                </IconBox>
                                <Typography
                                    tagName="span"
                                    className="font-bold text-paragraph_2 text-White">
                                    Creative Thinking
                                </Typography>
                            </div>
                        </div>
                        <div className="flex gap-[3.6rem] mt-[7.2rem]">
                            <Button
                                primary
                                rounded
                                className="font-extra text-paragraph_1 text-Dark px-[3.6rem] py-[1.6rem] z-50"
                                onClick={(e) => onClickHandler(e, "registration")}
                            >
                                Get started
                            </Button>
                            <Button
                                className="font-bold text-paragraph_2 text-Yellow_light self-center hover:text-White duration-200 ease-in">
                                Learn more
                            </Button>
                        </div>
                    </div>
                    <div className="h-[52rem] relative flex after:content-[''] after:absolute after:w-[49.5rem] after:h-[49.5rem] after:rounded-full after:border-[1px] after:border-Blue after:left-[-3rem] z-10 before:content-[''] before:h-[3.2rem] before:w-[3.2rem] before:rounded-full before:bg-Blue before:absolute before:bottom-[1rem] before:left-0">
                        <img
                            src={HeroImg}
                            alt="Hero"
                            className="w-[49.5rem] bg-Blue rounded-full self-end z-20"
                        />
                        <div className="flex flex-row items-center justify-start absolute left-[-10rem] top-[17.6rem] gap-[1.6rem] z-30 px-[1.6rem] py-[1.8rem] bg-Black rounded-[1.8rem]">
                            <div>
                                <IconBox
                                    size="medium"
                                    rounded="12"
                                    className="bg-White/[.1]"
                                >
                                    <Sprite
                                        id="icon-device-laptop"
                                        size="medium"
                                        className="stroke-White"
                                    />
                                </IconBox>
                            </div>
                            <div className="flex flex-col">
                                <Typography
                                    tagName="h4"
                                    className="font-bold text-heading_4 text-White">
                                    2K+
                                </Typography>
                                <Typography
                                    tagName="h4"
                                    className="font-regular text-paragraph_3 text-Grey">
                                    Video Courses
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-start text-center absolute right-0 top-0 gap-[1.6rem] z-30 px-[1.6rem] py-[2rem] bg-Black rounded-[1.8rem]">
                            <div className="w-[7.2rem] h-[7.2rem] rounded-full border-[4px] border-solid border-Dark relative animate-spin_slow duration-75 before:content-[''] before:absolute before:inset-[-4px] before:box-border before:rounded-full before:border-[4px] before:border-solid before:border-Blue before:clip-polygon-loader"></div>
                            <div className="flex flex-col">
                                <Typography
                                    tagName="h4"
                                    className="font-bold text-heading_4 text-White">
                                    5K+
                                </Typography>
                                <Typography
                                    tagName="h4"
                                    className="font-regular text-paragraph_3 text-Grey">
                                    Online Courses
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start absolute gap-[1.6rem] right-[-15px] bottom-[40px] z-30 px-[1.6rem] py-[1.8rem] bg-Black rounded-[1.8rem]">
                            <div>
                                <IconBox
                                    size="medium"
                                    rounded="12"
                                    className="bg-White/[.1]"
                                >
                                    <Sprite
                                        id="icon-users"
                                        size="medium"
                                        className="stroke-White"
                                    />
                                </IconBox>
                            </div>
                            <div className="flex flex-col">
                                <Typography
                                    tagName="h4"
                                    className="font-bold text-heading_4 text-White">
                                    250+
                                </Typography>
                                <Typography
                                    tagName="h4"
                                    className="font-regular text-paragraph_3 text-Grey">
                                    Tutors
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[44.4rem] bg-Blue/[.05]">
                <div className="w-container px-lg mx-auto flex items-center justify-between py-[11.2rem] gap-[17.9rem]">
                    <Typography tagName="h2" className="font-extra text-heading_2 text-Black flex-1">
                        Online <br /> Learning <br /> <span className="text-Blue">Designed</span> For <br /> Real Life
                    </Typography>
                    <div className="flex flex-col flex-1">
                        <IconBox
                            size="medium"
                            rounded="full"
                            className="bg-Blue/[.1]"
                        >
                            <Sprite
                                id="icon-user-check"
                                size="medium"
                                className="stroke-Blue"
                            />
                        </IconBox>
                        <Typography
                            tagName="h4"
                            className="font-bold text-heading_4 text-Black mt-[2.4rem]"
                        >User-friendly platform <br /> to learn</Typography>
                        <Typography
                            tagName="p"
                            className="font-regular text-paragraph_2 text-Grey mt-[1.2rem]"
                        >Learning theory, computer-based training, online learning, m-learning,
                        where mobile technology is used</Typography>
                    </div>
                    <div className="flex flex-col flex-1">
                        <IconBox
                            size="medium"
                            rounded="full"
                            className="bg-Blue/[.1]"
                        >
                            <Sprite
                                id="icon-devices"
                                size="medium"
                                className="stroke-Blue"
                            />
                        </IconBox>
                        <Typography
                            tagName="h4"
                            className="font-bold text-heading_4 text-Black mt-[2.4rem]"
                        >Packed with modern technology</Typography>
                        <Typography
                            tagName="p"
                            className="font-regular text-paragraph_2 text-Grey mt-[1.2rem]"
                        >Packed with modern technology,
                        classroom learning which used to be done conventionally</Typography>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
