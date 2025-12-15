import CarouselSlider from '@/components/wallArt/CarouselSlider'
import Slider3D from '@/components/wallArt/Slider3D'
import WallArtCTASection from '@/components/wallArt/WACTASection'
import WallArtGallery from '@/components/wallArt/WAGallery'
import WallArtIntroSection from '@/components/wallArt/WAIntroSection'
import WallArtProcess from '@/components/wallArt/WAProcess'
import React from 'react'

const Wall = () => {
  return (
    <div>
      <CarouselSlider/>
      <WallArtIntroSection/>
      <Slider3D/>
      <WallArtProcess/>
      <WallArtGallery/>
      <WallArtCTASection/>
    </div>
  )
}

export default Wall
