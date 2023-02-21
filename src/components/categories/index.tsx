import { useQueries } from "@tanstack/react-query";
import CoursesList from "components/list/courses_list";
import Tape from "components/tape";
import Button from "components/ui/button";
import Typography from "components/ui/typography";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getCategoriesList } from "services/getCategoriesList";
import { getCoursesList } from "services/getCoursesList";
import { authValue } from "store/auth";
import { categoriesState } from "store/categories";
import { modalState } from "store/modal";
import { ICategoriesLists } from "types";

const Categories = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsOpen] = useRecoilState(modalState);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [categoriesId, setCategoriesId] = useRecoilState(categoriesState);
    const {isAuth} = useRecoilValue(authValue);

    const [categories, courses] = useQueries({
        queries: [
            {queryKey: ["categories"], queryFn: getCategoriesList},
            {queryKey: ["coursesData", "home"], queryFn: () => getCoursesList(4)}
        ],
    });

    const {isLoading: isLoadingCategories, data: categoriesData} = categories;
    const {isLoading: isLoadingCourses, data: coursesData} = courses;

    const onClickCategoriesHandler = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
        setCategoriesId(prev => ({...prev, main_current_category_id: id, topic_current_category_id: +`${id}01`}));
    };

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
        if(isAuth) navigate("/browse");
        else setIsOpen(prev => ({...prev, isOpen: true, type}));
    };

    return (
        <section className="w-full bg-Dark_gradient">
            <div className="w-container px-lg mx-auto py-[9.6rem] flex flex-col justify-center items-start">
                <span className="px-[12px] py-[4px] rounded-[4px] font-regular text-paragraph_3 text-Blue bg-Blue/[.1] self-start">
                    Categories
                </span>
                <Typography 
                    tagName="h3"
                    className="font-extra text-heading_3 text-White mt-[1.6rem]"
                >
                    Train your team with real world <br /> skills and knowledge
                </Typography>
                {!isLoadingCategories && (
                    <Tape 
                        data={(categoriesData as ICategoriesLists)?.main || []}
                        className="mt-[6.4rem]"
                        listClassName="max-w-[104.4rem]"
                        onClickCategories={(e, id) => onClickCategoriesHandler(e, id)}
                    />
                )}
                {!isLoadingCourses && (
                    <CoursesList 
                        data={coursesData} 
                        className="mt-[5.6rem]"    
                        titleClassName="text-White"
                        colorRating="yellow-light"
                    />
                )}
                <div className="flex gap-[3.6rem] mt-[7.2rem]">
                    <Button
                        primary
                        rounded
                        className="font-bold text-paragraph_2 text-Dark px-[2.4rem] py-[1rem]"
                        onClick={(e) => onClickHandler(e, "registration")}
                    >
                        Get started
                    </Button>
                    <Button
                        className="font-bold text-paragraph_2 text-Yellow_light self-center">
                        Learn more
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Categories;