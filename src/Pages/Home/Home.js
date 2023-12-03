import { Navigate, useRoutes } from "react-router-dom";

//Pages
import Settings from "../Settings/Settings";
import DataPage from "../DataPage/DataPage";

//Components
import Header from "./Header/Header";
import SideBar from "./Sidebar/SideBar";
import PageContextProvider from "../../Context/PageContext";
import PopUpWindow from "../DataPage/PopUpWindow/PopUpWindow";

function Home() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Navigate to="Dashboard" exact />,
        },
        {
            path: "Dashboard",
            element: <Settings />,
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
                    // children: [
                    //     {
                    //         index: true,
                    //         path: "InputTab",
                    //         element: <InputTab />,
                    //     },
                    //     {
                    //         index: false,
                    //         path: "TransactionsTab",
                    //         element: <TransactionsTab />,
                    //     },
                    //     {
                    //         index: false,
                    //         path: "ApartmentsTab",
                    //         element: <ApartmentsTab />,
                    //     },
                    // ],
                },
            ],
        },
    ]);

    return (
        <PageContextProvider>
            <Header />
            <div className="content-wrapper">
                <SideBar />
                {routes}
            </div>
        </PageContextProvider>
    );
}

export default Home;
