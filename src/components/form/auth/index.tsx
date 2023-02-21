import { FC } from "react";
import Button from "components/ui/button";
import Input from "components/ui/input";
import { IAuthState } from "types";

interface IAuthForm {
    type: "login" | "registration",
    state: IAuthState,
    onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void,
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>, key: keyof IAuthState) => void,
};

const AuthForm: FC<IAuthForm> = ({type, state, onSubmitHandler, onChangeHandler}) => {
    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full gap-[2rem] mt-[5rem]">
            <Input 
                id="input_email" 
                type="email"
                placeholder="Email"
                className="h-[5rem] border-b font-regular text-paragraph_1 text-Black placeholder:font-regular placeholder:text-paragraph_2 placeholder:text-Grey focus-visible:outline-none focus-visible:border-b-[2px] focus-visible:border-Black"
                required
                value={state.email}
                onChange={(e) => onChangeHandler(e, "email")}
            />
            <Input 
                id="input_password" 
                type="password"
                placeholder="Password"
                className="h-[5rem] border-b font-regular text-paragraph_1 text-Black placeholder:font-regular placeholder:text-paragraph_2 placeholder:text-Grey focus-visible:outline-none focus-visible:border-b-[2px] focus-visible:border-Black"
                required
                value={state.password}
                onChange={(e) => onChangeHandler(e, "password")}
            />
            {type === "registration" && (
                <Input 
                    id="input_password_confirm" 
                    type="password"
                    placeholder="Confirm password"
                    className="h-[5rem] border-b font-regular text-paragraph_1 text-Black placeholder:font-regular placeholder:text-paragraph_2 placeholder:text-Grey focus-visible:outline-none focus-visible:border-b-[2px] focus-visible:border-Black"
                    required
                    value={state.confirm_password}
                    onChange={(e) => onChangeHandler(e, "confirm_password")}
                />
            )}
            <Button
                primary
                rounded
                className="font-extra text-paragraph_1 text-Dark px-[2.4rem] py-[1.2rem] w-[24rem] mx-auto"
                type="submit"
            >
                {type === "login" ? "Sing in" : "Registration"}
            </Button>
        </form>
    )
};

export default AuthForm;