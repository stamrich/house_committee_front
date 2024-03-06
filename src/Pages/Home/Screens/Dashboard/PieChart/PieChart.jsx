import { useEffect, useState } from "react";

import "./PieChart.css";

function PieChart({ listData }) {
    const [pieElements, setPieElements] = useState([]);

    var color = [
        "forestgreen",
        "crimson",
        "olivedrab",
        "cornflowerblue",
        "orange",
        "tomato",
        "purple",
        "turquoise",
        "navy",
        "gray",
    ];

    function sliceSize(dataNum, dataTotal) {
        return (dataNum / dataTotal) * 360;
    }

    function addSlice(sliceSize, offset, sliceID, color) {
        offset = offset - 1;
        const sizeRotation = -179 + sliceSize;
        const newElement = (
            <div
                className={`slice ${sliceID}`}
                key={`slice ${sliceID}`}
                style={{
                    transform: `rotate(${offset}deg) translate3d(0,0,0)`,
                }}>
                <span
                    style={{
                        transform: `rotate(${sizeRotation}deg) translate3d(0,0,0)`,
                        backgroundColor: color,
                    }}></span>
            </div>
        );
        setPieElements((elements) => [...elements, newElement]);
    }

    function iterateSlices(sliceSize, offset, dataCount, sliceCount, color) {
        var maxSize = 179,
            sliceId = `s${dataCount}-${sliceCount}`;

        if (sliceSize <= maxSize) {
            addSlice(sliceSize, offset, sliceId, color);
        } else {
            addSlice(maxSize, offset, sliceId, color);
            iterateSlices(
                sliceSize - maxSize,
                offset + maxSize,
                dataCount,
                sliceCount + 1,
                color
            );
        }
    }

    function createPie() {
        let listTotal = 0;
        for (var i = 0; i < listData.length; i++) {
            listTotal += listData[i][1];
        }
        let offset = 0;
        for (i = 0; i < listData.length; i++) {
            let size = sliceSize(listData[i][1], listTotal);
            iterateSlices(size, offset, i, 0, color[i]);
            offset += size;
        }
    }

    useEffect(() => {
        setPieElements([]);
        createPie(); // eslint-disable-next-line
    }, [listData]);

    return (
        <div className="PieChart">
            <ul className="pieID legend" key={`pie-list`}>
                {listData.map((arr, index) => {
                    return (
                        <li
                            style={{ borderColor: color[index] }}
                            key={`list-item-${arr[0]}-${index}`}>
                            <div className="legend-name">{arr[0]}</div>
                            <div className="legend-amount">{arr[1]}</div>
                        </li>
                    );
                })}
            </ul>
            <div className="pieID pie" key={`pie-elements`}>
                {pieElements}
            </div>
            <div className="pie-shadow"></div>
        </div>
    );
}

export default PieChart;
