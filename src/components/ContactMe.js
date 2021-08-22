import React from "react";
import { AppColors } from "../assets/AppColors";

import "../assets/css/ContactMe.css";

export default function ContactMe() {
	return (
		<>
			<section
				style={{
					backgroundColor: AppColors.darkBlue,
				}}
				className="contact-me-container"
				id="ContactMe"
			>
				<div className="contact-me-content">
					<div className="subHeading">
						<div className="section__headline"></div>
						<div className="section__headline"></div>
						<div className="section__headline"></div>
						<h3>Get In Touch</h3>
					</div>
					<div className="contact-container">
						<h1 className="heading">
							Drop me a line to say hello or talk about
							opportunities
						</h1>
						<div className="hello-btn-container">
							<a
								href="mailto:harshtiwariai@gmail.com"
								style={{
									textDecoration: "none",
									color: "#ffff",
								}}
							>
								<button className={"say-hello-btn"}>
									Say Hello
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
