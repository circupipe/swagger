import { useContext } from "react";
import { OptContext } from "./Options";

export function Results() {
  const { res } = useContext(OptContext);

  return (
    <div className="results">
      {res?.length > 0 ? ( 
          <pre>{res}</pre>
      ) : (
        <p>No hay resultados para mostrar.</p>
      )}
    </div>
  );
}
