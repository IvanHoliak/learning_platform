import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route } from "react-router-dom";

import Layout from "layout";
import Home from "views/home";
import Browse from "views/browse";
import CoursePreview from "views/course/preview";
import Course from "views/course";
import { useRecoilValue } from "recoil";
import { authValue } from "store/auth";

const PrivateRoute = () => {
    const {isAuth} = useRecoilValue(authValue);

    if(!isAuth) {
        return <Navigate to="/" replace/>;
    };
    return <Outlet />
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="browse" element={<Browse />}/>
                <Route path="course/">
                    <Route path=":id" element={<CoursePreview />}/>
                    <Route element={<PrivateRoute />}>
                        <Route path=":id/learn" element={<Course />}/>
                    </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Route>
    )
);

export default router;