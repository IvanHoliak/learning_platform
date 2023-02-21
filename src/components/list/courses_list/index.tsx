import { FC } from "react";
import cx from "classnames";
import { ICoursesListItem } from "types";
import CourseCard from "components/card/course_card";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { getCourseDetails } from "services/getCourseDetails";

interface ICoursesList {
    data?: ICoursesListItem[],
    className?: string,
    titleClassName?: string
    colorRating: "yellow" | "yellow-light"
};

const CoursesList: FC<ICoursesList> = ({data, className, titleClassName, colorRating}) => {
    const classNames = cx("flex flex-wrap gap-x-[3.2rem] gap-y-[4.8rem]", className);

    const queryClient = useQueryClient();

    const onMouseEnterPrefetchHandler = async(id: number) => {
        await queryClient.prefetchQuery({
            queryKey: ["course", `${id}`],
            queryFn: () => getCourseDetails(id),
            staleTime: 60 * 1000, //only prefetch if course data older then 60 sec!
        });
    };

    return (
        <div className={classNames}>
            {data?.map(item => (
                <Link 
                    key={item.id} 
                    to={`/course/${item.id}`} 
                    preventScrollReset={true}
                    onMouseEnter={() => onMouseEnterPrefetchHandler(item.id!)}
                >
                    <CourseCard key={item.id} {...item} titleClassName={titleClassName} colorRating={colorRating}/>
                </Link>
            ))}
        </div>
    );
};

export default CoursesList;