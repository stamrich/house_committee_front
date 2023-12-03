import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Context
import { PageContext } from "../../../../Context/PageContext.js";
import { useAuth } from "../../../../hooks/auth/auth.js";

function InputTab() {
    const { cookies } = useAuth();
    const { pageInfo } = useContext(PageContext);
    const { pageName, id, tabName } = useParams();
    const inputFields = pageInfo[pageName].inputFields;
    const [oldInputValues, setOldInputValues] = useState({});
    const [responseMessage, setResponseMessage] = useState("");
    const [inputValues, setInputValues] = useState(
        Object.fromEntries(Object.keys(inputFields).map((x) => [x, ""]))
    );

    useEffect(() => {
        const fetchSingleData = async () => {
            try {
                const res = await axios.get(`/api/${pageName}/${id}`, {
                    headers: { authorization: cookies.token },
                });
                // this to filter out all the nulls, if not done it raises an error
                const existingData = Object.fromEntries(
                    Object.keys(res.data[0]).map((x) => [
                        x,
                        res.data[0][x] === null ? "" : `${res.data[0][x]}`,
                    ])
                );
                // this is here to remove the id from the inputValues
                delete existingData.id;
                setOldInputValues(existingData);
                setInputValues(existingData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleData();
        // eslint-disable-next-line
    }, [tabName]);

    const handleInputChange = (event) => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        setInputValues((values) => ({ ...values, [name]: value }));
    };

    const resetInputs = () => {
        setInputValues(oldInputValues);
    };

    const handleSave = async () => {
        setResponseMessage("");
        console.log("updated values");
        console.log(oldInputValues === inputValues);
        if (oldInputValues !== inputValues) {
            try {
                const res = await axios.put(
                    `/api/${pageName}/${id}`,
                    {
                        inputValues,
                    },
                    {
                        headers: { authorization: cookies.token },
                    }
                );
                console.log(res);
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
        <div className="PopUp-info-tab">
            <div className="response-message">{responseMessage}</div>
            <div className="PopUp-info-tab-inputs">
                {Object.keys(inputFields).map((inputKey) => (
                    <div key={`inputs-${inputKey}`}>
                        {inputFields[inputKey].name}:{" "}
                        <input
                            type={inputFields[inputKey].type}
                            name={inputKey}
                            value={inputValues[inputKey]}
                            onChange={handleInputChange}
                        />
                    </div>
                ))}
            </div>
            <div className="PopUp-info-tab-buttons">
                <div className="PopUp-info-tab-button" onClick={handleSave}>
                    שמור
                </div>
                <div className="PopUp-info-tab-button" onClick={resetInputs}>
                    ניקוי
                </div>
            </div>
        </div>
    );
}

export default InputTab;
