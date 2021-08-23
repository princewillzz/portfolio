import "./App.css";
import { AppColors } from "./assets/AppColors";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import TopAbout from "./components/TopAbout";
import WaveBorder from "./components/WaveBorder";

function App() {
	return (
		<div
			style={{
				backgroundColor: AppColors.tempColor,
			}}
			className="App"
		>
			<Navbar />
			<TopAbout sectionBackgroundColor={AppColors.backgroundBlue} />
			<WaveBorder
				upColor={AppColors.backgroundBlue}
				bottomColor={AppColors.grey}
			/>
			<ContactMe sectionBackgroundColor={AppColors.grey} />
		</div>
	);
}

export default App;
