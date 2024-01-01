import React, { useState } from "react";
import "./PieChart.css";

const PieChart = () => {
    const [values, setValues] = useState([30, 40, 30]); // Example values for each section

    const total = values.reduce((acc, value) => acc + value, 0);

    const renderSlices = () => {
        let cumulativePercentage = 0;

        return values.map((value, index) => {
            const percentage = (value / total) * 100;

            const sliceStyle = {
                transform: `rotate(${cumulativePercentage}deg) skewY(${percentage}deg)`,
                backgroundColor: getRandomColor(),
            };

            cumulativePercentage += percentage;

            return <div key={index} className="slice" style={sliceStyle}></div>;
        });
    };

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="pie-chart">
            <div className="chart">
                {renderSlices()}
                <div className="center">
                    <div className="total">{total}</div>
                </div>
            </div>
        </div>
    );
};

export default PieChart;
