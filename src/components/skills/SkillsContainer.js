import React, { useEffect, useState } from 'react';
import "../../assets/css/Skills.css";
import { skillImgs } from './skills-img';
import { VerticalCarousel } from './VerticalCarousel';


export const SkillsContainer = () => {

    const [toBeRenderedItems, setToBeRenderItems] = useState([]);

    useEffect(() => {
        setToBeRenderItems(_render);
    }, [])

    const _render = () => {

        return skillImgs.map((skills, index) => {
            return <li key={index} className="skills-category" >
                {skills.map((_imgData, _index) => <VerticalCarousel key={_index} imgData={_imgData} />)}
            </li>
        })

    }    

    const isHover = e => e.parentElement.querySelector(':hover') === e;

    useEffect(() => {
        let scrollInterval = [];

        setTimeout(() => {
            document.querySelectorAll(".skills-category").forEach(_list => {
                let switchAnim = true;
                const _randomTimeForEach = (Math.random()*500 + 300)
                // console.log(_randomTimeForEach);
    
                scrollInterval.push(
                    setInterval(() => {
                    
                        const hovered = isHover(_list);
                        if(!hovered) {

                            // Scroll height wise
                            if(switchAnim) {
                                _list.scrollBy({ behavior: 'smooth', top: _list.scrollHeight })
                            }
                            else {
                                _list.scrollBy({ behavior: 'smooth', top: -_list.scrollTop })
                            }
                            
                            console.log("w", window.innerWidth)
                            // scroll width wise

                            if(switchAnim) {
                                _list.scrollBy({ behavior: 'smooth', left: _list.scrollWidth })
                            }
                            else {
                                _list.scrollBy({ behavior: 'smooth', left: -_list.scrollWidth })
                            }

                            switchAnim = !switchAnim;
                        } 
        
                    }, 900 + _randomTimeForEach)
                )
            })
        }, 50);

        return () => {
            if(scrollInterval) {
                console.log(scrollInterval);
                scrollInterval.forEach(_interval => clearInterval(_interval))
            }
        }

    }, [])

    
    return (
        <>
            <ul className="skills-categories">
                {toBeRenderedItems}
            </ul>
        </>
    )
}
