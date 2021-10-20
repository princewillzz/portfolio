import React from 'react'
import styled from 'styled-components'
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
            <SubHeading heading={"My Projects"} maxWidth={'900px'}/>
            
            <ProjectListContainer>
                <Project />
                <Project isInverted={true} />
            </ProjectListContainer>

        </section>
    )
}

const ProjectListContainer = styled.section<ProjectListContainerProps>`
    margin-top: 2rem;
    width: 85vw;
    margin-inline: auto;

    max-width: 900px;

`;
