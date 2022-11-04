import { useState, useEffect, forwardRef } from "react";

const Details = ({ selection }: any) => {
  const [selectionData, setSelectionData] = useState("None");

  console.log("selection", selection);

  useEffect(() => {
    if (selection !== null) {
      fetch("https://www.ag-grid.com/example-assets/row-data.json")
        .then((result) => result.json())
        .then((rowData) => {
          const sel = rowData[selection].make;
          console.log(sel);
          setSelectionData(sel);
        });
    }
  }, [selection]);

  return (
    <div>
      <h1>{selectionData}</h1>{" "}
    </div>
  );
};

export default Details;
