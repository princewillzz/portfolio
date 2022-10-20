import React from 'react'
import { AppColors } from '../assets/AppColors'
import ContactMe from '../components/ContactMe'
import { Experience } from '../components/experience/Experience'
import { AppFooter } from '../components/footer/AppFooter'
import { Loader } from '../components/loading-screen/Loader'
import Navbar from '../components/Navbar'
import { Projects } from '../components/projects/Projects'
import { SkillsContainer } from '../components/skills/SkillsContainer'
import Statistics from '../components/statistics/statistics'
import TopAbout from '../components/TopAbout'
import WaveBorder from '../components/WaveBorder'
import { useProfileData } from '../providers/profile-data-provider/useProfileData'

export const HomePage = () => {
	const { isLoadingDone } = useProfileData();
    
    return (
        isLoadingDone?        
        <>
            <Navbar 
                sectionBackgroundColor={AppColors.backgroundBlue} 
            />
            
            <TopAbout 
                sectionBackgroundColor={AppColors.backgroundBlue} 
            />
            
            <SkillsContainer 
                sectionBackgroundColor={AppColors.backgroundBlue} 
            />
            <WaveBorder
                upColor={AppColors.backgroundBlue}
                bottomColor={AppColors.darkBlue}
            />

            <Experience
                sectionBackgroundColor={AppColors.darkBlue} 
            />

            <WaveBorder
                upColor={AppColors.darkBlue}
                bottomColor={AppColors.backgroundBlack}
            />

            <Projects 
                sectionBackgroundColor={AppColors.backgroundBlack} 
            />
            <WaveBorder
                upColor={AppColors.backgroundBlack}
                bottomColor={AppColors.grey}
            />

            {/* Putting Statistics and contact me in same virtual background section */}
            <Statistics
                sectionBackgroundColor={AppColors.grey} 
            />
            <ContactMe 
                sectionBackgroundColor={AppColors.grey} 
            />
            <AppFooter />
        </>: 
        <Loader />
    )
}
