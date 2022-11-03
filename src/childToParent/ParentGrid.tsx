import React from "react";
import { useState } from "react";
import Child from "./Child";
import AgGridExample from "./AgGridExample";
import Details from "./Details";

export default function ParentGrid() {
  const [data, setData] = useState("");

  const childToParentHandler = (childData: any) => {
    console.log("dataFromChild", childData);
    // setData(childData);

    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => {
        const sel = rowData[childData].make;
        console.log(sel);
        setData(sel);
      });
    //   .then((selData) => console.log("detailData", selData));
  };

  return (
    <div className="App">
      <div>
        <Child childToParent={childToParentHandler} />
        <div className="flex flex-row">
          <AgGridExample childToParent={childToParentHandler} />
          <Details selection={data} />
        </div>
      </div>
    </div>
  );
}
