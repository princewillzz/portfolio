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
							I am a passionate Software Engineer with expertise in building scalable backend systems, designing data pipelines, and working with cloud platforms like GCP and AWS. I have experience across multiple roles, including developing interval-based crawlers, architecting secure data acquisition systems, and streamlining CI/CD pipelines. 
							<br />With hands-on experience at companies like CommerceIQ, Toplyne, and Rocketium, I specialize in Java, Python, Node.js, and TypeScript. I thrive in problem-solving, improving system efficiency, and creating solutions that drive business impact.
							<br />Feel free to explore my projects, experience, and skills showcased here!
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
