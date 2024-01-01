import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Context
import { useAuth } from "../../hooks/auth/auth.js";
import { PageContext } from "../../Context/PageContext";

//Style
import "./Dashboard.css";

//Components
import PieChart from "../Components/PieChart/PieChart.js";

function Dashboard() {
    const { pageName } = useParams();
    const [selectedOption, setSelectedOption] = useState(0);
    const pageNames = useContext(PageContext).pageNames;
    const [pieData, setPieData] = useState(
        Object.fromEntries(Object.keys(pageNames).map((x) => [x, [""]]))
    );
    const { axiosApi } = useAuth();

    const allOptions = ["Buildings", "Apartments", "People"];

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axiosApi.get("/info/pieInfo");
                console.log(res);
                setPieData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllData(); // eslint-disable-next-line
    }, [pageName]);

    const dashboardLines = (filterName) => {
        const children = pieData[filterName].map((infoLine) => {
            if (infoLine.balance < 0) {
                return (
                    <div className="Dashboard-line" key={infoLine.id}>
                        <p>{infoLine.name}</p>
                        <p>{infoLine.balance}</p>
                    </div>
                );
            } else {
                return null;
            }
        });
        console.log(children);
        if (!children[0]) {
            return (
                <div className="Dashboard-no-results">
                    אין {pageNames[filterName]} בחובה
                </div>
            );
        }
        return children;
    };

    return (
        <div className="Dashboard">
            <div className="Dashboard-tile box-shadow">
                <div
                    className="Dashboard-tile-title"
                    onClick={() =>
                        setSelectedOption(
                            selectedOption + 1 > allOptions.length - 1
                                ? 0
                                : selectedOption + 1
                        )
                    }>
                    {pageNames[allOptions[selectedOption]]}{" "}
                </div>
                <div className="Dashboard-tile-body">
                    {dashboardLines(allOptions[selectedOption])}
                </div>
            </div>
            <div className="Dashboard-tile box-shadow">
                <PieChart />
            </div>
            <div className="Dashboard-tile box-shadow"></div>
            <div className="Dashboard-tile box-shadow"></div>
        </div>
    );
}

export default Dashboard;
