import { Typography } from 'antd';
import React from "react";
import styled from 'styled-components';
import { AppColors } from "../assets/AppColors";
import { SubHeading } from "./SubHeading";

export default function ContactMe({ sectionBackgroundColor }: any) {
	return (
		<>
			<section
				style={{ backgroundColor: sectionBackgroundColor, paddingTop: '2rem' }}
				id="ContactMe"
			>
				<SubHeading heading={"Get In Touch"} maxWidth={'900px'}/>
				
				<ContactMeWrapper>
					<section>
						<SubContentHeadingTypographyContainer textcolor={AppColors.white}>
							Drop me a line to say hello or talk about
							opportunities
						</SubContentHeadingTypographyContainer>
						<ContactMeContainer>
							<HelloBtnWrapper>
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
							</HelloBtnWrapper>
						</ContactMeContainer>
					</section>
				</ContactMeWrapper>

				{/* <div className="contact-me-content">
					<div className="contact-container">
						<h1 className="heading">
							Drop me a line to say hello or talk about
							opportunities
						</h1>
						
						<HelloBtnWrapper>
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
						</HelloBtnWrapper>

					</div>
				</div> */}

				{/* <Footer /> */}
			</section>
		</>
	);
}

const ContactMeWrapper = styled.section`
	margin-top: 2rem;
	width: 85vw;
	margin-inline: auto;

	max-width: min(100%, 900px);

	padding-bottom: 2rem;



`;

const SubContentHeadingTypographyContainer = styled(Typography)<any>`
    font-size: 24px;
    color: ${props => props.textcolor};
    text-align: center;
    margin-bottom: 1rem;
`;

const ContactMeContainer = styled.div`
	text-align: center;
	padding-top: 1rem;
`;

const HelloBtnWrapper = styled.div`

	margin-bottom: 1rem;

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
		color: rgb(255, 255, 255);
		text-transform: uppercase;
		padding: 1.25em 2em;
		background: #494979;
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
		background: #cfd9f0;
		border-radius: inherit;
		transform: translate3d(0, 0.75em, -1em);
		transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
			box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
	}
	button.say-hello-btn:hover {
		transform: translate(0, 0.25em);
	}
	button.say-hello-btn:hover::before {
		transform: translate3d(0, 0.5em, -1em);
	}
	button.say-hello-btn:active {
		transform: translate(0em, 0.75em);
	}
	button.say-hello-btn:active::before {
		box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
		transform: translate3d(0, 0, -1em);
	}

`;