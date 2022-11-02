import { IClass } from "./IClass";

export function useFetchData() {
  return fetch("https://www.ag-grid.com/example-assets/row-data.json").then(
    (result) => result.json()
  );
}
