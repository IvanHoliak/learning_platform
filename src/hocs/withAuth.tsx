import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { auth } from "services/firebase";
import { authState } from "store/auth";

export const withAuth = (Component: () => React.ReactElement) => () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsAuth] = useRecoilState(authState);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) setIsAuth(prev => ({...prev, isAuth: true}));
            else setIsAuth(prev => ({...prev, isAuth: false}));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return <Component />;
};