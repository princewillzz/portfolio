import { FC } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ProvideProfileData } from "./providers/profile-data-provider/ProvideProfileData";

const App:FC = () => {

	return (
		<ProvideProfileData>
			<div
				className="App"
			>
				<HomePage />
			</div>
		</ProvideProfileData>
	);
}

export default App;
