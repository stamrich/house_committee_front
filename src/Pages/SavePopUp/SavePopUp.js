// import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Style
import "./SavePopUp.css";

// import Icon's
import xSymbol from "../../Icons/x-symbol.svg";
import SaveIcon from "../../Icons/SaveIcon.js";
import { useParams } from "react-router-dom";

function SavePopUp({ handleSave, handleClose, bodyText }) {
    const { id } = useParams();
    const { inputValues, oldInputValues, inputFields } = bodyText;
    const [changes, setChanges] = useState(["1", "2"]);

    useEffect(() => {
        setChanges(
            // eslint-disable-next-line
            Object.keys(inputValues).map((inputName) => {
                if (id === "new") {
                    return `${inputFields[inputName].name}: ${inputValues[inputName]}`;
                } else if (
                    inputValues[inputName] !== oldInputValues[inputName]
                ) {
                    return `${inputFields[inputName].name} מ: ${oldInputValues[inputName]} ל: ${inputValues[inputName]}`;
                }
            })
        ); // eslint-disable-next-line
    }, []);

    return (
        <div className="SavePopUp-wrapper">
            <div className="SavePopUp">
                <div className="SavePopUp-header">
                    <div className="SavePopUp-header-title">
                        אתה רוצה לשמור את {id === "new" ? "נתונים" : "השינויים"}{" "}
                        ?
                    </div>
                    <div className="SavePopUp-close" onClick={handleClose}>
                        <img src={xSymbol} alt="x symbol" />
                    </div>
                </div>
                <div className="SavePopUp-body">
                    {changes.map((change, index) => {
                        if (change !== "") {
                            return (
                                <div
                                    className="change-text"
                                    key={`change-text-${index}`}>
                                    {change}
                                </div>
                            );
                        }
                        return "";
                    })}
                </div>
                <div className="button" onClick={handleSave}>
                    <SaveIcon fillColor="currentColor" height="14" width="14" />
                    שמור
                </div>
            </div>
        </div>
    );
}

export default SavePopUp;
