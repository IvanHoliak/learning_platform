import cx from "classnames";
import TestimonialsCard from "components/card/testimonials_card";
import Slider from "components/slider";
import Typography from "components/ui/typography";

const Slides = [
    {id: 1, icon: "icon-quote", author: "Viezh Robert", desc: "I’ve been with learningPlatform in 1 year, I got a lot of new skills. I’m very happy with learningPlatform."},
    {id: 2, icon: "icon-quote", author: "Yessica Christy", desc: "With this learningPlatform I can learn easily and got updated course from teachers. This is the most helpful project."},
    {id: 3, icon: "icon-quote", author: "Kim Young Jou", desc: "I got a lot of new skills here with a really professional specialists. I got a lot of energy I can learn anything."},
    {id: 4, icon: "icon-quote", author: "Viezh Robert", desc: "I’ve been with learningPlatform in 1 year, I got a lot of new skills. I’m very happy with learningPlatform."},
    {id: 5, icon: "icon-quote", author: "Kim Young Jou", desc: "I got a lot of new skills here with a really professional specialists. I got a lot of energy I can learn anything."},
    {id: 6, icon: "icon-quote", author: "Yessica Christy", desc: "With this learningPlatform I can learn easily and got updated course from teachers. This is the most helpful project."},
    {id: 7, icon: "icon-quote", author: "Kim Young Jou", desc: "I got a lot of new skills here with a really professional specialists. I got a lot of energy I can learn anything."},
    {id: 8, icon: "icon-quote", author: "Yessica Christy", desc: "With this learningPlatform I can learn easily and got updated course from teachers. This is the most helpful project."},
    {id: 9, icon: "icon-quote", author: "Viezh Robert", desc: "I’ve been with learningPlatform in 1 year, I got a lot of new skills. I’m very happy with learningPlatform."},
];

const Testimonials = () => {
    return (
        <section className="w-full bg-White">
            <div className="w-container px-lg mx-auto pt-[9.6rem] pb-[26.5rem] flex flex-col justify-center items-start">
                <span className="px-[12px] py-[4px] rounded-[4px] font-regular text-paragraph_3 text-Blue bg-Blue/[.1] self-start">
                    Testimonials
                </span>
                <Typography
                    tagName="h3"
                    className="font-extra text-heading_3 text-Black mt-[1.6rem]"
                >
                    People say about learning
                </Typography>
                <Typography
                    tagName="p"
                    className="font-regular text-paragraph_2 text-Grey mt-[2.4rem]"
                >
                    Global learning platform that provides <br />
                    international quality learning
                </Typography>
                <Slider 
                    data={Slides} 
                    dots
                    renderItem={(item, index, currentSlides) => (
                        <TestimonialsCard 
                            key={item.id} {...item} 
                            className={cx("opacity-0 ease-in duration-100", {
                                "!opacity-100": currentSlides === Math.floor(index / 3)
                        })}/>
                    )}
                />
            </div>
        </section>
    )
};

export default Testimonials;