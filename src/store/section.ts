import { atom, selector } from "recoil";

export const sectionState = atom({
    key: "sectionState",
    default: false
});

export const valueSectionState = selector({
    key: "valueSectionState",
    get: ({get}) => {
        const isHidden = get(sectionState);
        return isHidden;
    }
});