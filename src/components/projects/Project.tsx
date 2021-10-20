import { ContainerOutlined, GithubFilled, LinkOutlined, RightOutlined } from '@ant-design/icons'
import { Card, Carousel, Image, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppColors } from '../../assets/AppColors'

interface ProjectProps {
    isInverted?: boolean,
    projectData: ProjectDataProps 
}

interface ProjectDataProps {
    name: string,
    tools: string[],
    descriptionPoints: string[],
    githubLink?: string,
    hostedLink?: string,
    documentationLink?: string
}


export const Project = ({ isInverted, projectData }: ProjectProps) => {
    

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadingTimeOut = setTimeout(() => {
            setIsLoading(false)
        }, 2000);

        return () => {
            clearTimeout(loadingTimeOut);
        }
    }, [])

    return (
        <CustomProjectCard 
            loading={isLoading}
            bordered={false}
            isInverted={isInverted}
        
        >
            <section >

                <div className="card-project-content">
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
                    <ProjectNameTypographyContainer
                        textColor={AppColors.activeTextColor}
                        className="projectName"
                    >
                        {projectData.name}
                    </ProjectNameTypographyContainer>

                    <ProjectDescriptionCard
                        bordered={false}
                    >
                        <ul>
                            {
                                projectData
                                .descriptionPoints
                                ?.map((_description, _index) => (
                                    <li key={_index}>
                                        <RightOutlined style={{ alignSelf: "baseline", color: AppColors.activeTextColor }} />
                                        <Typography style={{ color: "#d4d6db" }}>
                                            {_description}
                                        </Typography>
                                    </li>
                                ))
                            }
                        </ul>
                    </ProjectDescriptionCard>

                    <ul className="project-tool-used">
                        {
                            projectData.tools?.map((_tool, _index) => (
                                <li key={_index} className="project-tool-used-item">
                                    {_tool}
                                </li>
                            ))
                        }
                    </ul>
                    
                    <ul style={{ listStyle: 'none', display: "flex", gap: '1.2rem', padding: 0 }}>
                        {
                            projectData?.githubLink && (
                            <li>
                                <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer">
                                    <GithubFilled style={{ fontSize: 24, color: AppColors.lightWhite }} />
                                </a>
                            </li>
                            )
                        }
                        {
                            projectData?.hostedLink && (
                            <li>
                                <a href={projectData.hostedLink} target="_blank" rel="noopener noreferrer">
                                    <LinkOutlined style={{ fontSize: 24, color: AppColors.lightWhite }} />
                                </a>
                            </li>
                            )
                        }
                        {
                            projectData?.documentationLink && (
                            <li>
                                <a href={projectData.documentationLink} target="_blank" rel="noopener noreferrer">
                                    <ContainerOutlined style={{ fontSize: 24, color: AppColors.lightWhite }} />
                                </a>
                            </li>
                            )
                        }
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

    .card-project-content * {
        z-index: 1;
    }
    .card-project-content {
        z-index: 8;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.2rem;
    }

    .project-img-carasoul-container {
        position: absolute;
        max-width: 100%;
        z-index: 0;
    }
    .project-img-carasoul-container img {
        border-radius: 5px;
    }

    .projectName {
        font-size: 26px;
        font-weight: 500;

    }
    
    .card-project-content .project-tool-used {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    
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
            left:  ${props => props.isInverted? 'auto': '10px'};
        }

        .card-project-content {

            align-items: ${props => props.isInverted? 'flex-start': 'flex-end'};

            // right: ${props => props.isInverted? 'auto': '10px'};
            // left: ${props => props.isInverted? '0px': 'auto'};
        }       
            
    }
    
    @media only screen and (max-width: 750px) {
        .card-project-content {
            align-items: flex-start;
    
            left: 0px;
            
        }
        .project-img-carasoul-container {
            padding-left: 1.2rem;
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
    max-width: min(100%, 550px);

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