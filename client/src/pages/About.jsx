import AboutCTASection from '@/components/AboutCTASection'
import AboutHero from '@/components/AboutHero'
import Services from '@/components/Services'
import VisionMissionSection from '@/components/VisionMissionSection'
import WhyChooseDecoHeavens from '@/components/WhyChooseDecoHeavens'
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
