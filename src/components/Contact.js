import React from 'react'
import { contactInfo } from '../utils/constants'
import ContactDetail from './ContactDetail'
import ContactForm from './ContactForm'
import { useGlobalContext } from '../context/context'

const Contact = () => {
  const {closeNavbar} = useGlobalContext();

  return (
    <section className='contact' onClick={closeNavbar}>
      <div className='section-center clearfix'>
        <article className='contact-info'>
          {contactInfo.map((info) => {
            const { id } = info
            return <ContactDetail key={id} {...info} />
          })}
        </article>
       <article className="contact-form">
        <ContactForm />
       </article>
      </div>
    </section>
  )
}

export default Contact
