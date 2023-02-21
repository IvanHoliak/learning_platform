import FeaturesList from "components/list/features_list";
import Typography from "components/ui/typography";

const FeatureList = [
    {id: 1, icon: "icon-flame", title: "Lifetime Access", desc: "Only buy one time you can watch it anytime, any where, lorem ipsum dolot sit amet"},
    {id: 2, icon: "icon-school", title: "Expert Teachers", desc: "Only buy one time you can watch it anytime, any where, lorem ipsum dolot sit amet"},
    {id: 3, icon: "icon-rocket", title: "Practical Learning", desc: "Only buy one time you can watch it anytime, any where, lorem ipsum dolot sit amet"},
    {id: 4, icon: "icon-player-play", title: "Video Lessons", desc: "Only buy one time you can watch it anytime, any where, lorem ipsum dolot sit amet"},
];

const Features = () => {
    return (
        <section className="w-full bg-Black/[.02]">
            <div className="w-container px-lg mx-auto py-[9.6rem] flex justify-between items-start gap-[8rem]">
                <div className="max-w-[33.6rem]">
                    <span className="px-[12px] py-[4px] rounded-[4px] font-regular text-paragraph_3 text-Blue bg-Blue/[.1] self-start">
                        Our adventage features
                    </span>
                    <Typography
                        tagName="h3"
                        className="font-extra text-heading_3 text-Black mt-[1.6rem]"
                    >
                        Why must choose learningPlatform
                    </Typography>
                    <Typography
                        tagName="p"
                        className="font-regular text-paragraph_2 text-Grey mt-[2.4rem]"
                    >
                        LearningPlatform is biggest platform to learning anything to improve your skill with 350+ online video course
                    </Typography>
                    <div className="w-full h-[1px] bg-Black/[.1] my-[3.6rem]"></div>
                    <div className="flex items-center gap-[3.6rem]">
                        <div>
                            <Typography
                                tagName="h4"
                                className="font-bold text-heading_4 text-Black"
                            >350+</Typography>
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_3 text-Grey"
                            >Courses</Typography>
                        </div>
                        <div>
                            <Typography
                                tagName="h4"
                                className="font-bold text-heading_4 text-Black"
                            >16</Typography>
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_3 text-Grey"
                            >Categories</Typography>
                        </div>
                        <div>
                            <Typography
                                tagName="h4"
                                className="font-bold text-heading_4 text-Black"
                            >20k+</Typography>
                            <Typography
                                tagName="span"
                                className="font-regular text-paragraph_3 text-Grey"
                            >Students</Typography>
                        </div>
                    </div>
                </div>
                <FeaturesList data={FeatureList}/>
            </div>
        </section>
    );
};

export default Features;