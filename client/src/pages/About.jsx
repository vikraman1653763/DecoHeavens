import AboutCTASection from '@/components/about/AboutCTASection'
import AboutHero from '@/components/about/AboutHero'
import Services from '@/components/about/Services'
import VisionMissionSection from '@/components/about/VisionMissionSection'
import WhyChooseDecoHeavens from '@/components/home/WhyChooseDecoHeavens'
import React from 'react'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <Services/>
      <WhyChooseDecoHeavens/>
      <VisionMissionSection/>
      <AboutCTASection/>
    </div>
  )
}

export default About
