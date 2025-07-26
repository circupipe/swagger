import { createContext, useContext, useState, useEffect } from "react";
import { EndContext } from "./Endpoints";
import axios from "axios";

export const OptContext = createContext();

export function Options({ children }) {
  const { selectedEndpoint, selectedType, selectedMethod } = useContext(EndContext);
  const [category, setCategory] = useState("cpu");
  const [res, setRes] = useState();
  
  const categories = [
    { key: "cpu", label: "Cpu" },
    { key: "motherboard", label: "Mother" },
    { key: "ram", label: "Ram" },
    { key: "graphics_card", label: "Gpu" },
    { key: "disk", label: "Disco" },
    { key: "power_supply", label: "Fuente" },
    { key: "case_pc", label: "Gabinete" },
  ];

  async function GetProducts() {
    try {
      const response = await axios.get(`${selectedEndpoint}/${category}`);
      console.log("Data recibida:", response.data);
      setRes(response.data);
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  }

  useEffect(() => {
    if (res) {
      console.log("la response ", res);
    }
  }, [res]);

  return (
    <>
      <div className="options">
        <h1>{selectedEndpoint || "Selecciona tu endpoint"}</h1>
        {selectedType === "Productos" &&
          categories.map(({ key, label }) => (
            <button key={key} onClick={() => setCategory(key)}>
              {label}
            </button>
          ))}
        <button onClick={GetProducts}>{selectedMethod}</button>
      </div>

      <OptContext.Provider value={{ res }}>
        {children}
      </OptContext.Provider>
    </>
  );
}
