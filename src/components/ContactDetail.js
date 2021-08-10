import React from 'react'

const ContactDetail = ({name, icon, text, text2}) => {
 return (
   <div className="contact-item">
     <h4 className='contact-title'>
       <span className='contact-icon'>{icon}</span> {name}
     </h4>
     <h4 className='contact-text'>{
      text
     } <br/> {text2 && text2}</h4>
   </div>
 )
}

export default ContactDetail
