import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";

import "./SideBar.css";

//Context
import { PageContext } from "../../../Context/PageContext.js";

function SideBar() {
    const hebrewNames = useContext(PageContext);
    const pageNames = hebrewNames.pageNames;
    return (
        <>
            <div className="SideBar">
                {Object.keys(pageNames).map((name, index) => {
                    return (
                        <NavLink
                            to={`/${name}`}
                            key={`side_bar_name_${index}`}
                            className={"side-bar-link-box"}>
                            {pageNames[name]}
                        </NavLink>
                    );
                })}
                <Outlet />
            </div>
        </>
    );
}

export default SideBar;
