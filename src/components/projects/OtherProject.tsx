import { FolderOpenOutlined, GithubOutlined, LinkOutlined } from '@ant-design/icons'
import { Card, message, Typography } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { AppColors } from '../../assets/AppColors'
import { OtherProjectDataProps } from '../interface/OtherProjectsProps'

interface ProjectProps {
    projectData: OtherProjectDataProps
}

export const OtherProject = ({ projectData }: ProjectProps) => {

    const [projectNameColor, setProjectNameColor] = useState<string>(AppColors.white);

    const openLinkInTab = (URI: string|null|undefined) => {
        if(URI)
            window?.open(URI, '_blank')?.focus();
        else 
            message.warn("Sorry link not working!!");
    }

    return (
        <OtherProjectContainer
            bordered={false}
            onClick={() => openLinkInTab(projectData.hostedLink || projectData.githubLink)}
            onMouseOver={() => setProjectNameColor(AppColors.activeTextColor)}
            onMouseOut={() => setProjectNameColor(AppColors.white)}

            data-aos={"zoom-in"}
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
        >
            <OtherProjectHeadingContainer>
                <FolderOpenOutlined  style={{ fontSize: 30, color: AppColors.activeTextColor }}/>

                <span className="links">
                    {
                        projectData.githubLink 
                        && 
                        <GithubOutlined 
                            onClick={() => openLinkInTab(projectData.githubLink)}
                            style={{ fontSize: 26, color: AppColors.activeTextColor }}
                        />                   
                    }
                    {
                        projectData.hostedLink 
                        && 
                        <LinkOutlined 
                            onClick={() => openLinkInTab(projectData.hostedLink)}
                            style={{ fontSize: 26, color: AppColors.activeTextColor }}
                        />                   
                    }
                </span>
            </OtherProjectHeadingContainer>

            <CustomOtherProjectHeading textcolor={projectNameColor}>
                {projectData.name}
            </CustomOtherProjectHeading>

            <DescriptionContainer>
                {
                    projectData
                    .descriptionPoints
                    ?.map((_description, _index) => (
                        <li key={_index}>
                            {/* <CaretRightFilled style={{ alignSelf: "baseline", color: AppColors.activeTextColor }} /> */}
                            <Typography style={{ color: "#d4d6db" }}>
                                {_description}
                            </Typography>
                        </li>
                    ))
                }
            </DescriptionContainer>
            

            <ToolsTechContainer>
                <ul>
                    {
                        projectData
                        .tools
                        ?.map((_tool, _index) => (
                            <li key={_index}>
                                <Typography style={{ color: AppColors.white }}>
                                    {_tool}
                                </Typography>
                            </li>
                        ))
                    }
                </ul>
            </ToolsTechContainer>
        </OtherProjectContainer>
    )
}

const OtherProjectContainer = styled(Card)`


    margin: 0.5rem;

    padding-bottom: 2rem;

    cursor: pointer;

    background: #393a3d;
    box-shadow: 0 7px 12px rgb(0 0 0 / 45%);


    transition: all 350ms;
    &:hover{
        transform: translateY(-10px);
    }

    article::-moz-selection { /* Code for Firefox */
        color: hotpink;
        background: none;
    }
    
    article::selection {
        color: hotpink;
        background: none;
    }

`;

const OtherProjectHeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.3rem;

    .links {
        display: flex;
        gap: 0.5rem;
    }
`;


interface CustomOtherProjectHeadingProps {
    textcolor?: string
    highlightcolor?: string
}

const CustomOtherProjectHeading = styled(Typography)<CustomOtherProjectHeadingProps>`
    font-size: 22px;
    font-weight: 600;
    
    transition: all 450ms;

    color: ${props => props.textcolor};

`;


const DescriptionContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 6px;

    li {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

    li > span {
        line-height: 2;
        margin-right: 8px;
    }

`;


const ToolsTechContainer = styled.section`
    position: absolute;
    bottom: 1rem;
    width: 85%;

    color: white;

    ul {
        

        list-style: none;
        padding: 0;
        margin: 0;

        display: flex;
        flex-wrap: wrap;
    }

    li {
        margin-left: 10px;
    }
`;