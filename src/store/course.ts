import { atom, selector } from "recoil";

export const courseState = atom({
    key: "courseState",
    default: {
        section_id: 1,
        lesson_id: 1,
    },
});

export const valueCourseState = selector({
    key: "valueCourseState",
    get: ({get}) => {
        const value = get(courseState);
        return value;
    },
});