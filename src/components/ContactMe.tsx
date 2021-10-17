import React from "react";
import styled from 'styled-components';
import { SubHeading } from "./SubHeading";

export default function ContactMe({ sectionBackgroundColor }: any) {
	return (
		<>
			<ContactMeContainer
				style={{
					backgroundColor: sectionBackgroundColor,
				}}
				id="ContactMe"
			>
				<SubHeading heading={"Get In Touch"} />
				<div className="contact-me-content">
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
								target="_blank"
								rel="noreferrer"
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
										<i className="fab fa-linkedin-in"></i>
									</a>
								</span>
							</li>
							<li className="footer-nav-link">
								<span>
									<a href="mailto:harshtiwariai@gmail.com">
										<i className="fas fa-envelope"></i>
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
										<i className="fab fa-github"></i>
									</a>
								</span>
							</li>
						</ul>
					</section>
				</footer>
			</ContactMeContainer>
		</>
	);
}

const ContactMeContainer = styled.section`
	
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 60vh;
	padding-top: 8vh;

	.contact-me-content {

		position: relative;
		display: flex;
		place-items: center;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 80%;
		margin-inline: auto;
	}
	.contact-container {
		display: flex;
		flex-direction: column;

		/* background-color: #b18597; */

		color: #ffff;
		text-align: center;
		font-family: "Rubik", sans-serif;
	}
	.contact-container .heading {
		color: #fff;

		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	.hello-btn-container {
		margin-bottom: 1rem;
	}

	button {
		position: relative;
		display: inline-block;
		cursor: pointer;
		outline: none;
		border: 0;
		vertical-align: middle;
		text-decoration: none;
		font-size: inherit;
		font-family: inherit;
	}
	button.say-hello-btn {
		font-weight: 600;
		/* color: #382b22; */
		color: rgb(255, 255, 255);
		text-transform: uppercase;
		padding: 1.25em 2em;
		/* background: #fff0f0; */
		background: #494979;
		/* border: 2px solid #b18597; */
		border: 2px solid #494979;
		border-radius: 0.75em;
		transform-style: preserve-3d;
		transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
			background 150ms cubic-bezier(0, 0, 0.58, 1);
	}
	button.say-hello-btn::before {
		position: absolute;
		content: "";
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/* background: #f9c4d2; */
		background: #cfd9f0;
		border-radius: inherit;
		/* box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2; */
		transform: translate3d(0, 0.75em, -1em);
		transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
			box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
	}
	button.say-hello-btn:hover {
		/* background: #ffe9e9; */
		transform: translate(0, 0.25em);
	}
	button.say-hello-btn:hover::before {
		/* box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2; */
		transform: translate3d(0, 0.5em, -1em);
	}
	button.say-hello-btn:active {
		/* background: #ffe9e9; */
		transform: translate(0em, 0.75em);
	}
	button.say-hello-btn:active::before {
		box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
		transform: translate3d(0, 0, -1em);
	}

	/* Footer */
	.footer-container {
		/* position: fixed;
		bottom: 0;
		width: 100%;
		height: 60px; */
		/* position: absolute; */
		background: #272727;
		height: 5rem;
		/* margin-top: -200px; */
		/* position: relative; */
	}

	.footer-container section {
		text-align: center;
		/* margin-inline: auto; */
		/* width: 500px; */
		/* background-color: #ffe3e2; */
		/* display: flex;
		justify-content: center; */
	}

	.footer-nav-links {
		margin-top: 2rem;
		display: flex;
		gap: 2rem;
		list-style: none;
		justify-content: center;
	}

	.footer-nav-link span i {
		font-size: 20px;
		color: #999999;
	}

`;