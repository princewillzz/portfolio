import { Avatar, Card, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import styled from 'styled-components'
import { AppColors } from '../../assets/AppColors'
import { ProjectListContainerProps } from '../interface/ProjectListContainerProps'
import { ProjectsProps } from '../interface/ProjectsProps'
import { SubHeading } from '../SubHeading'
import { Project } from './Project'



export const Projects = ({ sectionBackgroundColor }: ProjectsProps) => {
    return (
        <section
            id="Projects"
            style={{ backgroundColor: sectionBackgroundColor }}
        >
            <SubHeading heading={"My Projects"} />
            
            <ProjectListContainer>
                <Project />
            </ProjectListContainer>

        </section>
    )
}

const ProjectListContainer = styled.section<ProjectListContainerProps>`
    margin-top: 2rem;
    width: 85vw;
    margin-inline: auto;

`;
