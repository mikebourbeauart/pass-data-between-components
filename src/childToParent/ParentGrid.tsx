import React from "react";
import { useState, useRef } from "react";
import Child from "./Child";
import AgGridExample from "./AgGridExample";
import Details from "./Details";

export default function ParentGrid() {
  // const [data, setData] = useState("");
  const [selected, setSelected] = useState(null);

  const childRef = useRef<any>();

  const childToParentHandler = (childData: any) => {
    console.log("dataFromChild", childData);
    setSelected(childData);

    // fetch("https://www.ag-grid.com/example-assets/row-data.json")
    //   .then((result) => result.json())
    //   .then((rowData) => {
    //     const sel = rowData[childData].make;
    //     console.log(sel);
    //     setData(sel);
    //   });
  };
  console.log("selectedFromChild", selected);

  return (
    <div className="App">
      <div>
        <Child childToParent={childToParentHandler} />
        <div className="flex flex-row">
          <AgGridExample
            onClick={() => {
              if (childRef.current) {
                childRef.current.getAlert();
              }
            }}
            childToParent={childToParentHandler}
          />
          <Details selection={selected} />
        </div>
      </div>
    </div>
  );
}
