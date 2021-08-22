import React from "react";
import { AppColors } from "../assets/AppColors";

import profileImg from "../assets/images/profile1.jpg";

import "../assets/css/TopAbout.css";

export default function TopAbout() {
	return (
		<>
			<section
				style={{
					backgroundColor: AppColors.backgroundBlue,
				}}
				className="top-about-container"
				id="About"
			>
				<div className="container">
					<div className="subHeading">
						<div className="section__headline"></div>
						<div className="section__headline"></div>
						<div className="section__headline"></div>
						<h3>About</h3>
					</div>
					<div className="decription-container">
						<h1>Hi, I'm Harsh Tiwari</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ab, quod illo laudantium quasi autem eaque
							nemo voluptatem molestias maxime suscipit eligendi
							id ullam molestiae expedita sapiente fugiat tenetur,
							nihil dolorem, consequatur iure ut beatae vitae!
							Consequuntur, officia ex at maxime laboriosam
							nostrum sequi iste? Velit beatae numquam ducimus
							nihil neque.
						</p>
					</div>
					<div className="profile-picture-container">
						<div className="profile">
							<img src={profileImg} alt="portfolio-profile" />
						</div>
					</div>
				</div>
			</section>

			<div
				className="container1"
				style={{
					backgroundColor: AppColors.darkBlue,
				}}
			>
				<svg
					// className={"waveSVG"}
					viewBox="0 70 500 60"
					preserveAspectRatio="xMinYMin meet"
				>
					<path
						d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
						style={{
							stroke: "none",
							fill: AppColors.backgroundBlue,
						}}
					></path>
				</svg>
			</div>
		</>
	);
}
