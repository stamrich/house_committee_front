import { Navigate, useRoutes } from "react-router-dom";

//Pages
import Settings from "../Settings/Settings";
import Dashboard from "../Dashboard/Dashboard";
import DataPage from "../DataPage/DataPage";

//Components
import Header from "./Header/Header";
import SideBar from "./Sidebar/SideBar";
import PageContextProvider from "../../Context/PageContext";
import UsersInfoContextProvider from "../../Context/UsersInfoContext";
import PopUpWindow from "../PopUpWindow/PopUpWindow";

function Home() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Navigate to="Dashboard" exact />,
        },
        {
            path: "Dashboard",
            element: <Dashboard />,
        },
        {
            path: "Settings",
            element: <Settings />,
        },
        {
            // exact: true,
            path: ":pageName/*",
            // key: "Buildings",
            element: <DataPage />,
            children: [
                {
                    path: ":id/*",
                    element: <PopUpWindow />,
                },
            ],
        },
    ]);

    return (
        <PageContextProvider>
            <UsersInfoContextProvider>
                <Header />
                <div className="content-wrapper">
                    <SideBar />
                    {routes}
                </div>
            </UsersInfoContextProvider>
        </PageContextProvider>
    );
}

export default Home;
