import React, { useState } from "react";

function DropdownSelect({ inputName }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };

    return (
        <div className="DropdownSelect">
            <div className="DropdownInput">
                <div className="input-label">{}</div>
                <input
                    type="text"
                    className="input"
                    placeholder={inputName}
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default DropdownSelect;
