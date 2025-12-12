import React from 'react'
import Lander from '../components/Lander'
import Testimonial from '../components/Testimonial'
import CallToAction from '@/components/CallToAction'
import WhyChooseDecoHeavens from '@/components/WhyChooseDecoHeavens'
import AboutUs from '@/components/AboutUs'
import WhatWeDoPillars from '@/components/WhatWeDoPillars'

const Home = () => {
  return (
    <div className=''>

    <Lander/>
    <AboutUs/>
    <WhatWeDoPillars/>
    <WhyChooseDecoHeavens/>
    <Testimonial/>
    <CallToAction/>
    </div>

  )
}

export default Home