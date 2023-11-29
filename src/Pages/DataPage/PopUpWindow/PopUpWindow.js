import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";

// Importing components
// import MyAgTable from "../MyAgTable/MyAgTable.js";

//Import Styles
import "./PopUpWindow.css";

// import Icon's
import xSymbol from "../../../Icons/x-symbol.svg";

//Context
import { PageContext } from "../../../Context/PageContext.js";

function PopUpWindow() {
    const { inputFields } = useContext(PageContext);
    const { pageName, id } = useParams();
    const navigator = useNavigate();
    const [shownTab, setShownTab] = useState("info");
    const currentFields = inputFields[pageName];
    const [inputValues, setInputValues] = useState([
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
    ]);

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

    const translateWindowName = {
        Buildings: "בניין",
        Apartments: "דירה",
        People: "איש קשר",
        Transactions: "תשלום",
        Todos: "משימה",
    };

    const handleInputChange = (event) => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        setInputValues((values) => ({ ...values, [name]: value }));
    };

    function changeTab(event) {
        console.log(event.target.id);
        setShownTab(event.target.id);
    } // eslint-disable-next-line
    function handleDoubleClick() {
        console.log("handleDoubleClick");
    }

    function handleCloseButton() {
        navigator(-1);
    }
    console.log(inputFields);
    const PopUpTabs = {
        info: (
            <div className="PopUp-info-tab">
                <div className="PopUp-info-tab-inputs">
                    {Object.keys(currentFields).map((inputKey) => (
                        <div key={`inputs-${inputKey}`}>
                            {currentFields[inputKey]}:{" "}
                            <input
                                type="text"
                                name={inputKey}
                                value={inputValues[inputKey]}
                                onChange={handleInputChange}
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
    return (
        <div className="PopUp">
            <div className="PopUp-body">
                <div className="PopUp-header">
                    <div className="PopUp-header-title">
                        קוד {translateWindowName[pageName]} : {id}
                    </div>
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
