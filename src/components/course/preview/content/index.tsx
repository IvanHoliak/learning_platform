import { FC } from "react";
import parse from "html-react-parser";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import { convertTime } from "utils/convert_time";
import Accordion from "components/accordion";
import { ICourseDetails } from "types";

const PreviewContent: FC<ICourseDetails> = ({content_length_second, description, sections, lectures_count, objectives}) => {
    const totalDuration = (time: number) => convertTime(time);

    return (
        <section className="w-full bg_white">
            <div className="w-container px-lg mx-auto pt-[4rem] pb-[7.2rem]">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col w-[62.5rem] overflow-x-hidden">
                        <Typography
                            tagName="h4"
                            className="font-bold text-heading_4 text-Black mt-[3.2rem]">
                            Course content
                        </Typography>
                        <div className="flex items-center gap-[1.6rem] mt-[1.2rem]">
                            {sections && (
                                <Typography
                                    tagName="span"
                                    className="font-regular text-paragraph_3 text-Grey flex items-center gap-[6px]">
                                    <Sprite id="icon-folder" size="small" className="stroke-Grey" />
                                    {sections.length} sections
                                </Typography>
                            )}
                            {lectures_count && (
                                <Typography
                                    tagName="span"
                                    className="font-regular text-paragraph_3 text-Grey flex items-center gap-[6px]">
                                    <Sprite
                                        id="icon-player-play"
                                        size="small"
                                        className="stroke-Grey"
                                    />
                                    {lectures_count} lessons
                                </Typography>
                            )}
                            {content_length_second && (
                                <Typography
                                    tagName="span"
                                    className="font-regular text-paragraph_3 text-Grey flex items-center gap-[6px]">
                                    <Sprite id="icon-clock" size="small" className="stroke-Grey" />
                                    {totalDuration(content_length_second).withMinutes} total length
                                </Typography>
                            )}
                        </div>
                        {sections && (
                            <Accordion 
                                data={sections}
                                preview
                                className="mt-[3.2rem]"
                            />
                        )}
                    </div>
                    <div className="flex flex-col p-[3.2rem] rounded-[1.2rem] bg-Grey_light max-w-[44rem]">
                        <Typography tagName="h4" className="font-bold text-heading_4 text-Black">
                            What you’ll learn
                        </Typography>
                        {objectives && (
                            <ul className="flex flex-col gap-[2.4rem] mt-[3.2rem] list-none">
                                {objectives?.map((objective, index) => (
                                    <li key={index}>
                                        <Typography
                                            tagName="span"
                                            className="font-regular text-paragraph_2 text-Black flex items-center gap-[1.2rem]">
                                            <Sprite
                                                id="icon-check"
                                                size="medium"
                                                className="stroke-Grey flex-[0_0_2.4rem]"
                                            />
                                            {objective}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="w-full h-[1px] bg-Black/[.1] mt-[7.2rem]"></div>
                <div className="max-w-[65.2rem] mt-[4.8rem]">
                    <Typography tagName="h4" className="font-bold text-heading_4 text-Black">
                        Description
                    </Typography>
                    {description && (
                        <div className="mt-[3.2rem] [&>*]:font-regular [&>*]:text-paragraph_2 [&>*]:text-Black [&>p>strong]:font-regular [&>p>strong]:text-heading_5">
                            {parse(description!)}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PreviewContent;
