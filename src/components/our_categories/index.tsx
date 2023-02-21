import OurCategoriesCard from "components/card/our_categories_card";
import Slider from "components/slider";
import Typography from "components/ui/typography";
import cx from "classnames";

const Slides = [
    {id: 1, icon: "icon-browser", title: "Web Development 1", desc: "Classes in development that cover the most recent advancements in web."},
    {id: 2, icon: "icon-tools", title: "User Experience 1", desc: "Lessons on design that cover the most recent developments."},
    {id: 3, icon: "icon-chart-dots", title: "Marketing 1", desc: "Marketing courses that cover the most recent marketing trends"},
    {id: 4, icon: "icon-browser", title: "Web Development 2", desc: "Classes in development that cover the most recent advancements in web."},
    {id: 5, icon: "icon-tools", title: "User Experience 2", desc: "Lessons on design that cover the most recent developments."},
    {id: 6, icon: "icon-chart-dots", title: "Marketing 2", desc: "Marketing courses that cover the most recent marketing trends"},
    {id: 7, icon: "icon-browser", title: "Web Development 3", desc: "Classes in development that cover the most recent advancements in web."},
    {id: 8, icon: "icon-tools", title: "User Experience 3", desc: "Lessons on design that cover the most recent developments."},
    {id: 9, icon: "icon-chart-dots", title: "Marketing 3", desc: "Marketing courses that cover the most recent marketing trends"},
];

const OurCategories = () => {
    
    return (
        <section className="w-full bg-White">
            <div className="w-container px-lg mx-auto py-[9.6rem] flex flex-col justify-center items-start">
                <span className="px-[12px] py-[4px] rounded-[4px] font-regular text-paragraph_3 text-Blue bg-Blue/[.1] self-start">
                    Our categories
                </span>
                <Typography
                    tagName="h3"
                    className="font-extra text-heading_3 text-Black mt-[1.6rem] opacity"
                >
                    Fostering a playful & engaging <br />
                    learning environment
                </Typography>
                <Slider 
                    data={Slides} 
                    dots
                    renderItem={(item, index, currentSlides) => (
                        <OurCategoriesCard 
                            key={item.id} 
                            {...item} 
                            className={cx("opacity-0 ease-in duration-100", {
                                "!opacity-100": currentSlides === Math.floor(index / 3)
                        })}/>)}
                />
            </div>
        </section>
    );
};

export default OurCategories;