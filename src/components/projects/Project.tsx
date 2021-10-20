import { GithubFilled, LinkOutlined, RightOutlined } from '@ant-design/icons'
import { Card, Carousel, Image, Typography } from 'antd'
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
            isInverted={isInverted}
        >
            <section>
                <div className="project-img-carasoul-container">
                    {/* <img style={{ height: 300, width: 400 }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> */}
                    <CustomProjectImgCarousel
                        autoplay                
                        // style={{ width: 400, maxHeight: 300 }}
                        effect="fade"
                    >
                        <div>
                            <Image
                                style={{ maxHeight: 300 }} 
                                width={'100%'} 
                                preview={false} 
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
                            /> 
                        </div>
                        <div>
                            <Image
                                style={{ maxHeight: 300 }} 
                                width={'100%'} 
                                preview={false} 
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
                            /> 
                        </div>
                    </CustomProjectImgCarousel>
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
                        <ul>
                            <li>
                                <RightOutlined style={{ alignSelf: "baseline", color: AppColors.activeTextColor }} />
                                <Typography style={{ color: "#d4d6db" }}>
                                    Hiil;ad;l ads;sa;dlk; alsdk;asdk; kda;akds;
                                    lsajdsaldjs alk dsadsadsa djsalkjdlkj
                                    lsajdsa ldjsalk dsadsadsadjsalkjdlkj
                                    lsajdsaldj salkdsa dsadsadjsalkjdlkj
                                </Typography>
                            </li>
                            <li>
                                <RightOutlined style={{ alignSelf: "baseline", color: AppColors.activeTextColor }} />
                                <Typography style={{ color: "#d4d6db" }}>
                                    Hiil;ad; lads;sa;dlk;a lsdk;asdk;kda;akds;
                                    lsaj dsaldjsal kdsadsadsadj salkjdlkj
                                    <span>lsajdsald jsalkdsadsadsadjsalkjdlkj</span>
                                </Typography>
                            </li>
                        </ul>
                    </ProjectDescriptionCard>

                    <ul className="project-tool-used">
                        <li className="project-tool-used-item">
                            Flask
                        </li>
                        <li className="project-tool-used-item">Flask</li>
                        <li className="project-tool-used-item">Flask</li>
                    </ul>
                    
                    <ul style={{ listStyle: 'none', display: "flex", gap: '1.2rem', padding: 0 }}>
                        <li>
                            <GithubFilled style={{ fontSize: 24, color: AppColors.secondaryTextColor }} />
                        </li>
                        <li>
                            <LinkOutlined style={{ fontSize: 24, color: AppColors.secondaryTextColor }} />
                        </li>
                    </ul>

                </div>

            </section>

        </CustomProjectCard>
    )
}


interface CustomProjectCardProps {
    isInverted?: boolean
}

const CustomProjectCard = styled(Card)<CustomProjectCardProps>`
    background: none;

    .card-project-content {
        z-index: 8;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.2rem;
    }

    .project-img-carasoul-container {
        position: absolute;
        max-width: 100%;
    }

    .projectName {
        font-size: 26px;
        font-weight: 500;
    }
    
    .card-project-content .project-tool-used {
        display: flex;
        gap: 1rem;
    
        margin: 0;
        padding: 0;
    
        list-style: none;
    }
    
    .card-project-content .project-tool-used-item {
        color: #d4d6db;
    
        /* background: #393a3d; */
    }
    
    @media only screen and (min-width: 750px) {
        .project-img-carasoul-container {
            right:  ${props => props.isInverted? '10px': 'auto'};
        }

        .card-project-content {
            // align-items: flex-end;
            
            // right: 10px;

            align-items: ${props => props.isInverted? 'flex-start': 'flex-end'};

            right: ${props => props.isInverted? 'auto': '10px'};
            left: ${props => props.isInverted? '0px': 'auto'};
        }       
            
    }
    
    @media only screen and (max-width: 750px) {
        .card-project-content {
            align-items: flex-start;
    
            left: 0px;
            
        }
        .project-img-carasoul-container img {
            background: black;
    
            opacity: 0.34;
        }
    
        .card-project-content .project-tool-used-item {
            color: #ffffff;
        
            /* background: #393a3d; */
        }
        
    }
    
`

const CustomProjectImgCarousel = styled(Carousel)`
    max-height: 300px;
    width: 400px;
    max-width: 95%;

    z-index: 1;
`;

const ProjectNameTypographyContainer = styled(Typography)<any>`
    color: ${props => props.textColor};
`;

const ProjectDescriptionCard = styled(Card)<any>`
    max-width: 550px;

    // @media only screen and (min-width: 750px) {
        background: #393a3d;
        box-shadow: 0 7px 12px rgb(0 0 0 / 0.45);
    // }

    @media only screen and (max-width: 750px) {
        // background: none;
    }


    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    ul li {
        display: flex;
        align-items: center;
    }

    ul li > span {
        line-height: 2;
        margin-right: 10px;
    }

`;