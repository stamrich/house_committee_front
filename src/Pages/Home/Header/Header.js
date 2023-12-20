import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/auth/auth.js";
import { useCookies } from "react-cookie";

//Style
import "./Header.css";

//Context
import { PageContext } from "../../../Context/PageContext.js";

function Header() {
    const url = useLocation().pathname;
    const cookies = useCookies()[0];
    const { logout } = useAuth();
    const hebrewNames = useContext(PageContext);
    const pageNames = hebrewNames.pageNames;
    const pageName = url.split("/")[1];

    return (
        <div className="Header">
            <div className="top-header-bar">
                <div className="top-header-bar-title">ועד בית</div>
                <div className="top-header-bar-username">
                    שלום, {cookies.name}
                </div>
                <div
                    className="top-header-bar-logout submitButton"
                    onClick={() => logout()}>
                    יציאה
                </div>
            </div>
            <div className="top-body-bar">{pageNames[pageName]}</div>
        </div>
    );
}

export default Header;
