import React, { useEffect, useState, useContext } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Import Components
import NewInputBox from "./NewInputBox/NewInputBox.js";
import MyAgTable from "./MyAgTable/MyAgTable.js";

//Import Styles
import "./DataPage.css";

//Import Context
import { PageContext } from "../../Context/PageContext";

function DataPage() {
    const location = useLocation();
    const { pageName } = useParams();
    const navigator = useNavigate();
    const hebrewNames = useContext(PageContext);
    const [selectedId, setSelectedId] = useState(false);
    const [rowData, setRowData] = useState();
    const [columnData, setColumnData] = useState();
    const [newDataEntered, setNewDataEntered] = useState(false);
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
        setSelectedId(false);
        console.log(pageName); // eslint-disable-next-line
    }, [location, newDataEntered]);

    useEffect(() => {
        if (selectedId) {
            navigator(`/${pageName}/${selectedId}`);
        } // eslint-disable-next-line
    }, [selectedId]);

    const handleDoubleClick = (row) => {
        setSelectedId(row.data.id);
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

    return (
        <div className="DataPage">
            <NewInputBox inputNames={inputFields} handleSave={saveNewInput} />
            <MyAgTable
                allData={rowData}
                columnNames={columnData}
                size={{ width: "100%", height: "75vh" }}
                handleDoubleClick={handleDoubleClick}
            />
            <Outlet />
        </div>
    );
}

export default DataPage;
