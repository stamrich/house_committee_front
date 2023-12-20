import React from "react";

function RightChevronIcon({ fillColor, width, height }) {
    return (
        <div>
            <svg
                fill={fillColor}
                width={width}
                height={height}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 110 16 8 8 0 010-16zM8.293 6.293a1 1 0 000 1.414L10.586 10l-2.293 2.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 0z" />
            </svg>
        </div>
    );
}

export default RightChevronIcon;
