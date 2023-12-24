import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import Components
import MyAgTable from "../../MyAgTable/MyAgTable.js";

//Style
import "./ApartmentsTab.css";

//Import Context
import { PageContext } from "../../../../Context/PageContext";
import { useAuth } from "../../../../hooks/auth/auth.js";

function ApartmentsTab() {
    const { axiosApi } = useAuth();
    const [rowData, setRowData] = useState();
    const navigator = useNavigate();
    const { id } = useParams();
    const hebrewNames = useContext(PageContext);
    const inputFields = hebrewNames.pageInfo["Apartments"].inputFields;
    // eslint-disable-next-line
    const [columnData, setColumnData] = useState(
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

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axiosApi.get(`/apartments/byBuilding/${id}`);
                console.log(res);
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
        <div className="ApartmentsTab-transaction-container">
            <div className="ApartmentsTab-transaction-options">
                <div className="ApartmentsTab-transaction-option">הוסף חדש</div>
                <div className="ApartmentsTab-transaction-option">מחק</div>
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
