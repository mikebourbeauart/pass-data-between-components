import { useEffect, useMemo, useState } from "react";

export default function Details({ selection }: any) {
  const [selectionData, setSelectionData] = useState("None");

  //   useEffect(() => {
  //     if (selection !== "None") {
  //       fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //         .then((result) => result.json())
  //         .then((rowData) => {
  //           const sel = rowData[selection].make;
  //           console.log(sel);
  //           setSelectionData(sel);
  //         });
  //       //   .then((selData) => console.log("detailData", selData));
  //     }
  //   }, [selection]);

  return (
    <div>
      <h1>{selection}</h1>
    </div>
  );
}
