import { FC } from "react";
import { Link } from "react-router-dom";
import Typography from "components/ui/typography";
import Button from "components/ui/button";
import Sprite from "components/ui/sprite";
import Rating from "components/rating";
import Player from "components/player";
import { ICourseDetails } from "types";
import { useRecoilState, useRecoilValue } from "recoil";
import { authValue } from "store/auth";
import { modalState } from "store/modal";

const PreviewHeading: FC<ICourseDetails> = ({id, title, headline, rating, author, content_length_text, num_attached_resources, num_articles, has_certificate, preview_video}) => {
    const {isAuth} = useRecoilValue(authValue);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsOpen] = useRecoilState(modalState);

    const onClickCheckAuthHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if(!isAuth){
            e.preventDefault();

            setIsOpen(prev => ({...prev, isOpen: true, type: "login"}));
        };
    };
    
    return (
        <section className="w-full mt-[-8rem] h-[68.4rem] bg-Dark_gradient">
            <div className="w-container px-lg mx-auto pt-[13.6rem] pb-[7.2rem] flex items-start justify-between">
                <div className="flex flex-col justify-start max-w-[66.4rem] mt-[1.6rem]">
                    <Typography
                        tagName="h3"
                        className="font-extra text-heading_3 text-White"
                    >
                        {title}
                    </Typography>
                    <Typography
                        tagName="p"
                        className="font-regular text-paragraph_2 text-White mt-[2.4rem]"
                    >
                        {headline}
                    </Typography>
                    <div className="flex items-center gap-[3.2rem] mt-[5rem]">
                        <Link 
                            to={`/course/${id}/learn`}
                            onClick={onClickCheckAuthHandler}
                        >
                            <Button
                                primary
                                rounded
                                className="font-bold text-paragraph_2 text-Dark px-[2.4rem] py-[1rem]"
                            >
                                {!isAuth ? "Enroll for free" : "Go to course"}
                            </Button>
                        </Link>
                        {rating && (
                            <div className="flex items-center gap-[8px]">
                                <Typography
                                    tagName="span"
                                    className="font-bold text-paragraph_2 text-Yellow_light"
                                >
                                    {+rating?.toFixed(1)}
                                </Typography>
                                <div className="flex gap-[3.5px] ml-[9px]">
                                    <Rating 
                                        rating={+rating?.toFixed(1)}
                                        color="yellow-light"
                                    />
                                </div>
                            </div>
                        )}
                        <Typography
                            tagName="span"
                            className="font-regular text-paragraph_2 text-White"
                        >
                            {author}
                        </Typography>
                    </div>
                    <div className="w-full h-[1px] bg-White/[.1] mt-[3.2rem]"></div>
                    <Typography
                        tagName="h4"
                        className="font-bold text-heading_4 text-White mt-[4.6rem]"
                    >
                        This course includes:
                    </Typography>
                    <div className="flex flex-wrap gap-y-[2.4rem] mt-[3.2rem]">
                        <Typography
                            tagName="span"
                            className="font-regular text-paragraph_2 text-White flex item-center gap-[1.2rem] w-1/2"
                        >
                            <Sprite 
                                id="icon-player-play"
                                size="medium"
                                className="stroke-Grey"
                            />
                            {content_length_text} on-demand video
                        </Typography>
                        {num_attached_resources !== 0 && (
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_2 text-White flex item-center gap-[1.2rem] w-1/2"
                            >
                                <Sprite 
                                    id="icon-download"
                                    size="medium"
                                    className="stroke-Grey"
                                />
                                {num_attached_resources} downloadable resources
                            </Typography>
                        )}
                        {num_articles !== 0 && (
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_2 text-White flex item-center gap-[1.2rem] w-1/2"
                            >
                                <Sprite 
                                    id="icon-file-text"
                                    size="medium"
                                    className="stroke-Grey"
                                />
                                {num_articles} article
                            </Typography>
                        )}
                        {has_certificate && (
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_2 text-White flex item-center gap-[1.2rem] w-1/2"
                            >
                                <Sprite 
                                    id="icon-file-certificate"
                                    size="medium"
                                    className="stroke-Grey"
                                />
                                Certificate of completion
                            </Typography>
                        )}
                    </div>
                </div>
                {/* PLAYER */}
                <Player 
                    url={preview_video}
                    typeButton="outline"
                    className="w-[44rem] h-[29.4rem] bg-White/[.05] relative"
                    title="Watch preview"
                />
            </div>
        </section>
    );
};

export default PreviewHeading;