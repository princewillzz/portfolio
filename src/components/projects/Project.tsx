import { Card, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { AppColors } from '../../assets/AppColors'

interface ProjectProps {
    isInverted?: boolean
}

export const Project = ({ isInverted }: ProjectProps) => {
    return (
        <CustomProjectCard 
            loading={false}
            style={{ height: 350 }}
            bordered={false}
        >
            <section >
                <div style={{ position: 'absolute', zIndex: 1 }}>
                    <img style={{ height: 300, width: 300, zIndex: 1 }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>

                <div className="card-project-content">

                    <ProjectNameTypographyContainer
                        textColor={AppColors.activeTextColor}
                        className="projectName"
                    >
                        Untangled Chat
                    </ProjectNameTypographyContainer>

                    <ProjectDescriptionCard
                        bordered={false}
                    >
                        <Typography style={{ color: "#d4d6db" }}>
                            Hiil;ad;lads;sa;dlk;alsdk;asdk;kda;akds;
                            lsajdsaldjsalkdsadsadsadjsalkjdlkj
                        </Typography>
                    </ProjectDescriptionCard>

                    <ul className="project-tool-used">
                        <li className="project-tool-used-item">Flask</li>
                        <li className="project-tool-used-item">Flask</li>
                        <li className="project-tool-used-item">Flask</li>
                    </ul>

                </div>

            </section>

        </CustomProjectCard>
    )
}


const CustomProjectCard = styled(Card)`
    background: none;

    .projectName {
        font-size: 26px;
        font-weight: 500;
    }
`

const ProjectNameTypographyContainer = styled(Typography)<any>`
    color: ${props => props.textColor};
`;

const ProjectDescriptionCard = styled(Card)<any>`
    background: #393a3d;
    box-shadow: 0 7px 12px rgb(0 0 0 / 0.45);

`;