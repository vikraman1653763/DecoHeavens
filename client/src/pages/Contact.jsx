import ContactForm from '@/components/ContactForm'
import ContactHero from '@/components/ContactHero'
import ContactInfoSection from '@/components/ContactInfoSection'
import ContactMapSection from '@/components/ContactMapSection'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactForm/>
      <ContactMapSection/>
      <ContactInfoSection/>
    </div>
  )
}

export default Contact
