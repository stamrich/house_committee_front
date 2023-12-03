import React from "react";

function TransactionsTab() {
    // eslint-disable-next-line
    function handleDoubleClick() {
        console.log("handleDoubleClick");
    }

    return (
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
    );
}

export default TransactionsTab;
