import React from "react";

function AddNewIcon({ fillColor, width, height }) {
    return (
        <div>
            <svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="icon line-color">
                <path
                    id="secondary"
                    d="M18,15v6m3-3H15"
                    style={{
                        fill: "none",
                        stroke: fillColor,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                    }}></path>
                <path
                    id="primary"
                    d="M10,20H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h9.59a1,1,0,0,1,.7.29l3.42,3.42a1,1,0,0,1,.29.7V11"
                    style={{
                        fill: "none",
                        stroke: fillColor,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                    }}></path>
            </svg>
        </div>
    );
}

export default AddNewIcon;
