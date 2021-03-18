import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  ContactSectionBackground,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledError,
  StyledButton,
} from './ContactElements';

import Modal from '../Modal/index';

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       'gmail',
  //       'template_wotpibf',
  //       e.target,
  //       'user_8o9zQhhFpdSCF4aIT7OSF',
  //     )
  //     .then(() => {
  //       alert(
  //         'Your message was sent successfully! I will contact you as soon as possible &#x1F60E;',
  //       );
  //     }, e.target.reset());
  // }

  return (
    <div id='contact'>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ContactSectionBackground>
        <StyledFormWrapper>
          <StyledForm>
            <h2>Contact me:</h2>
            <label htmlFor='name'></label>
            <StyledInput
              type='text'
              className='form-control'
              placeholder='Your name'
              name='name'
            />
            <label htmlFor='email'></label>
            <StyledInput
              type='email'
              className='form-control'
              placeholder='Your email address'
              name='email'
            />
            <label htmlFor='subject'></label>
            <StyledInput
              type='text'
              className='form-control'
              placeholder='Subject'
              name='subject'
            />
            <label htmlFor='message'></label>
            <StyledTextArea
              className='form-control'
              id=''
              cols='30'
              rows='8'
              placeholder='Your message'
              name='message'
            />
            <StyledError>
              <p>Error message here</p>
            </StyledError>
            <StyledButton
              onClick={openModal}
              type='submit'
              className='btn btn-info'
              value='Send Message'>
              Send Message
            </StyledButton>
          </StyledForm>
        </StyledFormWrapper>
      </ContactSectionBackground>
    </div>
  );
};

export default ContactSection;

// agregar <StyledForm onSubmit={sendEmail}>
