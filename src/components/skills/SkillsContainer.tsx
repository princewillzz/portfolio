import React, { useEffect, useState } from 'react';
import { SubHeading } from '../SubHeading';
import { skillImgs } from './skills-img';
import { VerticalCarousel } from './VerticalCarousel';

import styled from 'styled-components';

interface SkillsProps {
    sectionBackgroundColor: string
}

const skillsLayoutChangeScreenSizeConstant: number = 650;

export const SkillsContainer = ({ sectionBackgroundColor }: SkillsProps) => {

    const [toBeRenderedItems, setToBeRenderItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        setToBeRenderItems(_render);
    }, [])

    const _render = (): JSX.Element[] => {

        return skillImgs.map((skills, index) => {
            return <li key={index} className="skills-category" >
                {skills.map((_imgData, _index) => <VerticalCarousel key={_index} imgData={_imgData} />)}
            </li>
        })

    }    

    const isHover = (e:Element) => e?.parentElement?.querySelector(':hover') === e;

    useEffect(() => {
        let scrollInterval: NodeJS.Timer[] = [];

        setTimeout(() => {
            document.querySelectorAll(".skills-category").forEach(_list => {
                let switchAnim = true;
                const _randomTimeForEach = (Math.random()*500 + 300)
                // console.log(_randomTimeForEach);
    
                scrollInterval.push(
                    setInterval(() => {
                    
                        const hovered = isHover(_list);
                        if(!hovered) {

                            if(window.innerWidth > skillsLayoutChangeScreenSizeConstant) {
                                // Scroll height wise
                                if(switchAnim) {
                                    _list.scrollBy({ behavior: 'smooth', top: _list.scrollHeight })
                                }
                                else {
                                    _list.scrollBy({ behavior: 'smooth', top: -_list.scrollTop })
                                }
                            } else {
                                if(switchAnim) {
                                    _list.scrollBy({ behavior: 'smooth', left: _list.scrollWidth })
                                }
                                else {
                                    _list.scrollBy({ behavior: 'smooth', left: -_list.scrollWidth })
                                }
                            }
                                
                            // console.log("w", window.innerWidth)
                            // scroll width wise                           

                            switchAnim = !switchAnim;
                        } 
        
                    }, 900 + _randomTimeForEach)
                )
            })
        }, 50);

        return () => {
            if(scrollInterval) {
                // console.log(scrollInterval);
                scrollInterval.forEach(_interval => clearInterval(_interval))
            }
        }

    }, [])

    
    return (
        <>
            <SkillsContainerStyles
				style={{
					backgroundColor: sectionBackgroundColor
				}}
			>
				<div className="skills-section-content">


                    <SubHeading heading={"Tools And Technologies"} maxWidth={'900px'}/>

					<div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        
                        className="skills-container">
                        <ul className="skills-categories">
                            {toBeRenderedItems}
                        </ul>
					</div>
				</div>
			</SkillsContainerStyles>
        </>
    )
}

const SkillsContainerStyles = styled.section`
    
    .skills-section-content {
        display: flex;
        flex-direction: column;
        
    }


    .skills-container {
        place-self: center;

    }

    .skills-categories {
        display: flex;
        width: 100%;

        
        justify-content: space-between;
        
        width: min(900px, 90vw);
        margin-inline: auto;

        list-style: none;
    }

    .skills-category{
        transition: all 0.3s;

        display: flex;
        /* place-self: center; */

    }


    /* big screens */
    @media only screen and (min-width: 850px) {
        .skills-categories {
            /* gap: 5rem; */
        }
    }
    @media only screen and (max-width: 850px) {
        .skills-categories {
            /* gap: 5rem; */
        }
    }
    /* Large Screen */
    @media only screen and (min-width: ${skillsLayoutChangeScreenSizeConstant}px) {
        
        /* Skills Stylings */
        .skills-categories {
            
            justify-content: space-between;

            padding: 2rem;
            margin: 2rem;
            
        }
        .skills-category {
            
            flex-direction: column;
            gap: 1rem;
            
            max-height: 260px;
            overflow-y: auto;
        }

    }

    /* Small Screen */
    @media only screen and (max-width: ${skillsLayoutChangeScreenSizeConstant}px) {

        .skills-container {

        }

        .skills-categories {
            flex-direction: column;
            padding-inline: 1rem;
            gap: 2rem;
            /* max-width: 90%; */

            width: min(900px, 100vw);
        }
        .skills-category {
            flex-direction: row;
            justify-content: space-between;

            overflow-x: scroll;
            
            gap: 2rem;
        }

    }


    @media only screen and (max-width: 450px) {
        .skills-categories {
            /* max-width: 300px; */
        }
    }


        
    .skill {
        transition: all 0.2s;
        will-change: transform;
        user-select: none;
        cursor: pointer;

        /* background-color: rgb(107, 104, 104); */
    }
    .skill-bg img {
        /* background-color: rgb(156, 156, 156);
        border-radius: 50%; */
        /* background-color:#e1e1e9; */
        filter: invert(48%) sepia(93%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
    }
    .skill img {
        z-index: 10 !important;

        margin: 10px;
    }

    .skill img:hover {
        transform: scale(1.2);
    }

`;