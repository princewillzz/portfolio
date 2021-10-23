import { ContainerOutlined, GithubFilled, LinkOutlined, RightOutlined } from '@ant-design/icons'
import { Card, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppColors } from '../../assets/AppColors'
import { FeatureProjectProps } from '../interface/FeaturedProjectsProps'
import { CustomProjectImageCarasoul } from '../project-img-carasoul/CustomProjectImageCarasoul'

interface ProjectProps {
    isInverted?: boolean,
    projectData: FeatureProjectProps 
}

export const FeaturedProject = ({ isInverted, projectData }: ProjectProps) => {
    

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
            isinverted={isInverted? 'true': 'false'}

            data-aos={"fade-up"}
            data-aos-delay="60"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
        >
            <section >

                <div className="card-project-content">
                    <CustomProjectImageCarasoul 
                        isInverted={isInverted}
                        images={projectData.images} 
                    />
                    

                    <a href={projectData?.hostedLink || projectData?.githubLink} target="_blank" rel="noopener noreferrer">
                        <ProjectNameTypographyContainer
                            textcolor={AppColors.activeTextColor}
                        >
                                {projectData.name}
                        </ProjectNameTypographyContainer>
                    </a>


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
                                    <Typography style={{ color: "#d4d6db" }}>
                                        {_tool}
                                    </Typography>
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
    isinverted?: string
}

const CustomProjectCard = styled(Card)<CustomProjectCardProps>`
    background: none;
    min-height: 350px;

    &:hover{
        transition: all 0.6s ease;
        background: #0a0a0a73;
        box-shadow: 0 7px 12px rgb(0 0 0 / 0.45);
    }

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

    
    .card-project-content .project-tool-used {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    
        margin: 0;
        padding: 0;

    
        list-style: none;
    }
    
    
    @media only screen and (min-width: 750px) {
       
        .card-project-content {

            align-items: ${props => props.isinverted === 'true'? 'flex-start': 'flex-end'};
        }       
            
    }
    
    @media only screen and (max-width: 750px) {
        .card-project-content {
            align-items: flex-start;
    
            left: 0px;
            
        }
    
        .card-project-content .project-tool-used-item {
            color: #ffffff;
        
            /* background: #393a3d; */
        }
        
    }
    
`

interface ProjectNameTypographyContainerProps {
    textcolor: string
}

const ProjectNameTypographyContainer = styled(Typography)<ProjectNameTypographyContainerProps>`
    color: ${props => props.textcolor};
    font-size: 26px;
    font-weight: 500;
    cursor: pointer;
    position: relative;

    &:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    &:hover:after { 
        width: 100%; 
        left: 0; 
    }
`;

const ProjectDescriptionCard = styled(Card)<any>`
    max-width: min(100%, 550px);

        background: #393a3d;
        box-shadow: 0 7px 12px rgb(0 0 0 / 0.45);

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