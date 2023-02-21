import { getDoc, doc } from "firebase/firestore";
import { ICourseLesson } from "types";
import { db } from "./firebase";

type GetSectionLessons = (ids: number[]) => Promise<ICourseLesson[] | null>;

export const getSectionLessons: GetSectionLessons = async(ids: number[]) => {
    const result = await Promise.allSettled(ids.map(id => fetch(id)));
    const isFulfilled = <T,>(p:PromiseSettledResult<T>): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';
    const results = result.filter(isFulfilled).map(lesson => lesson.value);
    return results ?? null;
};

const fetch = async (id: number): Promise<ICourseLesson> => {
    const docRef = await getDoc(doc(db, "lessons_list", id.toString()));
    return docRef.data() as ICourseLesson;
};