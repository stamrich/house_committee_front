import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/auth/auth.js";

//Style
import "./Header.css";

//Context
import { PageContext } from "../../../Context/PageContext.js";

function Header() {
    const { logout } = useAuth();
    const hebrewNames = useContext(PageContext);
    const pageNames = hebrewNames.pageNames;
    const url = useLocation();
    const currentPage = url.pathname.split("/")[1];

    return (
        <div className="Header">
            <div className="top-header-bar">
                <div className="top-header-bar-title">ועד בית</div>
                <div
                    className="top-header-bar-logout submitButton"
                    onClick={() => logout()}>
                    יציאה
                </div>
            </div>
            <div className="top-body-bar">{pageNames[currentPage]}</div>
        </div>
    );
}

export default Header;
