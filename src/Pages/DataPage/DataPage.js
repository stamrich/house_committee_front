import React, { useEffect, useState, useContext } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

// Import Components
import NewInputBox from "./NewInputBox/NewInputBox.js";
import MyAgTable from "./MyAgTable/MyAgTable.js";

//Import Styles
import "./DataPage.css";

//Import Context
import { PageContext } from "../../Context/PageContext";
import { useAuth } from "../../hooks/auth/auth.js";

function DataPage() {
    const location = useLocation();
    const { pageName } = useParams();
    const navigator = useNavigate();
    const hebrewNames = useContext(PageContext);
    const [selectedId, setSelectedId] = useState(false);
    const [rowData, setRowData] = useState();
    const [columnData, setColumnData] = useState();
    const [newDataEntered, setNewDataEntered] = useState(false);
    const inputFields = hebrewNames.pageInfo[pageName].inputFields;
    const { axiosApi } = useAuth();

    // useEffect(() => {TODO: trying handle 404
    // const possiblePages = Object.keys(hebrewNames.pageNames);
    //     console.log(possiblePages);
    //     console.log(!possiblePages.includes(pageName));
    //     if (!possiblePages.includes(pageName)) {
    //         navigator("/Dashboard");
    //     }
    // }, []);

    useEffect(() => {
        setColumnData();
        setRowData();
    }, [pageName]);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axiosApi.get(`/${pageName}/info`);
                const columns = Object.keys(res.data[0]).map((key) => {
                    return {
                        field: key,
                        headerName: inputFields[key]
                            ? inputFields[key].name
                            : inputFields[key],
                        filter: true,
                        cellStyle: (params) => {
                            if (params.value < 0) {
                                return {
                                    color: "red",
                                };
                            }
                            return null;
                        },
                    };
                });
                setColumnData(columns);
                setRowData(res.data);
            } catch (error) {
                console.log(error);
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
            const res = await axiosApi.post(`/${pageName}/new`, { values });
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
                size={{ width: "100%", height: "60vh" }}
                handleDoubleClick={handleDoubleClick}
            />
            <Outlet />
        </div>
    );
}

export default DataPage;
