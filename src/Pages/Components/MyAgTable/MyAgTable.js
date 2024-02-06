import React, { useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

//Styles from Ag
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-balham.css"; // Optional theme CSS

//My custom styles
import "./MyAgTable.css";

function MyAgTable({ allData, columnNames, size, handleDoubleClick }) {
    const gridRef = useRef(); // Optional - for accessing Grid's API

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            resizable: true,
            width: 150,
            enableValue: true,
            localize: true,
            // filterParams: { translate: true },
        }),
        []
    );

    // const localeText = useMemo(() => {
    //     return AG_GRID_LOCALE_HE;
    // }, []);

    const gridOptions = {
        // Add event handlers - Added a double click event to get a popup
        onRowDoubleClicked: handleDoubleClick,
    };

    // Example of consuming Grid Event - No idea what this is
    // const cellClickedListener = useCallback((event) => {
    //     console.log("cellClicked", event);
    // }, []);

    // Example using Grid's API - No idea what this is
    // const buttonListener = useCallback((e) => {
    //     gridRef.current.api.deselectAll();
    // }, []);

    return (
        <div className="MyAgTable-container">
            {/* Example using Grid's API */}
            {/* <button onClick={buttonListener}>Push Me</button> */}

            {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
            <div className="ag-theme-balham" style={size}>
                <AgGridReact
                    enableRtl={true}
                    // localeText={localeText}
                    ref={gridRef} // Ref for accessing Grid's API
                    rowData={allData} // Row Data for all the Rows
                    columnDefs={columnNames} // Column Defs for Columns
                    defaultColDef={defaultColDef} // Default Column Properties
                    animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                    rowSelection="multiple" // Options - allows click selection of rows
                    // onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                    gridOptions={gridOptions} //Added options for grid - Used to get double click event
                />
            </div>
        </div>
    );
}

export default MyAgTable;
