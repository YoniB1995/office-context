import React from 'react'
import emailjs from 'emailjs-com';
import styled from 'styled-components'

const FormStyle = styled.form` 
display:flex;
justify-content: center;
flex-direction: column;
`

export default function Contact() {
    function sendEmail(e) {
    e.preventDefault();    
    emailjs.sendForm('gmail', 'template', e.target, 'user_ZQOaHliqqdK3SDaRvxy9q')
      .then((result) => {
          window.location.reload() 
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
        <FormStyle className={"formInput","contact-form"} onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="html_message" />
      <input type="submit" value="Send" />
            
           
        </FormStyle>
    )
}
