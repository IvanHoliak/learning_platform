import OurCategories from "components/our_categories";
import Hero from "components/hero";
import Categories from "components/categories";
import Features from "components/features";
import Testimonials from "components/testimonials";

const Home = () => {
    return (
        <>  
            <Hero />
            <OurCategories />
            <Categories />
            <Features />
            <Testimonials />
        </>
    );
};

export default Home;