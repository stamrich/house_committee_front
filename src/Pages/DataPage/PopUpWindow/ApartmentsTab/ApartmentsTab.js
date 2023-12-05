import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import Components
import MyAgTable from "../../MyAgTable/MyAgTable.js";

//Import Context
import { PageContext } from "../../../../Context/PageContext";
import { useAuth } from "../../../../hooks/auth/auth.js";

function ApartmentsTab() {
    const { axiosApi } = useAuth();
    const [rowData, setRowData] = useState();
    const [columnData, setColumnData] = useState();
    const navigator = useNavigate();
    const { id } = useParams();
    const hebrewNames = useContext(PageContext);
    const inputFields = hebrewNames.pageInfo["Apartments"].inputFields;

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axiosApi.get(`/apartments/byBuilding/${id}`);
                console.log(res);
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
        // eslint-disable-next-line
    }, [id]);

    const handleDoubleClick = (row) => {
        navigator(`/Apartments/${row.data.id}`);
    };

    return (
        <div className="PopUp-transaction-container">
            <div className="PopUp-transaction-options">
                <div className="PopUp-transaction-option">הוסף חדש</div>
                <div className="PopUp-transaction-option">מחק</div>
            </div>
            <MyAgTable
                allData={rowData}
                columnNames={columnData}
                handleDoubleClick={handleDoubleClick}
                size={{ width: "50vw", height: "40vh" }}
            />
        </div>
    );
}

export default ApartmentsTab;
