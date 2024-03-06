import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

// // Import Components
import MyAgTable from "../../../../Components/MyAgTable/MyAgTable.jsx";

// //Import Context
import { PageContext } from "../../../../Context/PageContext.jsx";
import { useAuth } from "../../../../Hooks/auth/auth.jsx";

function ConnectionsTab() {
    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/;
    const { axiosApi } = useAuth();
    const [rowData, setRowData] = useState();
    const navigator = useNavigate();
    const { id } = useParams();
    const hebrewNames = useContext(PageContext);
    const inputFields = hebrewNames.pageInfo["Connections"].inputFields;
    // eslint-disable-next-line
    const [columnData, setColumnData] = useState(
        Object.keys(inputFields).map((key) => {
            return {
                field: key,
                headerName: inputFields[key]
                    ? inputFields[key].name
                    : inputFields[key],
                filter: true,
                cellRenderer: (params) => {
                    if (dateRegex.test(params.value)) {
                        console.log("works with date");
                        const date = new Date(params.value);
                        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
                    }
                    return params.value;
                },
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
                const res = await axiosApi.get(`/people/byConnection/${id}`);
                // console.log(res);
                console.log(dateRegex.test(res.data[0].entered));
                console.log(new Date(res.data[0].entered));
                console.log(new Date("null"));
                setRowData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllData();
        // eslint-disable-next-line
    }, [id]);

    const handleDoubleClick = (row) => {
        navigator(`/People/${row.data.person_id}`);
    };

    return (
        <div className="PopUpWindow-transaction-container">
            <div className="PopUpWindow-transaction-options">
                <div className="PopUpWindow-transaction-option">הוסף חדש</div>
                <div className="PopUpWindow-transaction-option">מחק</div>
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

export default ConnectionsTab;

// function ApartmentsTab() {
// }

// export default ApartmentsTab;
