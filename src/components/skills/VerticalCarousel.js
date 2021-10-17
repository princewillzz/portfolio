import React from 'react'

export const VerticalCarousel = ({ imgData }) => {
    // console.log(imgData);
    return (
        <div className="skill">
            <img src={imgData.img} alt={imgData.alt} width="55" height="55"/>
        </div>
    )
}
