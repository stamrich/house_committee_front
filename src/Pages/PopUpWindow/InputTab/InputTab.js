import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Context
import { PageContext } from "../../../Context/PageContext.js";
import { useAuth } from "../../../hooks/auth/auth.js";

//Style
import "./InputTab.css";

//Confirm Save Component
import SavePopUp from "../../SavePopUp/SavePopUp.js";

//Icons
import SaveIcon from "../../../Icons/SaveIcon.js";
import ResetIcon from "../../../Icons/ResetIcon.js";
import ExcelIcon from "../../../Icons/ExcelIcon.js";

function InputTab() {
    const navigator = useNavigate();
    const { axiosApi } = useAuth();
    const { pageInfo } = useContext(PageContext);
    const { pageName, id, tabName } = useParams();
    const inputFields = pageInfo[pageName].inputFields;
    const [oldInputValues, setOldInputValues] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [confirmSave, setConfirmSave] = useState(false);
    const [inputValues, setInputValues] = useState(
        Object.fromEntries(Object.keys(inputFields).map((x) => [x, ""]))
    );

    useEffect(() => {
        if (id !== "new") {
            const fetchSingleData = async () => {
                try {
                    const res = await axiosApi.get(
                        `/info?pagename=${pageName}&filter=${pageName}By${pageName}&filter_id=${id}`
                    );
                    // this to filter out all the nulls, if not done it raises an error
                    const existingData = Object.fromEntries(
                        Object.keys(res.data[0]).map((x) => [
                            x,
                            res.data[0][x] === null ? "" : `${res.data[0][x]}`,
                        ])
                    );
                    setOldInputValues(existingData);
                    setInputValues(existingData);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchSingleData();
        } else if (id !== "new") {
            setInputValues(
                Object.fromEntries(
                    Object.keys(inputFields).map((x) =>
                        inputFields[x].type !== "None" ? [x, ""] : ""
                    )
                )
            );
        }
        // eslint-disable-next-line
    }, [tabName]);

    function inputTypes(inputName) {
        switch (inputFields[inputName].type) {
            case "text":
            case "number":
            case "tel":
                return (
                    <div key={inputName} className="input-box">
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
                    <div key={inputName} className="input-box">
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
                    <div key={inputName} className="input-box">
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
                return (
                    <div key={inputName} className="input-box">
                        {inputFields[inputName].name}: {inputValues[inputName]}
                    </div>
                );
            default:
                break;
        }
    }

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputValues((values) => ({ ...values, [name]: value }));
    };

    const resetInputs = () => {
        if (id !== "new") {
            setInputValues(oldInputValues);
        } else {
            setInputValues(
                Object.fromEntries(Object.keys(inputFields).map((x) => [x, ""]))
            );
        }
    };

    const openConformSave = () => {
        if (oldInputValues !== inputValues) {
            setConfirmSave(true);
        }
    };

    const handleConfirmSave = async () => {
        setConfirmSave(false);
        handleSave();
        if (id === "new") {
            navigator("..");
        }
    };

    const handleExcelButton = () => {
        console.log("excel button clicked");
    };

    const handleSave = async () => {
        setResponseMessage("");
        if (id !== "new") {
            try {
                const res = await axiosApi.put(`/${pageName}/${id}`, {
                    inputValues,
                });
                if (res.request.status === 200) {
                    setResponseMessage("השינויים נשמרו בהצלחה");
                    setOldInputValues(inputValues);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const res = await axiosApi.post(`/${pageName}/new`, {
                    inputValues,
                });
                if (res.request.status === 200) {
                    setResponseMessage("השינויים נשמרו בהצלחה");
                    resetInputs();
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="InputTab">
            {confirmSave && (
                <SavePopUp
                    handleSave={handleConfirmSave}
                    handleClose={() => {
                        setConfirmSave(false);
                    }}
                    bodyText={{
                        inputValues: inputValues,
                        oldInputValues: oldInputValues,
                        inputFields: inputFields,
                    }}
                />
            )}
            <div className="response-message">{responseMessage}</div>
            <div className="InputTab-inputs">
                {Object.keys(inputFields).map((inputName) =>
                    inputTypes(inputName)
                )}
            </div>
            <div className="InputTab-buttons">
                <div className="InputTab-save-reset-buttons">
                    <div className="button" onClick={openConformSave}>
                        <SaveIcon
                            fillColor="currentColor"
                            height="14"
                            width="14"
                        />
                        שמור
                    </div>
                    <div className="button" onClick={resetInputs}>
                        <ResetIcon
                            fillColor="currentColor"
                            height="14"
                            width="14"
                        />
                        ניקוי
                    </div>
                </div>
                {id === "new" && (
                    <div
                        className="excel-upload button"
                        onClick={handleExcelButton}>
                        <ExcelIcon
                            fillColor="currentColor"
                            height="20px"
                            width="20px"
                        />
                        להעלות אקסל
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputTab;
