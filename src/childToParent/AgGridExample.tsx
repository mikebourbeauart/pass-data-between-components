import { useState, useRef, useEffect, useMemo, useCallback } from "react";

import { IClass } from "./IClass";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { useFetchData } from "./use-fetch-data";
import { CellClickedEvent } from "ag-grid-community";

export function CarsGrid({ childToParent }: any) {
  const gridRef = useRef<AgGridReact>(null);
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

  const onSelectionChangedHandler = (event: any) => {
    if (gridRef.current) {
      let selectedNode = gridRef.current.api.getSelectedNodes()[0];
      console.log(selectedNode);
      if (selectedNode && selectedNode) {
        console.log("classesSelectionNodeDataId", selectedNode.data.id);
        childToParent(selectedNode ? selectedNode.data.make : null);
      }
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        ref={gridRef}
        defaultColDef={{ sortable: true, filter: true }}
        pagination={true}
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection="single"
        onSelectionChanged={onSelectionChangedHandler}
      ></AgGridReact>
    </div>
  );
}

export default CarsGrid;
