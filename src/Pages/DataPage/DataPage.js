import React, { useEffect, useState, useContext } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// Import Components
// import NewInputBox from "./NewInputBox/NewInputBox.js";
import MyAgTable from "../Components/MyAgTable/MyAgTable.js";

//Import Styles
import "./DataPage.css";

//Import Context
import { PageContext } from "../../Context/PageContext";
import { useAuth } from "../../hooks/auth/auth.js";
import { UsersInfoContext } from "../../Context/UsersInfoContext.js";

//Icons
import AddNewIcon from "../../Icons/AddNewIcon.js";
import ExcelIcon from "../../Icons/ExcelIcon.js";

function DataPage() {
    const location = useLocation();
    const { pageName } = useParams();
    const navigator = useNavigate();
    const hebrewNames = useContext(PageContext);
    const allUsersInfo = useContext(UsersInfoContext);
    const [selectedId, setSelectedId] = useState(false);
    const [rowData, setRowData] = useState();
    const [columnData, setColumnData] = useState();
    const { axiosApi } = useAuth();
    const inputFields = hebrewNames.pageInfo[pageName].inputFields;
    const currentBuilding = allUsersInfo.updateCurrentBuilding.currentBuilding;

    // useEffect(() => {TODO: trying handle 404
    // const possiblePages = Object.keys(hebrewNames.pageNames);
    //     console.log(possiblePages);
    //     console.log(!possiblePages.includes(pageName));
    //     if (!possiblePages.includes(pageName)) {
    //         navigator("/Dashboard");
    //     }
    // }, []);

    useEffect(() => {
        setColumnData(
            Object.keys(inputFields).map((key) => {
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
            })
        );
        setRowData();
        // eslint-disable-next-line
    }, [pageName]);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                let httpRequest = "";
                if (currentBuilding.id === 0 || pageName === "Buildings") {
                    httpRequest = `/${pageName}/info`;
                } else {
                    httpRequest = `/${pageName}/byBuilding/${currentBuilding.id}`;
                }
                const res = await axiosApi.get(httpRequest);
                setRowData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllData();
        setSelectedId(false); // eslint-disable-next-line
    }, [location, currentBuilding]);

    useEffect(() => {
        if (selectedId) {
            navigator(`/${pageName}/${selectedId}`);
        } // eslint-disable-next-line
    }, [selectedId]);

    // useEffect(() => {
    //     if (downloadExcel !== 0) {
    //         const downloadingExcel = async () => {
    //             try {
    //                 let httpRequest = "";
    //                 if (currentBuilding.id === 0 || pageName === "Buildings") {
    //                     httpRequest = `/${pageName}/info/excel`;
    //                 } else {
    //                     httpRequest = `/${pageName}/byBuilding/${currentBuilding.id}/excel`;
    //                 }
    //                 const res = axiosApi.get(httpRequest, {
    //                     responseType: "blob",
    //                 });
    //                 console.log("trying to download excel");

    //                 const url = window.URL.createObjectURL(
    //                     new Blob([res.data])
    //                 );

    //                 // Create a temporary anchor element to initiate the download
    //                 const link = document.createElement("a");
    //                 link.href = url;
    //                 link.setAttribute("download", "file.txt"); // Set the file name
    //                 document.body.appendChild(link);
    //                 link.click();

    //                 // Clean up the temporary URL and anchor element
    //                 URL.revokeObjectURL(url);
    //                 document.body.removeChild(link);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         };
    //         downloadingExcel();
    //     } // eslint-disable-next-line
    // }, [downloadExcel]);

    const handleDownload = async () => {
        try {
            const response = await axiosApi.get(`/${pageName}/info/excel`, {
                responseType: "blob", // Set the response type to blob
            });

            //Gets the name of the file
            const disposition = response.headers["content-disposition"];
            const match = disposition.match(/filename=(.*)"/);
            const fileName = match && match[1] ? match[1] : "downloaded_file";

            // Create a temporary URL for the file blob
            const url = window.URL.createObjectURL(new Blob([response.data]));

            // Create a temporary anchor element to initiate the download
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName); // Set the file name
            document.body.appendChild(link);
            link.click();

            // Clean up the temporary URL and anchor element
            URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    const handleDoubleClick = (row) => {
        setSelectedId(row.data.id);
    };

    // const saveNewInput = async (values) => {
    //     try {
    //         const res = await axiosApi.post(`/${pageName}/new`, { values });
    //         console.log(res);
    //         setNewDataEntered((old) => !old);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className="DataPage">
            <div className="DataPage-option-buttons">
                <div
                    className="DataPage-new-input button"
                    onClick={() => setSelectedId("new")}>
                    <AddNewIcon
                        fillColor="currentColor"
                        height="20px"
                        width="20px"
                    />
                    הוסיף חדש
                </div>
                <div
                    className="DataPage-download-excel button"
                    onClick={handleDownload}>
                    <ExcelIcon
                        fillColor="currentColor"
                        height="20px"
                        width="20px"
                    />
                    ייצוא לאקסל
                </div>
            </div>
            {/* <NewInputBox inputNames={inputFields} handleSave={saveNewInput} /> */}
            <MyAgTable
                allData={rowData}
                columnNames={columnData}
                size={{
                    width: "100%",
                    height: "calc(90vh - var(--header-height))",
                }}
                handleDoubleClick={handleDoubleClick}
            />
            <Outlet />
        </div>
    );
}

export default DataPage;
