import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

// Importing all tabs
import ApartmentsTab from "./ApartmentsTab/ApartmentsTab.js";
import ConnectionsTab from "./ConnectionsTab/ConnectionsTab.js";
import InputTab from "./InputTab/InputTab.js";
import TransactionsTab from "./TransactionsTab/TransactionsTab.js";

// Importing components
// import MyAgTable from "../MyAgTable/MyAgTable.js";

//Import Styles
import "./PopUpWindow.css";

// import Icon's
import xSymbol from "../../../Icons/x-symbol.svg";

//Context
import { PageContext } from "../../../Context/PageContext.js";

function PopUpWindow() {
    const { pageInfo } = useContext(PageContext);
    const { pageName, id } = useParams();
    const navigator = useNavigate();
    const [shownTab, setShownTab] = useState("InputTab");
    const allTabs = pageInfo[pageName].Tabs;

    useEffect(() => {
        setShownTab("InputTab");
    }, [pageName]);

    const translateWindowName = {
        Buildings: "בניין",
        Apartments: "דירה",
        People: "איש קשר",
        Transactions: "תשלום",
        Todos: "משימה",
    };

    function changeTab(event) {
        console.log(event.target.id);
        setShownTab(event.target.id);
    } // eslint-disable-next-line

    function handleCloseButton() {
        navigator("..");
    }

    const showTab = (shownTabName) => {
        switch (shownTabName) {
            case "InputTab":
                return <InputTab />;
            case "TransactionsTab":
                return <TransactionsTab />;
            case "ApartmentsTab":
                return <ApartmentsTab />;
            case "ConnectionsTab":
                return <ConnectionsTab />;
            default:
                break;
        }
    };

    return (
        <div className="PopUpWindow-wrapper">
            <div className="PopUpWindow box-shadow">
                <div className="PopUpWindow-header">
                    <div className="PopUpWindow-header-title">
                        קוד {translateWindowName[pageName]} : {id}
                    </div>
                    <div className="PopUpWindow-tab-selectors">
                        {Object.keys(allTabs).map((tabName) => {
                            return (
                                <div
                                    className={
                                        tabName === shownTab
                                            ? "PopUpWindow-tab selected"
                                            : "PopUpWindow-tab"
                                    }
                                    id={tabName}
                                    key={`tab-${tabName}`}
                                    onClick={changeTab}>
                                    {allTabs[tabName]}
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className="PopUpWindow-close"
                        onClick={handleCloseButton}>
                        <img src={xSymbol} alt="x symbol" />
                    </div>
                </div>
                <div className="PopUpWindow-body">{showTab(shownTab)}</div>
            </div>
        </div>
    );
}

export default PopUpWindow;
