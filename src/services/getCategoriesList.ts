import { collection, getDocs } from "firebase/firestore";
import { ICategoriesLists } from "types";
import { db } from "./firebase";

type GetCategoriesList = () => Promise<ICategoriesLists>

export const getCategoriesList: GetCategoriesList = async() => {
    let result = {} as ICategoriesLists;
    const docRef = await getDocs(collection(db, "categories"));
    docRef.forEach(doc => result = {...result, ...doc.data() as ICategoriesLists});
    return result;
};