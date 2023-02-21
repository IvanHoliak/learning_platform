import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

export const withQueryProvider = (Component: () => React.ReactElement) => () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Component />
        </QueryClientProvider>
    );
};
