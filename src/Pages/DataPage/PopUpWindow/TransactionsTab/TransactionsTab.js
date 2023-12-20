import React from "react";

function TransactionsTab() {
    // eslint-disable-next-line
    function handleDoubleClick() {
        console.log("handleDoubleClick");
    }

    return (
        <div className="PopUpWindow-transaction-container">
            <div className="PopUpWindow-transaction-options">
                <div className="PopUpWindow-transaction-option">הוסף חדש</div>
                <div className="PopUpWindow-transaction-option">מחק</div>
                <div className="PopUpWindow-transaction-option">להוצא דוח</div>
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
