import { useState, useRef, useEffect, useMemo, useCallback } from "react";

import { IClass } from "./IClass";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { useFetchData } from "./use-fetch-data";
import { CellClickedEvent } from "ag-grid-community";

export function CarsGrid() {
  const [rowData, setRowData] = useState();

  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        defaultColDef={{ sortable: true, filter: true }}
        pagination={true}
        rowData={rowData}
        columnDefs={colDefs}
      ></AgGridReact>
    </div>
  );
}

export default CarsGrid;
