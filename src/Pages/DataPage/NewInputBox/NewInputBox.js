import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Icon's
import DownChevronIcon from "../../../Icons/DownChevronIcon.js";
import UpChevronIcon from "../../../Icons/UpChevronIcon.js";
import AddNewIcon from "../../../Icons/AddNewIcon.js";
import SaveIcon from "../../../Icons/SaveIcon.js";
import ResetIcon from "../../../Icons/ResetIcon.js";
import ExcelIcon from "../../../Icons/ExcelIcon.js";

//Import Styles
import "./NewInputBox.css";

function NewInputBox({ inputNames, handleSave, handleExcelButton }) {
    // const { pageName } = useParams();
    const { pageName } = useParams();
    const inputFields = inputNames;
    const [inputBoxOpen, setInputBoxOpen] = useState(false);
    const [inputValues, setInputValues] = useState(
        Object.fromEntries(Object.keys(inputFields).map((x) => [x, ""]))
    );

    useEffect(() => {
        setInputBoxOpen(false);
        resetInputFields();
        // eslint-disable-next-line
    }, [pageName]);

    const translateOpenNew = {
        Buildings: "בניין חדש",
        Apartments: "דירה חדשה",
        People: "איש קשר חדש",
        Transactions: "תשלום חדש",
        Todos: "משימה חדשה",
    };

    function resetInputFields() {
        setInputValues(
            Object.fromEntries(Object.keys(inputFields).map((x) => [x, ""]))
        );
    }

    function handleCollapse() {
        setInputBoxOpen((current) => !current);
    }

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputValues((values) => ({ ...values, [name]: value }));
    };

    function handleSaveButton() {
        console.log(inputValues);
        //only if some info is inputted will it save :TODO: add validation here
        if (
            inputValues["zipcode"] ||
            inputValues["משפחה"] ||
            inputValues["amount"]
        ) {
            handleSave(inputValues);
            resetInputFields();
        }
    }

    function inputTypes(inputName) {
        switch (inputFields[inputName].type) {
            case "text":
            case "number":
            case "tel":
                return (
                    <div key={inputName}>
                        {inputFields[inputName].name}:{" "}
                        <input
                            type={inputFields[inputName].type}
                            name={inputName}
                            value={inputValues[inputName]}
                            onChange={handleInputChange}
                        />
                    </div>
                );
            case "textArea":
                return (
                    <div key={inputName}>
                        {inputFields[inputName].name}:{" "}
                        <textarea
                            name={inputName}
                            value={inputValues[inputName]}
                            onChange={handleInputChange}
                        />
                    </div>
                );
            case "select":
                return (
                    <div key={inputName}>
                        {inputFields[inputName].name}:{" "}
                        <select
                            name={inputName}
                            value={inputValues[inputName]}
                            onChange={handleInputChange}>
                            <option hidden label=" "></option>
                            {inputFields[inputName].options.map((option) => {
                                return (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                );
            case "None":
                return "";
            default:
                break;
        }
    }

    return (
        <div
            className={
                inputBoxOpen ? "new-input-box box-open" : "new-input-box"
            }>
            <div className="new-input-box-title" onClick={handleCollapse}>
                <div className="new-input-title">
                    <AddNewIcon fillColor="black" height="20px" width="20px" />
                    {translateOpenNew[pageName]}
                </div>
                <div className="box-collapse" onClick={handleCollapse}>
                    {inputBoxOpen ? (
                        <UpChevronIcon
                            fillColor="#ff7b1d"
                            height="30px"
                            width="30px"
                        />
                    ) : (
                        <DownChevronIcon
                            fillColor="#ff7b1d"
                            height="30px"
                            width="30px"
                        />
                    )}
                </div>
            </div>
            {inputBoxOpen && (
                <>
                    <div className="new-input-box-params">
                        {Object.keys(inputFields).map((inputName) =>
                            inputTypes(inputName)
                        )}
                    </div>
                    <div className="new-input-box-buttons-container">
                        <div className="new-input-box-buttons">
                            <div
                                className="new-input-box-button"
                                onClick={handleSaveButton}>
                                <SaveIcon
                                    fillColor="black"
                                    height="14"
                                    width="14"
                                />
                                שמור
                            </div>
                            <div
                                className="new-input-box-button"
                                onClick={resetInputFields}>
                                <ResetIcon
                                    fillColor="black"
                                    height="14"
                                    width="14"
                                />
                                ניקוי
                            </div>
                        </div>
                        <div
                            className="new-input-box-button excel-upload"
                            onClick={handleExcelButton}>
                            <ExcelIcon
                                fillColor="black"
                                height="20px"
                                width="20px"
                            />
                            להעלות אקסל
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default NewInputBox;
