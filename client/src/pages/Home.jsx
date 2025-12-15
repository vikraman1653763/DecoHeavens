import React from 'react'
import Lander from '../components/home/Lander'
import Testimonial from '../components/home/Testimonial'
import CallToAction from '@/components/home/CallToAction'
import WhyChooseDecoHeavens from '@/components/home/WhyChooseDecoHeavens'
import AboutUs from '@/components/home/AboutUs'
import WhatWeDoPillars from '@/components/home/WhatWeDoPillars'
 
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