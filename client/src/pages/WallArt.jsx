import CarouselSlider from '@/components/wallArt/CarouselSlider'
import Slider3D from '@/components/wallArt/Slider3D'
import WallArtCTASection from '@/components/wallArt/WallArtCTASection'
import WallArtGallery from '@/components/wallArt/WallArtGallery'
import WallArtIntroSection from '@/components/wallArt/WallArtIntroSection'
import React from 'react'

const Wall = () => {
  return (
    <div>
      <CarouselSlider/>
      <WallArtIntroSection/>
      <Slider3D/>
      <WallArtGallery/>
      <WallArtCTASection/>
    </div>
  )
}

export default Wall
