import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "components/footer/default";
import { Header } from "components/header";
import { FooterHome } from "components/footer/footer_home";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { getCategoriesList } from "services/getCategoriesList";
import { useQueryClient } from "@tanstack/react-query";
import Modal from "components/modal";

const Layout = () => {
    const {pathname} = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [pathname]);

    const prefetchQueryClient = useQueryClient();

    const prefetchCategoriesLists = useCallback(async() => {
        await prefetchQueryClient.prefetchQuery({
            queryKey: ["categories"],
            queryFn: getCategoriesList,
        });
    }, [prefetchQueryClient]);

    useEffect(() => {
        prefetchCategoriesLists();
    }, [prefetchCategoriesLists]);

    return (
        <>  
            <Modal />
            <Header />
            <Outlet />
            {pathname === "/" ? <FooterHome /> : <Footer />}
        </>
    )
};

export default Layout;