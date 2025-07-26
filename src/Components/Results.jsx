import { useContext } from "react";
import { OptContext } from "./Options";

export function Results() {
  const { res } = useContext(OptContext);

  return (
    <div className="results">
      {res?.data?.length > 0 ? (
        <div>
          {res.data.map((item, index) => (
            <li key={index}>
              {JSON.stringify(item)}
            </li>
          ))}
        </div>
      ) : (
        <p>No hay resultados para mostrar.</p>
      )}
    </div>
  );
}
