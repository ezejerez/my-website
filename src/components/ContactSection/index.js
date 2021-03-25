import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import emailjs from 'emailjs-com';
import {
  ContactSectionBackground,
  ContactFormWrapper,
  ContactForm,
  ContactH2,
  ContactInput,
  ContactTextArea,
  ContactButton,
  ErrorMessage,
} from './ContactElements';
import Modal from '../Modal/index';
import Shadow from '../Shadow';
import useForm from './useForm';
import validateInfo from './validateInfo';

const ContactSection = () => {
  const {
    handleChange,
    values,
    handleSubmit,
    validationResponse,
    clearForm,
  } = useForm(validateInfo);

  const [showModal, setShowModal] = useState(true);

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  useEffect(() => {
    if (validationResponse.success) {
      sendEmail();
    }
  }, [validationResponse]);

  function sendEmail() {
    const contactForm = document.getElementById('contactForm');
    emailjs
      .sendForm(
        'gmail',
        'template_wotpibf',
        contactForm,
        'user_8o9zQhhFpdSCF4aIT7OSF',
      )
      .then(() => {
        setShowModal(true);
        clearForm();
      });
  }

  return (
    <div id='contact'>
      {showModal ? (
        <Shadow ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <Modal
              setShowModal={setShowModal}
              message='Your message was sent successfully! I will contact you as soon as
        possible &#x1F60E;'
            />
          </animated.div>
        </Shadow>
      ) : null}
      <ContactSectionBackground>
        <ContactFormWrapper>
          <ContactForm onSubmit={handleSubmit} id='contactForm'>
            <ContactH2>Contact me:</ContactH2>
            <label htmlFor='name'></label>
            <ContactInput
              type='text'
              className='form-control'
              placeholder='Your name'
              name='name'
              value={values.name}
              onChange={handleChange}
            />
            {validationResponse.name && (
              <ErrorMessage>{validationResponse.name}</ErrorMessage>
            )}
            <label htmlFor='email'></label>
            <ContactInput
              type='text'
              className='form-control'
              placeholder='Your email address'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
            {validationResponse.email && (
              <ErrorMessage>{validationResponse.email}</ErrorMessage>
            )}
            <label htmlFor='subject'></label>
            <ContactInput
              type='text'
              className='form-control'
              placeholder='Subject'
              name='subject'
              value={values.subject}
              onChange={handleChange}
            />
            {validationResponse.subject && (
              <ErrorMessage>{validationResponse.subject}</ErrorMessage>
            )}
            <label htmlFor='message'></label>
            <ContactTextArea
              className='form-control'
              id=''
              cols='30'
              rows='8'
              placeholder='Your message'
              name='message'
              value={values.message}
              onChange={handleChange}
            />
            {validationResponse.message && (
              <ErrorMessage>{validationResponse.message}</ErrorMessage>
            )}
            <ContactButton
              type='submit'
              className='btn btn-info'
              value='Send Message'>
              Send Message
            </ContactButton>
          </ContactForm>
        </ContactFormWrapper>
      </ContactSectionBackground>
    </div>
  );
};

export default ContactSection;
