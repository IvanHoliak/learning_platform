import { doc, DocumentReference, getDoc } from "firebase/firestore";
import { ICourseDetails, ICourseLesson } from "types";
import { db } from "./firebase";

type GetCourseDetails = (id: number) => Promise<ICourseDetails | undefined>;

export const getCourseDetails: GetCourseDetails = async(id) => {
    const docRef = await getDoc(doc(db, "courses_details", `${id}`));
    const data = docRef.data() as ICourseDetails;

    for(let section of data.sections){
        section.lessons = await getSectionLessons(section.lessons as DocumentReference<unknown>[])
    };

    return data ?? null;
};

type GetSectionLessons = (ids: DocumentReference<unknown>[]) => Promise<ICourseLesson[]>;

export const getSectionLessons: GetSectionLessons = async(ids) => {
    const result = await Promise.allSettled(ids.map(id => fetch(id)));
    const isFulfilled = <T,>(p:PromiseSettledResult<T>): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';
    const results = result.filter(isFulfilled).map(lesson => lesson.value);
    return results;
};

const fetch = async (id: DocumentReference<unknown>): Promise<ICourseLesson> => {
    const docRef = await getDoc(id as DocumentReference<unknown>);
    return docRef.data() as ICourseLesson;
};