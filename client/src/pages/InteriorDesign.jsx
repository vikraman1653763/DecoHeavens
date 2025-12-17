import InteriorCTA from '@/components/interiorDesign/IntCTA'
import InteriorDesignCarousel from '@/components/interiorDesign/IntDesignCarousel'
import InteriorGallery from '@/components/interiorDesign/InteriorGallery'
import InteriorIntro from '@/components/interiorDesign/IntIntro'
import InteriorProcess from '@/components/interiorDesign/IntProcess'
import ScrollVelocityInteriorShowcase from '@/components/interiorDesign/ScrollVelocityInteriorShowcase'
import React from 'react'

const InteriorDesign = () => {
  return (
    <div>
      <InteriorDesignCarousel/>
      <InteriorGallery/>
      <InteriorIntro/>
      <ScrollVelocityInteriorShowcase/>
      <InteriorProcess/>
      <InteriorCTA/>
    </div>
  )
}

export default InteriorDesign
