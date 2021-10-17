
import React from 'react';
import styled from 'styled-components';
import { ExperienceProps } from '../interface/ExperienceProps';
import { SubHeading } from '../SubHeading';


export const Experience: React.FC<ExperienceProps> = ({ sectionBackgroundColor }: ExperienceProps) => {
    return (
        <ExperienceContainer
            id="Experience"
            style={{
                backgroundColor: sectionBackgroundColor
            }}
        >

            <SubHeading heading={"Experience"} />

            

            
        </ExperienceContainer>
    )
}


const ExperienceContainer = styled.section`

`;