import { collection, getDocs, limit, query } from "firebase/firestore";
import { ICoursesListItem } from "types";
import { db } from "./firebase";

type GetCoursesList = (lim: number) => Promise<ICoursesListItem[]>;

export const getCoursesList: GetCoursesList = async(lim) => {
    const result: ICoursesListItem[] = [];
    const q = query(collection(db, "courses_list"), limit(lim));
    const docRef = await getDocs(q);
    docRef.forEach(doc => result.push(doc.data() as ICoursesListItem));
    return result;
};