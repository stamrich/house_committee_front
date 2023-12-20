import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

//Context
import { PageContext } from "../../../../Context/PageContext.js";
import { useAuth } from "../../../../hooks/auth/auth.js";

//Confirm Save Component
import SavePopUp from "../../SavePopUp/SavePopUp.js";

//Icons
import SaveIcon from "../../../../Icons/SaveIcon.js";
import ResetIcon from "../../../../Icons/ResetIcon.js";

function InputTab() {
    const { axiosApi } = useAuth();
    const { pageInfo } = useContext(PageContext);
    const { pageName, id, tabName } = useParams();
    const inputFields = pageInfo[pageName].inputFields;
    const [oldInputValues, setOldInputValues] = useState({});
    const [responseMessage, setResponseMessage] = useState("");
    const [confirmSave, setConfirmSave] = useState(false);
    const [inputValues, setInputValues] = useState(
        Object.fromEntries(Object.keys(inputFields).map((x) => [x, ""]))
    );

    useEffect(() => {
        const fetchSingleData = async () => {
            try {
                const res = await axiosApi.get(`/${pageName}/${id}`);
                // this to filter out all the nulls, if not done it raises an error
                const existingData = Object.fromEntries(
                    Object.keys(res.data[0]).map((x) => [
                        x,
                        res.data[0][x] === null ? "" : `${res.data[0][x]}`,
                    ])
                );
                // this is here to remove the id from the inputValues
                // delete existingData.id;
                setOldInputValues(existingData);
                setInputValues(existingData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleData();
        // eslint-disable-next-line
    }, [tabName]);

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
                return (
                    <div key={inputName}>
                        {inputFields[inputName].name}: {inputValues[inputName]}
                    </div>
                );
            default:
                break;
        }
    }

    const handleInputChange = (event) => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        setInputValues((values) => ({ ...values, [name]: value }));
    };

    const resetInputs = () => {
        setInputValues(oldInputValues);
    };

    const handleConfirmSave = async () => {
        setConfirmSave(false);
        handleSave();
    };

    const handleSave = async () => {
        setResponseMessage("");
        console.log("updated values");
        console.log(oldInputValues === inputValues);
        if (oldInputValues !== inputValues) {
            try {
                const res = await axiosApi.put(`/${pageName}/${id}`, {
                    inputValues,
                });
                // console.log(res);
                if (res.request.status === 200) {
                    setResponseMessage("השינויים נשמרו בהצלחה");
                    setOldInputValues(inputValues);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="PopUpWindow-info-tab">
            {confirmSave && (
                <SavePopUp
                    handleSave={handleConfirmSave}
                    handleClose={() => {
                        setConfirmSave(false);
                    }}
                    bodyText={{
                        inputValues: inputValues,
                        oldInputValues: oldInputValues,
                    }}
                />
            )}
            <div className="response-message">{responseMessage}</div>
            <div className="PopUpWindow-info-tab-inputs">
                {Object.keys(inputFields).map((inputName) =>
                    inputTypes(inputName)
                )}
            </div>
            <div className="PopUpWindow-info-tab-buttons">
                <div
                    className="PopUpWindow-info-tab-button"
                    onClick={() => setConfirmSave(true)}>
                    <SaveIcon fillColor="black" height="14" width="14" />
                    שמור
                </div>
                <div
                    className="PopUpWindow-info-tab-button"
                    onClick={resetInputs}>
                    <ResetIcon fillColor="black" height="14" width="14" />
                    ניקוי
                </div>
            </div>
        </div>
    );
}

export default InputTab;
