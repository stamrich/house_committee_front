import React from "react";

function UpChevronIcon({ fillColor, width, height }) {
    return (
        <div>
            <svg
                fill={fillColor}
                width={width}
                height={height}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M18 10a8 8 0 10-16 0 8 8 0 0016 0zm-4.293 1.707a1 1 0 01-1.414 0L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
            </svg>
        </div>
    );
}

export default UpChevronIcon;
