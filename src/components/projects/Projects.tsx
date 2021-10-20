import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProjectListContainerProps } from '../interface/ProjectListContainerProps'
import { ProjectsProps } from '../interface/ProjectsProps'
import { SubHeading } from '../SubHeading'
import { Project } from './Project'
import { projectsRawData } from './project-data'

interface ProjectsResponseData {
    featured: FeatureProjectResponse[]
}
interface FeatureProjectResponse {
    name: string,
    tools: string[],
    descriptionPoints: string[],
    githubLink?: string,
    hostedLink?: string,
    documentationLink?: string,
    images?: string[]
}


export const Projects = ({ sectionBackgroundColor }: ProjectsProps) => {
    const [projectsResponse, setProjectsResponse] = useState<ProjectsResponseData|null>();

    useEffect(() => {
        setProjectsResponse(projectsRawData)

        return () => {
            setProjectsResponse(null);
        }
    }, [])

    return (
        <section
            id="Projects"
            style={{ backgroundColor: sectionBackgroundColor }}
        >
            <SubHeading heading={"My Projects"} maxWidth={'900px'}/>
            
            <ProjectListContainer>
                {
                    projectsResponse
                    ?.featured
                    ?.map((_featuredProjectData, _index) => (
                        <Project
                            key={_index}
                            projectData={_featuredProjectData}
                            isInverted={ _index % 2? true: false } 
                        />
                    ))
                }
            </ProjectListContainer>

        </section>
    )
}

const ProjectListContainer = styled.section<ProjectListContainerProps>`
    margin-top: 2rem;
    width: 85vw;
    margin-inline: auto;

    max-width: min(100%, 900px);

`;
