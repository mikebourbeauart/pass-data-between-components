import React from "react";
import { Button } from "semantic-ui-react";
import Child from "./child";
import { useState } from "react";

export default function Parent() {
  const [data, setData] = useState("");

  const parentToChildHandler = () => {
    setData("This is data from Parent Component to the Child Component.");
  };

  return (
    <div>
      <Child parentToChild={data} />
      <div>
        <Button primary onClick={parentToChildHandler}>
          Click Parent
        </Button>
      </div>
    </div>
  );
}
