import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfoSection from '@/components/contact/ContactInfoSection'
import ContactMapSection from '@/components/contact/ContactMapSection'
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
