import { createContext, useState } from "react";
import endpointData from "../endpoint.json";
import "../app.css";

export const EndContext = createContext();

export function Endpoints({children}) {
	const [selectedEndpoint, setSelectedEndpoint] = useState();
	const [selectedType, setSelectedType] = useState();
	const [selectedMethod, setSelectedMethod] = useState();
	
	return (
		<>
			<div className="endpoints">
				{endpointData.map((item) => (
					<a
						key={item.title}
						onClick={() => {
							setSelectedEndpoint(item.endpoint);
							setSelectedType(item.type);
							setSelectedMethod(item.method);
						}}
						className="method"
						href="#"
					>
						<p className="name">{item.title}</p>
						<p className={`${item.method.toLowerCase()}`}>{item.method}</p>
					</a>
				))}
			</div>
			<EndContext.Provider value={{ selectedEndpoint, selectedType, selectedMethod }}>
				{children}
			</EndContext.Provider>
		</>
	);
}
