import { Endpoints } from "./Components/Endpoints";
import { Options } from "./Components/Options";
import { Results } from "./Components/Results";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Endpoints>
				<Options>
					<Results/>
				</Options>
			</Endpoints>
		</div>
	);
}

export default App;
