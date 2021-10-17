import "./App.css";
import { AppColors } from "./assets/AppColors";
import ContactMe from "./components/ContactMe";
import { ExperienceContainer } from "./components/experience/ExperienceContainer";
import Navbar from "./components/Navbar";
import { SkillsContainer } from "./components/skills/SkillsContainer";
import TopAbout from "./components/TopAbout";
import WaveBorder from "./components/WaveBorder";

function App() {
	return (
		<div
			className="App"
		>
			<Navbar sectionBackgroundColor={AppColors.backgroundBlue} />
			<TopAbout sectionBackgroundColor={AppColors.backgroundBlue} />
			{/* <WaveBorder
				upColor={AppColors.backgroundBlue}
				bottomColor={AppColors.darkBlue}
			/> */}
			<SkillsContainer sectionBackgroundColor={AppColors.backgroundBlue} />
			<WaveBorder
				upColor={AppColors.backgroundBlue}
				bottomColor={AppColors.darkBlue}
			/>

			<ExperienceContainer sectionBackgroundColor={AppColors.darkBlue} />
			<WaveBorder
				upColor={AppColors.darkBlue}
				bottomColor={AppColors.backgroundBlack}
			/>

			<SkillsContainer sectionBackgroundColor={AppColors.backgroundBlack} />
			<WaveBorder
				upColor={AppColors.backgroundBlack}
				bottomColor={AppColors.grey}
			/>

			<ContactMe sectionBackgroundColor={AppColors.grey} />
		</div>
	);
}

export default App;
