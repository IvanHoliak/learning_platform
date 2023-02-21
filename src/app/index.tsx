import { withProviders } from "hocs";
import { RouterProvider } from "react-router-dom";
import router from "router";

import "styles/index.css";

const App = () => {
    return (
        <div className="flex flex-col min-h-[inherit]">
            <RouterProvider router={router}/>
        </div>
    );
};

export default withProviders(App);