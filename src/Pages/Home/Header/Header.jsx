import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../Hooks/auth/auth.jsx";
import { useCookies } from "react-cookie";

//Style
import "./Header.css";

//Context
import { PageContext } from "../../../Context/PageContext.jsx";
import { UsersInfoContext } from "../../../Context/UsersInfoContext.jsx";

//Components
import DropdownSelect from "../../../Components/DropdownSelect/DropdownSelect.jsx";

function Header() {
    const url = useLocation().pathname;
    const cookies = useCookies()[0];
    const { logout } = useAuth();
    const hebrewNames = useContext(PageContext);
    const allUsersInfo = useContext(UsersInfoContext);
    const pageNames = hebrewNames.pageNames;
    const pageName = url.split("/")[1];

    return (
        <div className="Header">
            <div className="top-header-bar">
                <div className="top-header-bar-title">ועד הבית המרכזי</div>
                <div className="top-header-bar-username">
                    שלום, {cookies.name}
                </div>
                <div
                    className="top-header-bar-logout button"
                    onClick={() => logout()}>
                    יציאה
                </div>
            </div>
            <div className="top-body-bar">
                <div className="top-body-bar-title">{pageNames[pageName]}</div>
                <DropdownSelect
                    allOptions={allUsersInfo["allBuildings"]}
                    setSelectedOption={
                        allUsersInfo["updateCurrentBuilding"].setCurrentBuilding
                    }
                    selectedOption={
                        allUsersInfo["updateCurrentBuilding"].currentBuilding
                    }
                />
            </div>
        </div>
    );
}

export default Header;
