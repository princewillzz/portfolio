import { FC } from "react";
import "./App.css";
import { AppColors } from "./assets/AppColors";
import ContactMe from "./components/ContactMe";
import { Experience } from "./components/experience/Experience";
import Navbar from "./components/Navbar";
import { Projects } from "./components/projects/Projects";
import { SkillsContainer } from "./components/skills/SkillsContainer";
import TopAbout from "./components/TopAbout";
import WaveBorder from "./components/WaveBorder";

const App:FC = () => {
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

			<Experience sectionBackgroundColor={AppColors.darkBlue} />
			<WaveBorder
				upColor={AppColors.darkBlue}
				bottomColor={AppColors.backgroundBlack}
			/>

			<Projects sectionBackgroundColor={AppColors.backgroundBlack} />
			<WaveBorder
				upColor={AppColors.backgroundBlack}
				bottomColor={AppColors.grey}
			/>

			<ContactMe sectionBackgroundColor={AppColors.grey} />
		</div>
	);
}

export default App;
