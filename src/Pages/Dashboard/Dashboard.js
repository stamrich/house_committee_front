import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

//Context
import { useAuth } from "../../hooks/auth/auth.js";
import { PageContext } from "../../Context/PageContext";

//Style
import "./Dashboard.css";

//Components
import PieChart from "../Components/PieChart/PieChart.js";

function Dashboard() {
    const { axiosApi } = useAuth();
    const cookies = useCookies()[0];
    const { pageName } = useParams();
    const [selectedOption, setSelectedOption] = useState(0);
    const pageNames = useContext(PageContext).pageNames;
    const [pieData, setPieData] = useState(
        Object.fromEntries([
            ...Object.keys(pageNames).map((x) => [x, [""]]),
            [
                "BuildingsData",
                [{ amount: 1, amount_in_debt: 1, amount_paid: 1 }],
            ],
            [
                "ApartmentsData",
                [{ amount: 1, amount_in_debt: 1, amount_paid: 1 }],
            ],
            ["PeopleData", [{ amount: 1, amount_in_debt: 1, amount_paid: 1 }]],
        ])
    );

    // console.log(pieData);

    const allOptions = ["Buildings", "Apartments", "People"];

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axiosApi.get("/info/pieInfo");
                // console.log(res);
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
            <div className="Dashboard-inner-nav box-shadow">
                שלום, {cookies.name}
            </div>
            <div className="Dashboard-statistics">
                <div className="Dashboard-statistic tile box-shadow">
                    סה"כ בנייינים: {pieData["BuildingsData"][0].amount}
                </div>
                <div className="Dashboard-statistic tile box-shadow">
                    סה"כ דירות: {pieData["ApartmentsData"][0].amount}
                </div>
                <div className="Dashboard-statistic tile box-shadow">
                    סה"כ אנשים: {pieData["PeopleData"][0].amount}
                </div>
            </div>
            <div className="Dashboard-charts">
                <div className="Dashboard-chart tile box-shadow">
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
                <div className="Dashboard-chart tile box-shadow">
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
                    <PieChart
                        listData={[
                            [
                                "שילמו",
                                pieData[`${allOptions[selectedOption]}Data`][0]
                                    .amount_paid,
                            ],
                            [
                                "לא שילמו",
                                pieData[`${allOptions[selectedOption]}Data`][0]
                                    .amount_in_debt,
                            ],
                        ]}
                    />
                </div>
                <div className="Dashboard-chart tile box-shadow"></div>
            </div>
        </div>
    );
}

export default Dashboard;
