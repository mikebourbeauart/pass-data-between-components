import React from "react";
import { useState } from "react";
import Child from "./Child";
import AgGridExample from "./AgGridExample";
import Details from "./Details";

export default function ParentGrid() {
  const [data, setData] = useState("");

  const childToParentHandler = (childData: any) => {
    console.log(childData);
    setData(childData);
  };

  return (
    <div className="App">
      {data}
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
