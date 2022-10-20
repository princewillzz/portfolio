import React from "react";
import profileImg from "../assets/images/p1.jpeg";
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
				<div 
					data-aos="fade-up"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"

					className="about-content-container"
				>
					 
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
					
				</div>
			</section>
		</>
	);
}
