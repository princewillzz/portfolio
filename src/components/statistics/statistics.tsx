import { Card, Typography } from 'antd';
import React from "react";
import styled from 'styled-components';
import { AppColors } from "../../assets/AppColors";
import { SubHeading } from "../SubHeading";

export default function Statistics({ sectionBackgroundColor }: any) {
	return (
		<>
			<section
				style={{ backgroundColor: sectionBackgroundColor }}
				id="Statistics"
			>
				<SubHeading heading={"Some Statistics"} maxWidth={'900px'}/>
				
				<StatisticsWrapper>
					<section>
						<SubContentHeadingTypographyContainer textcolor={AppColors.activeTextColor}>
							Github Stats
						</SubContentHeadingTypographyContainer>
						<div className="stats-container">
						
							<Card
								data-aos={"zoom-in"}
								data-aos-delay="50"
								data-aos-duration="1000"
								data-aos-easing="ease-in-out"
								data-aos-once="false"
							>
								<img style={{height: '100%', width: '100%' }} src="https://github-readme-stats.vercel.app/api?username=princewillzz&show_icons=true&locale=en" alt="princewillzz" />
							</Card>
							<Card
								data-aos={"zoom-in"}
								data-aos-delay="50"
								data-aos-duration="1000"
								data-aos-easing="ease-in-out"
								data-aos-once="false"
							>
								<img style={{height: '100%', width: '100%' }} src="https://github-readme-streak-stats.herokuapp.com/?user=princewillzz&" alt="princewillzz" />
							</Card>
							<Card 
								data-aos={"zoom-in"}
								data-aos-delay="50"
								data-aos-duration="1000"
								data-aos-easing="ease-in-out"
								data-aos-once="false"							
							>
								<img style={{height: '100%', width: '100%' }} src="https://github-readme-stats.vercel.app/api/top-langs?username=princewillzz&show_icons=true&locale=en&layout=compact" alt="princewillzz" />
							</Card>

						</div>
					</section>
				</StatisticsWrapper>

			</section>
		</>
	);
}

const StatisticsWrapper = styled.section`
	margin-top: 2rem;
	width: 85vw;
	margin-inline: auto;

	max-width: min(100%, 900px);

	padding-bottom: 2rem;


	.stats-container {
		display: grid;

		gap: 0.5rem;
	}

	.stats-container .ant-card-body {
		padding: 0;
	}

	@media only screen and (min-width: 400px) {
		.stats-container {   
			grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		}
	}
	

`;

const SubContentHeadingTypographyContainer = styled(Typography)<any>`
    font-size: 26px;
    color: ${props => props.textcolor};
    text-align: center;
    margin-bottom: 1rem;
`;

