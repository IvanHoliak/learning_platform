import { FC, useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import cx from "classnames";
import Typography from "components/ui/typography";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "services/firebase";
import { SetterOrUpdater } from "recoil";
import { IAuthState } from "types";
import AuthForm from "components/form/auth";

interface IAuth {
    type: "login" | "registration",
    setIsOpen: SetterOrUpdater<{ isOpen: boolean; type: string; }>,
    className?: string,
};

const Auth: FC<IAuth> = ({type, setIsOpen, className, ...props}) => {
    const [authState, setIsAuthState] = useState<IAuthState>({email: "", password: "", confirm_password: ""});
    const [error, setError] = useState<string>("");

    const classNames = cx("w-full flex flex-col items-center", {}, className);
    
    const onSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            if(type === "registration"){
                if(authState.password.length < 6 || authState.confirm_password.length < 6){
                    setError("Password min length must be 6")
                }else if(authState.confirm_password !== authState.password){
                    setError("Passwords do not match");
                }else{
                    const createUser = await createUserWithEmailAndPassword(auth, authState.email, authState.password);
                    if(createUser.user){
                        setIsOpen(prev => ({...prev, isOpen: false, type}));
                    };
                };
            }else if(type === "login"){
                if(authState.password.length < 6){
                    setError("Password min length must be 6");
                }else{
                    const signIn = await signInWithEmailAndPassword(auth, authState.email, authState.password);
                    if(signIn.user){
                        setIsOpen(prev => ({...prev, isOpen: false, type}));
                    };
                };
            };
        }catch(e){
            const error = e as Error;
            setError(error.message);
        };
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, key: keyof IAuthState) => {
        e.preventDefault();
        setIsAuthState(prev => ({...prev, [key]: e.target.value}));
    };

    const onGoogleAuthHandler = async(e: React.MouseEvent<HTMLDivElement>) => {
        try{
            const provider = new GoogleAuthProvider();
            const signIn = await signInWithPopup(auth, provider);
            if(!signIn.user) throw new Error("Some error!");
            setIsOpen(prev => ({...prev, isOpen: false, type}));
            setError("");
        }catch(e){
            const error = e as Error;
            setError(error.message);
        };
    };

    useEffect(() => {
        if(type === "registration"){
            if(authState.confirm_password.length > 0 && authState.confirm_password !== authState.password){
                setError("Passwords do not match");
            }else{
                setError("");
            };
        };
    }, [type, authState.password, authState.confirm_password]);

    return (
        <div className={classNames} {...props}>
            <Typography
                tagName="h3"
                className="font-extra text-heading_3 text-Black"
            >
                {type === "login" ? "Sing in" : "Registration"}
            </Typography>
            <AuthForm 
                type={type}
                state={authState}
                onSubmitHandler={onSubmitHandler}
                onChangeHandler={onChangeHandler}
            />
            {error.length > 0 && (
                <Typography
                    tagName="p"
                    className="font-regular text-paragraph_2 text-red-500 mt-[2rem]"
                >
                    {error}
                </Typography>
            )}
            <div className="w-full h-[1px] my-[2rem] bg-Grey_light relative after:content-['or'] after:px-[2rem] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-White after:font-bold after:text-paragraph_1 after:text-Grey"></div>
            <GoogleButton 
                onClick={onGoogleAuthHandler}
            />
        </div>
    );
};

export default Auth;