import React from "react";
import "../assets/css/ContactMe.css";

export default function ContactMe({ sectionBackgroundColor }) {
	return (
		<>
			<section
				style={{
					backgroundColor: sectionBackgroundColor,
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

				<footer className="footer-container">
					<section>
						<ul className="footer-nav-links">
							<li className="footer-nav-link">
								<span>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/in/harsh2212/"
									>
										<i class="fab fa-linkedin-in"></i>
									</a>
								</span>
							</li>
							<li className="footer-nav-link">
								<span>
									<a href="mailto:harshtiwariai@gmail.com">
										<i class="fas fa-envelope"></i>
									</a>
								</span>
							</li>
							<li className="footer-nav-link">
								<span>
									<a
										href="https://github.com/princewillzz"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i class="fab fa-github"></i>
									</a>
								</span>
							</li>
						</ul>
					</section>
				</footer>
			</section>
		</>
	);
}
