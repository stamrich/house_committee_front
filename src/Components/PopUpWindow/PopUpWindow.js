import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";

// Importing components
// import MyAgTable from "../MyAgTable/MyAgTable.js";

//Import Styles
import "./PopUpWindow.css";

// import Icon's
import xSymbol from "../../Icons/x-symbol.svg";

// function PopUpWindow({ fromWhere, tableColumns, rowInfo, buildings = false }) {
function PopUpWindow() {
    const test2 = [
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 1,
            קומה: 0,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 2,
            קומה: 0,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "אשראי",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 3,
            קומה: 0,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 4,
            קומה: 1,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "אשראי",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 5,
            קומה: 1,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 6,
            קומה: 1,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 7,
            קומה: 2,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "אשראי",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 8,
            קומה: 2,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 9,
            קומה: 2,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 10,
            קומה: 3,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "אשראי",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 11,
            קומה: 3,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 12,
            קומה: 3,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "אשראי",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 13,
            קומה: 4,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "",
        },
        {
            "קוד בניין": 12160,
            רחוב: "בית יוסף",
            מספר: 60,
            עיר: "קריית_גת",
            "דירה מס'": 14,
            קומה: 4,
            "מחסן מוצמד": "",
            "חניה מוצמדת": "",
            הערות: "",
            "אמצעי תשלום": "אשראי",
        },
    ];
    const { id } = useParams();
    const navigator = useNavigate();
    const location = useLocation();
    const [shownTab, setShownTab] = useState("info");
    const [inputValues, setInputValues] = useState(test2);

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
        {
            id: "8392",
            date: "2014-12-10 03:23:00",
            type: "bill",
            amount: "59.34",
        },
        {
            id: "4921",
            date: "2014-12-10 08:23:00",
            type: "payment",
            amount: "1245",
        },
        {
            id: "3019",
            date: "2014-12-10 21:23:00",
            type: "bill",
            amount: "321",
        },
    ];

    const testColumns = [
        { field: "id", headerName: "not id", filter: true },
        { field: "date", headerName: "not date", filter: true },
        { field: "type", headerName: "not type", filter: true },
        {
            field: "amount",
            filter: true,
            cellStyle: (params) => {
                if (params.data.type === "bill") {
                    //mark bills cells as red
                    return { backgroundColor: "rgb(246, 178, 176)" };
                }
                console.log(params);
                return { backgroundColor: "rgb(189, 246, 176)" };
            },
        },
    ];

    const testColumns2 = [
        { field: "קוד בניין", filter: true },
        { field: "רחוב", filter: true },
        { field: "מספר", filter: true },
        { field: "עיר", filter: true },
        { field: "דירה מס'", filter: true },
        { field: "קומה", filter: true },
        { field: "מחסן מוצמד", filter: true },
        { field: "חניה מוצמדת", filter: true },
        { field: "הערות", filter: true },
        { field: "אמצעי תשלום", filter: true },
    ];

    const handleInputChange = (event) => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        setInputValues((values) => ({ ...values, [name]: value }));
    };

    function changeTab(event) {
        console.log(event.target.id);
        setShownTab(event.target.id);
    }
    function handleDoubleClick() {
        console.log("handleDoubleClick");
    }

    function handleCloseButton() {
        navigator(-1);
    }

    const PopUpTabs = {
        info: (
            <div className="PopUp-info-tab">
                <div className="PopUp-info-tab-inputs">
                    {testColumns2.map((column) => (
                        <div key={`inputs-${column.field}`}>
                            {column.field}:{" "}
                            <input
                                type="text"
                                onChange={handleInputChange}
                                name={column.field}
                                value={inputValues[column.field]}
                            />
                        </div>
                    ))}
                </div>
                <div className="PopUp-info-tab-buttons">
                    <div className="PopUp-info-tab-button">שמור</div>
                    <div className="PopUp-info-tab-button">ניקוי</div>
                </div>
            </div>
        ),
        transactions: (
            <div className="PopUp-transaction-container">
                <div className="PopUp-transaction-options">
                    <div className="PopUp-transaction-option">הוסף חדש</div>
                    <div className="PopUp-transaction-option">מחק</div>
                    <div className="PopUp-transaction-option">להוצא דוח</div>
                </div>
                {/* <MyAgTable
                    allData={testData}
                    columnNames={testColumns}
                    handleDoubleClick={handleDoubleClick}
                    size={{ width: "39vw", height: "40vh" }}
                /> */}
            </div>
        ),
        apartments: (
            <div className="PopUp-transaction-container">
                <div className="PopUp-transaction-options">
                    <div className="PopUp-transaction-option">הוסף חדש</div>
                    <div className="PopUp-transaction-option">מחק</div>
                </div>
                {/* <MyAgTable
                    allData={test2}
                    columnNames={testColumns2}
                    handleDoubleClick={handleDoubleClick}
                    size={{ width: "50vw", height: "70vh" }}
                /> */}
            </div>
        ),
    };
    {
        console.log(location);
    }
    return (
        <div className="PopUp">
            <div className="PopUp-body">
                <div className="PopUp-header">
                    <div className="PopUp-header-title">: {id}</div>
                    <div className="PopUp-tab-selectors">
                        {Object.keys(PopUpTabs).map((tabName) => {
                            // if (tabName === "apartments" && !buildings) {
                            //     return "";
                            // }
                            return (
                                <div
                                    className={
                                        tabName === shownTab
                                            ? "PopUp-tab selected"
                                            : "PopUp-tab"
                                    }
                                    id={tabName}
                                    key={`tab-${tabName}`}
                                    onClick={changeTab}>
                                    {tabName}
                                </div>
                            );
                        })}
                    </div>
                    <div className="PopUp-close" onClick={handleCloseButton}>
                        <img src={xSymbol} alt="x symbol" />
                    </div>
                </div>
                <div className="PopUp-content">{PopUpTabs[shownTab]}</div>
            </div>
        </div>
    );
}

export default PopUpWindow;
