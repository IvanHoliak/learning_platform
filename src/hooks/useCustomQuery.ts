import { useQuery } from "@tanstack/react-query";
import { ICategoriesLists, ICourseDetails, ICoursesListItem, ICourseLesson } from "types";

type UseCustomQuery<T extends ICoursesListItem, E extends ICategoriesLists, K extends ICourseDetails, P extends ICourseLesson> = (
    keys: (string | number)[],
    fn: () => Promise<T[] | E | K | P[] | null | undefined>
) => {
    isLoading: boolean,
    error: unknown,
    data: T[] | E | K | P[] | undefined | null
};

const useCustomQuery: UseCustomQuery<ICoursesListItem, ICategoriesLists, ICourseDetails, ICourseLesson> = (keys, fn) => {
    const {isLoading, error, data} = useQuery({
        queryKey: keys,
        queryFn: fn,
        staleTime: Infinity,   
    });

    return {
        isLoading,
        error,
        data: data ?? null
    };
};

export default useCustomQuery;