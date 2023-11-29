import React, { useEffect, useState, useContext } from "react";
import {
    Outlet,
    Route,
    useLocation,
    useNavigate,
    Routes,
} from "react-router-dom";
import axios from "axios";

// Import Components
import NewInputBox from "../../Components/NewInputBox/NewInputBox.js";
import MyAgTable from "../../Components/MyAgTable/MyAgTable.js";

//Import Styles
import "./DataPage.css";

//Import Context
import { PageContext } from "../../Context/PageContext";
import PopUpWindow from "../../Components/PopUpWindow/PopUpWindow.js";

function DataPage() {
    let location = useLocation();
    const { state } = useLocation();
    let pageName = location.pathname.split("/")[1];
    const navigator = useNavigate();
    const hebrewNames = useContext(PageContext);
    const [rowData, setRowData] = useState();
    const [columnData, setColumnData] = useState();
    const [newDataEntered, setNewDataEntered] = useState(false);
    const [currentPage, setCurrentPage] = useState(pageName);

    const inputFields = hebrewNames.inputFields[pageName];

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axios.get(`/api/${pageName}/`);
                const columns = Object.keys(res.data[0]).map((key) => {
                    return {
                        field: key,
                        headerName: inputFields[key],
                        filter: true,
                    };
                });
                setColumnData(columns);
                setRowData(res.data);
            } catch (err) {
                console.log(err);
                setColumnData();
                setRowData();
            }
        };
        fetchAllData();
        console.log(pageName);
        setCurrentPage(pageName);
    }, [pageName, newDataEntered]);

    const handleDoubleClick = (row) => {
        console.log("double clicked");
        console.log(`./${row.data.id}`);
        navigator(`./${row.data.id}`, { state: { from: currentPage } });
        // navigator();
    };

    const saveNewInput = async (values) => {
        console.log("all the values");
        console.log(values);
        try {
            const res = await axios.post(`/api/${pageName}/new`, { values });
            console.log(res);
            setNewDataEntered((old) => !old);
        } catch (error) {
            console.log(error);
        }
    };

    //Just a mess for testing TODO: should be deleted
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

    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <div className="DataPage">
                        {console.log()}
                        {console.log()}
                        <NewInputBox
                            inputNames={inputFields}
                            handleSave={saveNewInput}
                        />
                        <MyAgTable
                            allData={rowData}
                            columnNames={columnData}
                            size={{ width: "100%", height: "75vh" }}
                            pageName={currentPage}
                            // handleDoubleClick={handleDoubleClick}
                        />
                        <Outlet />
                    </div>
                }
            />
            <Route path="/:id" element={<PopUpWindow />} />
        </Routes>
    );
}

export default DataPage;
