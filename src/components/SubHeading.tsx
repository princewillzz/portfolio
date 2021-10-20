import React from 'react'
import styled from 'styled-components'
import { AppColors } from '../assets/AppColors';

interface SubHeadingProp {
    heading: string,
    maxWidth?: string
}

export const SubHeading = ({ heading, maxWidth }: SubHeadingProp) => {
    return (
        <SubHeadingContainer textColor={AppColors.subHeadingColor} maxWidth={maxWidth} className="subHeading-container">
            <div className="subHeading">
                <div className="section__headline"></div>
                <div className="section__headline"></div>
                <div className="section__headline"></div>
                <h3>{heading}</h3>
            </div>
        </SubHeadingContainer>
    )
}

interface ContainerProps {
    textColor: string,
    maxWidth?: string
}

const SubHeadingContainer = styled.div<ContainerProps>`


    display: flex;
    
    width: 80vw;
    margin-inline: auto;
    max-width: ${props => props.maxWidth || 'auto'};

    .subHeading {
        display: flex;
    }
    .subHeading h3 {
        color: ${props => props.textColor};
        font-size: 16px;
        font-family: "Courier New", Courier, monospace;
        text-transform: uppercase;
        font-weight: 600;
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .section__headline {
        align-self: center;

        /* display: block; */
        height: 2px;
        background-color: ${props => props.textColor};
    }
    .section__headline:nth-child(1) {
        width: 15px;
        margin: 6px;
    }
    .section__headline:nth-child(2) {
        width: 9px;
        margin-right: 6px;
    }
    .section__headline:nth-child(3) {
        width: 5em;
        margin-right: 1rem;
    }

    /* End of subheading for each section */

`;