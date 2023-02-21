import CoursesList from "components/list/courses_list";
import TapeList from "components/list/tape_list";
import Button from "components/ui/button";
import Typography from "components/ui/typography";
import { ICategoriesLists } from "types";
import { useRecoilState } from "recoil";
import { categoriesState } from "store/categories";
import { getCategoriesList } from "services/getCategoriesList";
import { useQueries } from "@tanstack/react-query";
import { getCoursesList } from "services/getCoursesList";
import Skeleton from "components/ui/skeleton";

const BrowseContent = () => {
    const [categoriesId, setCategoriesId] = useRecoilState(categoriesState);
    
    const [categories, courses] = useQueries({
        queries: [
            {queryKey: ["categories"], queryFn: getCategoriesList},
            {queryKey: ["coursesData", "browse"], queryFn: () => getCoursesList(20)}
        ],
    });
    
    const {isLoading: isLoadingCategories, data: categoriesData} = categories;
    const {isLoading: isLoadingCourses, data: coursesData} = courses;

    const DataRecommended = coursesData?.slice(0, 4);
    const DataViewing = coursesData?.slice(4, 12);
    const DataTop = coursesData?.slice(12, 20);

    const currentCategoryTitle = (categoriesData as ICategoriesLists)?.main.find(item => item.id === categoriesId.main_current_category_id)?.title || "Development";

    const onClickCategoriesHandler = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
        setCategoriesId(prev => ({...prev, topic_current_category_id: +id.toString().slice(0, id.toString().length > 5 ? 4 : 3)}));
    };

    return (
        <section className="w-full bg_white">
            <div className="w-container px-lg mx-auto pt-[7.6rem] pb-[7.2rem]">
                {/* BROWSE PARTIAL  */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <Typography 
                            tagName="h4"
                            className="font-bold text-heading_4 text-Black"
                        >
                            Recommended for you
                        </Typography>
                        <Button
                            rounded
                            explore
                        >
                            Explore all
                        </Button>
                    </div>
                    {!isLoadingCourses ? (
                        <CoursesList 
                            data={DataRecommended} 
                            className="mt-[5.6rem]"    
                            titleClassName="text-Black"
                            colorRating="yellow"
                        />
                    ) : (
                        <>
                            <Skeleton 
                                type="card" 
                                count={4} 
                                classNameBox="mt-[5.6rem] flex flex-wrap gap-x-[3.2rem] gap-y-[4.8rem]"
                                classNameItem=""
                            />
                            <Skeleton 
                                type="text" 
                                count={4} 
                                classNameBox="mt-[1.6rem] flex flex-wrap gap-x-[3.2rem] gap-y-[4.8rem]"
                                classNameItem=""
                            />
                        </>
                    )}
                </div>
                {/* BROWSE PARTIAL  */}
                <div className="flex flex-col mt-[10rem]">
                    <div className="flex items-center justify-between">
                        <Typography 
                            tagName="h4"
                            className="font-bold text-heading_4 text-Black"
                        >
                            Students are viewing
                        </Typography>
                        <Button
                            rounded
                            explore
                        >
                            Explore all
                        </Button>
                    </div>
                    {!isLoadingCourses ? (
                        <CoursesList 
                            data={DataViewing} 
                            className="mt-[5.6rem]"    
                            titleClassName="text-Black"
                            colorRating="yellow"
                        />
                    ) : (
                        <Skeleton 
                            type="card" 
                            count={8} 
                            classNameBox="mt-[5.6rem] flex flex-wrap gap-x-[3.2rem] gap-y-[4.8rem]"
                            classNameItem=""
                        />
                    )}
                </div>
                {/* BROWSE PARTIAL  */}
                <div className="flex flex-col mt-[10rem]">
                    <div className="flex items-center justify-between">
                        <Typography 
                            tagName="h4"
                            className="font-bold text-heading_4 text-Black"
                        >
                            Topics recommended for you
                        </Typography>
                    </div>
                    {!isLoadingCategories && (
                        <TapeList 
                            data={(categoriesData as ICategoriesLists)?.topics[categoriesId.topic_current_category_id].slice(0, 8) || []}
                            className="flex flex-wrap gap-[3.2rem] mt-[3.2rem]"
                            renderItem={(item) => (
                                <li 
                                    key={item.id} 
                                    className="w-[28rem] py-[2rem] px-[2rem] font-bold text-paragraph_2 text-center whitespace-nowrap overflow-ellipsis overflow-x-hidden text-Blue border border-solid border-[rgba(17,17,16,.1)] rounded-[4px] cursor-pointer hover:shadow-[0_0_2px_rgba(17,17,16,1)]"
                                    onClick={(e => onClickCategoriesHandler(e, item.id))}
                                >{item.title}</li>
                            )}
                        />
                    )}
                </div>
                {/* BROWSE PARTIAL  */}
                <div className="flex flex-col mt-[10rem]">
                    <div className="flex items-center justify-between">
                        <Typography 
                            tagName="h4"
                            className="font-bold text-heading_4 text-Black"
                        >
                            Top courses in <span className="text-Blue">{currentCategoryTitle}</span>
                        </Typography>
                        <Button
                            rounded
                            explore
                        >
                            Explore all
                        </Button>
                    </div>
                    {!isLoadingCourses ? (
                        <CoursesList 
                            data={DataTop} 
                            className="mt-[5.6rem]"    
                            titleClassName="text-Black"
                            colorRating="yellow"
                        />
                    ) : (
                        <Skeleton 
                            type="card" 
                            count={8} 
                            classNameBox="mt-[5.6rem] flex flex-wrap gap-x-[3.2rem] gap-y-[4.8rem]"
                            classNameItem=""
                        />
                    )}
                </div>
            </div>
        </section>
    )
};

export default BrowseContent;