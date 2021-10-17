
import { RightOutlined } from '@ant-design/icons';
import { Divider, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppColors } from '../../assets/AppColors';
import { ExperienceProps } from '../interface/ExperienceProps';
import { TabContainerProps } from '../interface/TabContainerProps';
import { SubHeading } from '../SubHeading';
import { experienceRawData } from './experience';


const { TabPane } = Tabs;

interface ExperienceData {
    companyName: string,
    jobRole: string,
    description: string[],
    startDate: string,
    endDate: string
}

const widthToChangeLayout = 680;

export const Experience: React.FC<ExperienceProps> = ({ sectionBackgroundColor }: ExperienceProps) => {

    const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);

    const [windowInnerWidthSize, setWindowInnerWidthSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        setExperienceData(experienceRawData.data);

        const changeWidthFunc = () => {
            setWindowInnerWidthSize(window.innerWidth)
        }
        window.addEventListener('resize', changeWidthFunc, false);

        return () => {
            setExperienceData([])
            window.removeEventListener('resize', changeWidthFunc, false);
        }
    }, [])

    return (
        <ExperienceContainer
            id="Experience"
            style={{
                backgroundColor: sectionBackgroundColor
                // backgroundColor: "#fff"
            }}
        >
            <SubHeading heading={"Experience"} />

            <TabContainer
                secondaryColor={AppColors.secondaryTextColor}
                activeColor={AppColors.activeTextColor}
            >
                <Tabs 
                    defaultActiveKey={"1"} 
                    tabPosition={windowInnerWidthSize > widthToChangeLayout? "left": "top"} 
                >
                    {experienceData?.map((_experienceData, index) => (
                        <TabPane 
                            style={{
                                color: AppColors.secondaryTextColor
                            }} 
                            tab={_experienceData.companyName} 
                            key={index} 
                        >
                            <div className="job-heading">
                                <h2 style={{ margin: 0 }}>
                                    {_experienceData.jobRole} 
                                    <span style={{ color: AppColors.activeTextColor, marginLeft: 12 }}>
                                        @ {_experienceData.companyName?.split(" ")?.slice(0, 1)}
                                    </span>
                                </h2>
                                <span>{_experienceData.startDate} - {_experienceData.endDate}</span>
                                { windowInnerWidthSize > widthToChangeLayout && <Divider style={{ background: "rgba(100, 110, 140)", margin: 0 , marginTop: 10}}  />}
                            </div>

                            <ul className="job-description">
                                {_experienceData.description.map((_desc, _descindex) => (
                                    <li className="job-desc-line" key={_descindex}>
                                        <RightOutlined style={{ alignSelf: "baseline", paddingTop: 5, color: AppColors.activeTextColor }} />
                                        <p>
                                            {_desc}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                        </TabPane>
                    ))}
                </Tabs>
            </TabContainer>

        </ExperienceContainer>
    )
}




const ExperienceContainer = styled.section`
    padding-top: 6vh;
`;



const TabContainer = styled.section<TabContainerProps>`

    margin-top: 3rem;
    width: 88vw;
    margin-inline: auto;

    // Tab shadow effect
    // .ant-tabs-nav-list {
    //     box-shadow: inset 0 10px 8px -7px rgb(255 250 250); //${props => props.activeColor};
    //     padding-top: 10px;
    // }

    h2 {
        color: white;
    }

    .ant-tabs-tab {
        color: ${props => props.secondaryColor};
        font-size: 16px;
    }

    .job-heading {
        margin-bottom: 28px;
    }
    .job-description {
        list-style: none;
        margin: 0px;
        padding: 0px;
    }
    
    .job-desc-line {
        margin-bottom: 10px;

        display: flex;
        align-items: center;
        
    }
    .job-desc-line p {
        margin: 0;
        padding-left: 25px;
    }

    // Active sidbar color
    .ant-tabs-tab {
        transition: all 0.6s ease;
    }
    .ant-tabs-tab:hover {
        color: ${props => props.activeColor};
        background: #181746;
        transform: scale(0.91);
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: ${props => props.activeColor};
    }
    .ant-tabs-ink-bar {
        background: ${props => props.activeColor};
    }
`;