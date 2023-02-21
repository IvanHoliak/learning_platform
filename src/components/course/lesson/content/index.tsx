import Accordion from "components/accordion";
import Button from "components/ui/button";
import IconBox from "components/ui/icon_box";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import { FC, useMemo } from "react";
import { ICourseDetails, ICourseLesson } from "types";
import cx from "classnames";
import { useRecoilValue } from "recoil";
import { courseState } from "store/course";
import { sectionState } from "store/section";

const LessonContent: FC<ICourseDetails> = ({sections, description, lectures_count, objectives}) => {
    const {lesson_id, section_id} = useRecoilValue(courseState);
    const sectionValue = useRecoilValue(sectionState);

    const testValue = useMemo(() => {
        return sections.filter((item => item.index === section_id)).map(item => ({...item, lessons: (item.lessons as ICourseLesson[])?.filter(lesson => lesson.id === lesson_id)}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lesson_id]);

    const convertFileSize = (size: number) => {
        const result = size/1024;
        return result % 1 >= 0.1 ? result.toFixed(1) : result.toFixed(0);
    };

    return (
        <section className="w-full bg_white">
            <div className={cx("w-container px-lg mx-auto pt-[4.8rem] pb-[7.2rem] flex items-start gap-[10.4rem] relative", {
                "gap-x-0": sectionValue,
            })}>
                <div className={cx("flex flex-col w-[43.2rem] flex-[0_0_43.2rem] overflow-x-hidden relative left-0 opacity-100 ease-in duration-200", {
                    "!fixed !-left-[200%] !opacity-0": sectionValue,
                })}>
                    <Accordion 
                        data={sections} 
                        preview={false}
                    />
                </div>
                <div className={cx("flex flex-col ease-in duration-200", {
                    "mt-[18.4rem]": testValue[0]?.lessons[0]?.type === "video",
                    "mt-0": testValue[0]?.lessons[0]?.type === "text",
                    "!flex-row-reverse !gap-[16rem]": sectionValue
                })}>
                    {testValue[0]?.lessons[0]?.attached && (
                        <div className={cx("flex flex-col gap-[3.2rem]", {
                            "flex-[0_0_30%]": sectionValue
                        })}>
                            <Typography tagName="h4" className="font-bold text-heading_4 text-Black">
                                Lesson attachment
                                {!sectionValue && (
                                    <Button className="font-bold text-paragraph_3 text-Blue !inline-block ml-[2.4rem]">
                                        Download all
                                    </Button>
                                )}
                            </Typography>
                            <div className={cx("flex items-center gap-[5.6rem]", {
                                "flex-col !items-start !gap-[2.4rem]": sectionValue
                            })}>
                                {testValue[0]?.lessons[0]?.attached.map((file) => (
                                    <div key={file.id} className="flex items-center gap-[1.6rem] cursor-pointer">
                                        <IconBox rounded="full" size="medium" className="bg-Yellow_light">
                                            <Sprite
                                                id="icon-file-zip"
                                                size="medium"
                                                className="stroke-Black"
                                            />
                                        </IconBox>
                                        <div className="flex flex-col">
                                            <Typography
                                                tagName="p"
                                                className="font-medium text-paragraph_2 text-Black">
                                                {file.title}
                                            </Typography>
                                            <Typography
                                                tagName="span"
                                                className="font-regular text-paragraph_2 text-Grey">
                                                {convertFileSize(file.size)} mb.
                                            </Typography>
                                        </div>
                                    </div>
                                ))}
                                {sectionValue && (
                                    <Button className="font-bold text-paragraph_3 text-Blue !inline-block mt-[8px]">
                                        Download all
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                    <div className={cx("mt-0 max-w-[65.2rem]", {
                        "!mt-[5.6rem]": testValue[0]?.lessons[0]?.attached && !sectionValue,
                    })}>
                        <Typography tagName="h4" className="font-bold text-heading_4 text-Black">
                            Transcription
                        </Typography>
                        <div className="mt-[3.2rem]">
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black">
                                Now we're going to add the JavaScript to be able to make the toggle
                                button, show the correct SVG and to actually toggle it, save it to
                                local storage.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                And the JavaScript that we're going to use is actually from a free
                                code camp article. And this article is on building a dark mode
                                switcher with Tailwind and Flow Bay, which I believe is a tailwind
                                plug in for higher level components.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                We're not using flow byte. So I mean, we're not we're not using this
                                whole article, but there is just some JavaScript that we're going to
                                use.
                            </Typography>
                        </div>
                        <div className="w-full h-[1px] bg-Black/[.1] my-[3.2rem]"></div>
                        <Typography tagName="h4" className="font-semi text-heading_5 text-Black">
                            Subtitle
                        </Typography>
                        <div className="mt-[2.4rem]">
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black">
                                And I know that this is beyond the scope of this course and what you
                                might have planned, but I find that most people like this kind of
                                stuff when I do it in these types of courses.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                But if you don't, then of course you can just copy it either from
                                the main repository or directly from this article.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                So there's basically two parts that we need this this right here,
                                and it's best to inline this in the head to avoid any flashing of
                                Unstyled content.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                And basically what this is doing is just checking our local storage
                                for a key of color theme, seeing if that if we have it in our local
                                storage and seeing if it's equal to dark.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                Or it's also checking to see if our operating system is set to dark
                                mode. That's what this is doing right here. This match media and
                                then prefers color scheme dark. If those are true or one of those is
                                true, it's going to add the class of dark to the HTML tag. That's
                                what this document element is. And then it's saying class list,
                                which is an object and has a method of add which will add a class
                                else.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                If we're not if we don't have that dark saved, our operating system
                                is not in dark mode, then it's going to make sure it removes the
                                dark class.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                All right.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                So we're going to put this in the head like it was recommended. So
                                I'm just going to go up here and paste that in. We can get rid of
                                the comment here. But you know, what I am going to do is just paste
                                the link to this article. I want to make sure I give them proper
                                credit for this.
                            </Typography>
                            <Typography
                                tagName="p"
                                className="font-regular text-paragraph_2 text-Black mt-[3.2rem]">
                                So I'll just I'll just put that in a comment right here and we'll
                                save that. Now, I'm going to remove this right now.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LessonContent;
