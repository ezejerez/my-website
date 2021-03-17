import React from 'react';
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

const ContactSection = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_wotpibf',
        e.target,
        'user_8o9zQhhFpdSCF4aIT7OSF',
      )
      .then(() => {
        alert(
          'Your message was sent successfully! I will contact you as soon as possible &#x1F60E;',
        );
      }, e.target.reset());
  }

  return (
    <ContactSectionBackground>
      <StyledFormWrapper>
        <StyledForm>
          <h2>Contact me:</h2>
          <label htmlFor='name'>Name</label>
          <StyledInput type='text' name='name' />
          <label htmlFor='email'>Your Email</label>
          <StyledInput type='email' name='email' />
          <label htmlFor='subject'>Subject</label>
          <StyledInput type='subject' name='subject' />
          <label htmlFor='message'></label>
          <StyledTextArea name='subject' />
          <StyledError>
            <p>Error message here</p>
          </StyledError>
          <StyledButton type='submit'>Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </ContactSectionBackground>
  );
};

export default ContactSection;

// ContactSectionContainer,
// ContactSectionTitle,
// ContactButton,

{
  /* <ContactSectionTitle>Contact me:</ContactSectionTitle>
      <form onSubmit={sendEmail}>
        <ContactSectionContainer>
          <div className='col-8 form-group mx auto'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
            />
          </div>

          <div className='col-8 form-group pt-2 mx auto'>
            <input
              type='email'
              className='form-control'
              placeholder='Email address'
              name='email'
            />
          </div>

          <div className='col-8 form-group pt-2 mx auto'>
            <input
              type='text'
              className='form-control'
              placeholder='Subject'
              name='subject'
            />
          </div>

          <div className='col-8 form-group pt-2 mx auto'>
            <textarea
              className='form-control'
              id=''
              cols='30'
              rows='8'
              placeholder='Your message'
              name='message'></textarea>
          </div>

          <div>
            <ContactButton
              type='submit'
              className='btn btn-info'
              value='Send Message'
            />
          </div>
        </ContactSectionContainer>
      </form> */
}
