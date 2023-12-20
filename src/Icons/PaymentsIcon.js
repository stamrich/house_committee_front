import React from "react";

function PaymentsIcon({ fillColor, width, height }) {
    return (
        <svg
            fill={fillColor === "white" ? "#ff7b1d" : "white"}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_901_1341)">
                <path
                    d="M15 17C15 15.343 13.657 14 12 14M12 14C10.343 14 9 15.343 9 17C9 18.657 10.343 20 12 20C13.657 20 15 21.343 15 23C15 24.657 13.657 26 12 26M12 14V13M12 26C10.343 26 9 24.657 9 23M12 26V27M22 31H31V29M25 26H31V24M26 21H31V19M26 16H31V14M23 11H31V9M10 6H31V1H7V6M23 20C23 13.926 18.074 9 12 9C5.926 9 1 13.926 1 20C1 26.074 5.926 31 12 31C18.074 31 23 26.074 23 20Z"
                    stroke={fillColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_901_1341">
                    <rect
                        width="32"
                        height="32"
                        // fill={fillColor === "white" ? "black" : "white"}
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

export default PaymentsIcon;
