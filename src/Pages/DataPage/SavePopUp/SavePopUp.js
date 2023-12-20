// import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./SavePopUp.css";

// import Icon's
import xSymbol from "../../../Icons/x-symbol.svg";
import SaveIcon from "../../../Icons/SaveIcon.js";

function SavePopUp({ handleSave, handleClose, bodyText }) {
    const { inputValues, oldInputValues } = bodyText;
    const [changes, setChanges] = useState(["1", "2"]);

    useEffect(() => {
        setChanges([
            Object.keys(inputValues).map((inputName) =>
                inputValues[inputName] !== oldInputValues[inputName]
                    ? `${inputName} מ: ${inputValues[inputName]} ל: ${oldInputValues[inputName]}`
                    : ""
            ),
        ]); // eslint-disable-next-line
    }, []);

    console.log(bodyText);
    console.log(oldInputValues);

    return (
        <div className="SavePopUp-wrapper">
            <div className="SavePopUp">
                <div className="SavePopUp-header">
                    <div className="SavePopUp-header-title">
                        אתה רוצה לשמור את השינויים?
                    </div>
                    <div className="SavePopUp-close" onClick={handleClose}>
                        <img src={xSymbol} alt="x symbol" />
                    </div>
                </div>
                <div className="SavePopUp-body">
                    {changes.map((change) => {
                        if (change !== "") {
                            return (
                                <div
                                    className="change-text"
                                    key={`change-text-${change}`}>
                                    {change}
                                </div>
                            );
                        }
                        return "";
                    })}
                </div>
                <div className="SavePopUp-save-button">
                    <SaveIcon fillColor="black" height="14" width="14" />
                    שמור
                </div>
            </div>
        </div>
    );
}

export default SavePopUp;
