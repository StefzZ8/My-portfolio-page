import emaiiljs from '@emailjs/browser';
import { useRef } from 'react';
import './ContactPage.scss';

const ContactPage = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emaiiljs
      .sendForm('service_2mnajzg', 'template_t3oomf6', form.current, {
        publicKey: 'ltSRbJKQREHV5N68F',
      })
      .then(() => {
        alert('Message successfully sent!');
      },
        () => {
          alert('Failed to send the message, please try again',);
        },
      );
  };

  return (
    <>
      <div id='contact' className='contact-page'>
        <h1 className='contact__me-title'>Contact Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p >
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <input
            type="text"
            name='user_name'
            placeholder='Your Name'
            required />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required />
          <input
            type="text"
            name='user_subject'
            placeholder='Subject' />
          <textarea
            name="message"
            rows="5"
            placeholder='Message'
            required>
          </textarea>
          <button
            type='submit'
            value='Send'
            className='submit-btn'>
            SEND EMAIL
          </button>
        </form>
      </div>
    </>
  )
}


export default ContactPage;