import React from "react";

function LeftChevronIcon({ fillColor, width, height }) {
    return (
        <div>
            <svg
                fill={fillColor}
                width={width}
                height={height}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1.707 4.293a1 1 0 010 1.414L9.414 10l2.293 2.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" />
            </svg>
        </div>
    );
}

export default LeftChevronIcon;
