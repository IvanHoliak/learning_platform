import { atom, selector } from "recoil";

export const authState = atom({
    key: "authState",
    default: {
        isAuth: false,
    }
});

export const authValue = selector({
    key: "authValue",
    get: ({get}) => {
        const value = get(authState);
        return value;
    }
})