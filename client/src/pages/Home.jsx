import React from 'react'
import Lander from '../components/Lander'
import Testimonial from '../components/Testimonial'
import CallToAction from '@/components/CallToAction'
import WhyChooseDecoHeavens from '@/components/WhyChooseDecoHeavens'

const Home = () => {
  return (
    <div className=''>

    <Lander/>
    <WhyChooseDecoHeavens/>
    <Testimonial/>
    <CallToAction/>
    </div>

  )
}

export default Home