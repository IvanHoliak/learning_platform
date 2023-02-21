import { atom } from "recoil";

export const categoriesState = atom({
    key: "categoriesState",
    default: {
        main_current_category_id: 1,
        topic_current_category_id: 101,
    }
});