import React from 'react'

const ContactForm = () => {
 return (
   <>
     <h3 className="contact-form-title">contact us</h3>
     <form action=''>
       <div className='form-group'>
         <input
           type='text'
           name='name'
           placeholder='name'
           className='form-control'
         />
         <input
           type='text'
           name='email'
           placeholder='email'
           className='form-control'
         />
         <textarea name="message" placeholder='message' className="form-control" rows="5"></textarea>
       </div>
       <button type="submit" className='btn submit-btn'>submit here</button>
     </form>
   </>
 )
}

export default ContactForm
