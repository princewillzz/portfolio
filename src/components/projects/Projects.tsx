import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FeatureProjectProps } from '../interface/FeaturedProjectsProps'
import { OtherProjectDataProps } from '../interface/OtherProjectsProps'
import { ProjectsProps } from '../interface/ProjectsProps'
import { SubHeading } from '../SubHeading'
import { featuredProjectsRawData } from './featured-project-data'
import { FeaturedProject } from './FeaturedProject'
import { otherProjectsRawData } from './other-project-data'
import { OtherProject } from './OtherProject'




export const Projects = ({ sectionBackgroundColor }: ProjectsProps) => {
    const [featureProjects, setFeaturedProjects] = useState<FeatureProjectProps[]>([]);

    const [otherProjects, setOtherProjects] = useState<OtherProjectDataProps[]>([]);

    useEffect(() => {
        setFeaturedProjects(featuredProjectsRawData.featured);

        setOtherProjects(otherProjectsRawData.featured);

        return () => {
            setFeaturedProjects([]);
            setOtherProjects([]);
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
                    featureProjects
                    ?.map((_featuredProjectData, _index) => (
                        <FeaturedProject
                            key={_index}
                            projectData={_featuredProjectData}
                            isInverted={ _index % 2? true: false } 
                        />
                    ))
                }

                <section style={{ marginTop: 50 }}>
                    <OtherProjectLists>
                        {
                            otherProjects
                            ?.map((_otherProject, _index) => (
                                <OtherProject 
                                    projectData={_otherProject} 
                                />
                            ))
                        }
                    </OtherProjectLists>
                </section>
            </ProjectListContainer>

        </section>
    )
}

const OtherProjectLists = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))

`;


const ProjectListContainer = styled.section`
    margin-top: 2rem;
    width: 85vw;
    margin-inline: auto;

    max-width: min(100%, 900px);

    padding-bottom: 2rem;

`;
