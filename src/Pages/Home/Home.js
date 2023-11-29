import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";

//Pages
import Settings from "../Settings/Settings";
import DataPage from "../DataPage/DataPage";

//Components
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/Sidebar/SideBar";
import PopUpWindow from "../../Components/PopUpWindow/PopUpWindow";
import PageContextProvider from "../../Context/PageContext";

function Home() {
    let location = useLocation();
    const [myHistory, setMyHistory] = useState([]);

    useEffect(() => {
        setMyHistory((old) => [...old, location.pathname]);
    }, [location]);

    console.log(myHistory);
    //Just a mess for popup testing TODO: should be deleted
    const testColumns = [
        { field: "id", headerName: "not id", filter: true },
        { field: "date", headerName: "not date", filter: true },
    ];
    const testData = [
        {
            id: "1234",
            date: "2014-12-10 13:20:00",
            type: "payment",
            amount: "1231.34",
        },
        {
            id: "2314",
            date: "2014-12-10 01:23:00",
            type: "payment",
            amount: "34.34",
        },
    ];

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
            exact: true,
            path: "Buildings/*",
            key: "Buildings",
            element: <DataPage />,
        },
        {
            exact: true,
            path: "Apartments/*",
            key: "Apartments",
            element: <DataPage />,
        },
        {
            exact: true,
            path: "People/*",
            key: "People",
            element: <DataPage />,
        },
        {
            exact: true,
            path: "Transactions/*",
            key: "Transactions",
            element: <DataPage />,
        },
        {
            exact: true,
            path: "Todos/*",
            key: "Todos",
            element: <DataPage />,
            children: [
                {
                    key: "Todos-pop",
                    path: ":id",
                    element: (
                        <PopUpWindow
                            fromWhere={myHistory}
                            tableColumns={testColumns}
                            rowInfo={testData}
                        />
                    ),
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
                {/*<Routes location={previousLocation || location}>
                    <Route
                        path="/"
                        element={<Navigate to="/Dashboard" exact />}
                    />
                    <Route path="/Dashboard/*" element={<Settings />} />
                    <Route path="/Settings/*" element={<Settings />} />
                    <Route
                        path="/:pageName/:id"
                        element={
                            <PopUpWindow
 fromWhere={myHistory}
                                tableColumns={testColumns}
                                rowInfo={testData}
                            />
                        }
                    />
                    <Route path="/:pageName/*" element={<DataPage />} />
                </Routes>
                {previousLocation && (
                    <Routes>
                        <Route
                            path="/popup/:id"
                            element={
                                <PopUpWindow
 fromWhere={myHistory}
                                    tableColumns={testColumns}
                                    rowInfo={testData}
                                />
                            }
                        />
                    </Routes>
                        )}*/}
            </div>
        </PageContextProvider>
    );
}

export default Home;
