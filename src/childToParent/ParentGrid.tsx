import React from "react";
import { useState } from "react";
import Child from "./Child";
import AgGridExample from "./AgGridExample";

export default function ParentGrid() {
  const [data, setData] = useState("");

  const childToParentHandler = (childData: any) => {
    setData(childData);
  };

  return (
    <div className="App">
      {data}
      <div>
        <Child childToParent={childToParentHandler} />
        <AgGridExample />
      </div>
    </div>
  );
}
