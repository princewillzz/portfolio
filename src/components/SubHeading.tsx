import React from 'react'

interface SubHeadingProp {
    heading: string
}

export const SubHeading = ({ heading }: SubHeadingProp) => {
    return (
        <div className="subHeading-container">
            <div className="subHeading">
                <div className="section__headline"></div>
                <div className="section__headline"></div>
                <div className="section__headline"></div>
                <h3>{heading}</h3>
            </div>
        </div>
    )
}
