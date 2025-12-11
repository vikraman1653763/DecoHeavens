import React from 'react'
import Lander from '../components/Lander'
import Testimonial from '../components/Testimonial'
import CallToAction from '@/components/CallToAction'
import WhyChooseDecoHeavens from '@/components/WhyChooseDecoHeavens'
import Services from '@/components/Services'

const Home = () => {
  return (
    <div className=''>

    <Lander/>
    <Services/>
    <WhyChooseDecoHeavens/>
    <Testimonial/>
    <CallToAction/>
    </div>

  )
}

export default Home