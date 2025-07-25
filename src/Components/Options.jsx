import { useContext } from "react";
import { EndContext } from "./Endpoints";


export function Options() {

  const {selectedEndpoint} = useContext(EndContext)

  return (
    <div className="options">
      <h1>{selectedEndpoint || "selecciona tu endpoint"}</h1>
    </div>
  );
}