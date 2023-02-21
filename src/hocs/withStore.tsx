import React from "react";
import { RecoilRoot } from "recoil";

export const withStore = (Component: () => React.ReactElement) => () => {
    return (
        <RecoilRoot>
            <Component />
        </RecoilRoot>
    );
};
