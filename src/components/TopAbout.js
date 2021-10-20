import React from "react";
import profileImg from "../assets/images/profile1.jpg";
import { SubHeading } from "./SubHeading";

export default function TopAbout({ sectionBackgroundColor }) {
	return (
		<>
			<section
				style={{
					backgroundColor: sectionBackgroundColor,
				}}
				className="top-about-container"
				id="About"
			>
				<SubHeading heading={"About"} maxWidth={'1050px'} />
				<div className="about-content-container">
{/* 
					<div className="subHeading about-subHeading">
						<div className="section__headline"></div>
						<div className="section__headline"></div>
						<div className="section__headline"></div>
						<h3>About</h3>
					</div> */}
					
					 
					<div className="decription-container">
						<h1>Hi, I'm Harsh Tiwari</h1>
						<p>
						I am enthusiastic and hardworking and always in urge for growing my skills and trying to be an asset to the team and to the organisation. I am willing to take up interesting and challenging work and looking forward to learn from the team and organisation.
						</p>
					</div>
					<div className="profile-picture-container">
						<div className="profile">
							<img src={profileImg} alt="portfolio-profile" />
						</div>
					</div>
					
					{/* <div className="subHeading tools-tech-subHeading">
						<div className="section__headline"></div>
						<div className="section__headline"></div>
						<div className="section__headline"></div>
						<h3>Tools And Technologies</h3>
					</div>

						
					<div className="skills-container">
						<SkillsContainer />
					</div> */}
				</div>
			</section>
		</>
	);
}
