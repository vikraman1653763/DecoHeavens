import EventsPlanningCTA from '@/components/eventsPlannings/EventsPlanningCTA'
import EventImageSlider from '@/components/eventsPlannings/EventWeddingSlider'
import TimelineEvent from '@/components/eventsPlannings/TimelineEvent'
import WhyChooseUsEvents from '@/components/eventsPlannings/WhyChooseUsEvents'
import React from 'react'

const EventsAndWeddings = () => {
  return (
    <div>
      <EventImageSlider/>
      <TimelineEvent/>
      <EventsPlanningCTA/>
      <WhyChooseUsEvents/>
    </div>
  )
}

export default EventsAndWeddings
