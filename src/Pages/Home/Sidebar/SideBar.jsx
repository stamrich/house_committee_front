import { NavLink, Outlet } from "react-router-dom";
import { useContext, useState } from "react";

//Icons
import DashboardIcon from "../../../Icons/DashboardIcon.jsx";
import BuildingsIcon from "../../../Icons/BuildingsIcon.jsx";
import ApartmentsIcon from "../../../Icons/ApartmentsIcon.jsx";
import ContactsIcon from "../../../Icons/ContactsIcon.jsx";
import PaymentsIcon from "../../../Icons/PaymentsIcon.jsx";
import TodosIcon from "../../../Icons/TodosIcon.jsx";
import SettingsIcon from "../../../Icons/SettingsIcon.jsx";
import RightChevronIcon from "../../../Icons/RightChevronIcon.jsx";
import LeftChevronIcon from "../../../Icons/LeftChevronIcon.jsx";

//Style
import "./SideBar.css";

//Context
import { PageContext } from "../../../Context/PageContext.jsx";

function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const hebrewNames = useContext(PageContext);
    const pageNames = hebrewNames.pageNames;

    function IconComponents(iconName, isActive) {
        switch (iconName) {
            case "Dashboard":
                return (
                    <DashboardIcon
                        fillColor={isActive ? "white" : "black"}
                        width={"20px"}
                        height={"20px"}
                    />
                );

            case "Buildings":
                return (
                    <BuildingsIcon
                        fillColor={isActive ? "white" : "black"}
                        width={"20px"}
                        height={"20px"}
                    />
                );

            case "Apartments":
                return (
                    <ApartmentsIcon
                        fillColor={isActive ? "white" : "black"}
                        width={"20px"}
                        height={"20px"}
                    />
                );

            case "People":
                return (
                    <ContactsIcon
                        fillColor={isActive ? "white" : "black"}
                        width={"20px"}
                        height={"20px"}
                    />
                );

            case "Transactions":
                return (
                    <PaymentsIcon
                        fillColor={isActive ? "white" : "black"}
                        width={"20px"}
                        height={"20px"}
                    />
                );

            case "Todos":
                return (
                    <TodosIcon
                        fillColor={isActive ? "white" : "black"}
                        width={"20px"}
                        height={"20px"}
                    />
                );

            case "Settings":
                return (
                    <SettingsIcon
                        fillColor={isActive ? "white" : "black"}
                        width={"20px"}
                        height={"20px"}
                    />
                );

            default:
                break;
        }
    }

    function handleCollapse() {
        setCollapsed((current) => !current);
        document.documentElement.style.setProperty(
            "--sidebar-width",
            collapsed ? "10vw" : "4vw"
        );
    }

    return (
        <>
            <div className={"SideBar box-shadow"}>
                <div className={"collapse-button"} onClick={handleCollapse}>
                    {collapsed ? (
                        <LeftChevronIcon
                            fillColor="#ff7b1d"
                            width="35"
                            height="35"
                        />
                    ) : (
                        <RightChevronIcon
                            fillColor="#ff7b1d"
                            width="35"
                            height="35"
                        />
                    )}
                </div>
                <div className="side-bar-links">
                    {Object.keys(pageNames).map((name, index) => {
                        return (
                            <NavLink
                                to={`/${name}`}
                                key={`side_bar_name_${index}`}
                                className={"side-bar-link-box"}>
                                {({ isActive, isPending, isTransitioning }) => (
                                    <>
                                        <div className="side-bar-link-logo">
                                            {IconComponents(name, isActive)}
                                        </div>
                                        {!collapsed && (
                                            <div className="side-bar-link-text">
                                                {pageNames[name]}
                                            </div>
                                        )}
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default SideBar;
