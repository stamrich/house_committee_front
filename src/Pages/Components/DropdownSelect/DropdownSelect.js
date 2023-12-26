import React, { useRef, useEffect, useState } from "react";

//Style
import "./DropdownSelect.css";

function DropdownSelect({ allOptions, selectedOption, setSelectedOption }) {
    const [searchValue, setSearchValue] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownOptions, setDropdownOptions] = useState(allOptions);

    const searchRef = useRef();

    useEffect(() => {
        setSearchValue("");
        if (showDropdown && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showDropdown]);

    useEffect(() => {
        setDropdownOptions(allOptions);
    }, [allOptions]);

    useEffect(() => {
        const handler = () => setShowDropdown(false);

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        };
    }, []);

    const handleInputChange = (event) => {
        event.stopPropagation();
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    const handleDropdown = (event) => {
        event.stopPropagation();
        setShowDropdown(!showDropdown);
    };

    const getDropdownOptions = () => {
        if (!searchValue) {
            return dropdownOptions;
        }
        const searchResults = dropdownOptions.filter(
            (option) => option.address.indexOf(searchValue) >= 0
        );
        if (searchResults.length > 0) {
            return searchResults;
        }
        return ["לא נמצאו תוצאות חיפוש"];
    };

    return (
        <div className="DropdownSelect">
            <div className="Dropdown-selected" onClick={handleDropdown}>
                בניין: {selectedOption.address}
            </div>
            {showDropdown && (
                <div className="Dropdown-menu box-shadow">
                    <input
                        type="text"
                        className="input"
                        placeholder="חיפוש...."
                        value={searchValue}
                        onChange={handleInputChange}
                        ref={searchRef}
                        onClick={(e) => e.stopPropagation()}
                    />
                    {getDropdownOptions().map((option) => (
                        <div
                            className="Dropdown-option"
                            key={`${option.id}_${option.address}`}
                            onClick={() =>
                                setSelectedOption({
                                    id: option.id,
                                    address: option.address,
                                })
                            }>
                            {option.address}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdownSelect;
