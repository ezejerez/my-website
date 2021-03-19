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
} from './ContactElements';
import Modal from '../Modal/index';
import Shadow from '../Shadow';

const ContactSection = () => {
  const [error, setError] = useState('');
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
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  function sendEmail(e) {
    e.preventDefault();
    setShowModal(true);
    console.log('a');
    return;
    emailjs
      .sendForm(
        'gmail',
        'template_wotpibf',
        e.target,
        'user_8o9zQhhFpdSCF4aIT7OSF'
      )
      .then(() => {
        setShowModal(true);
      }, e.target.reset());
  }

  return (
    <div id='contact'>
      {showModal ? (
        <Shadow ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <Modal
              onCloseButtonClick={() => setShowModal(false)}
              message='Your message was sent successfully! I will contact you as soon as
        possible &#x1F60E;'
            />
          </animated.div>
        </Shadow>
      ) : null}
      <ContactSectionBackground>
        <ContactFormWrapper>
          <ContactForm onSubmit={sendEmail}>
            <ContactH2>Contact me:</ContactH2>
            <label htmlFor='name'></label>
            <ContactInput
              type='text'
              className='form-control'
              placeholder='Your name'
              name='name'
            />
            <label htmlFor='email'></label>
            <ContactInput
              type='text'
              className='form-control'
              placeholder='Your email address'
              name='email'
            />
            <label htmlFor='subject'></label>
            <ContactInput
              type='text'
              className='form-control'
              placeholder='Subject'
              name='subject'
            />
            <label htmlFor='message'></label>
            <ContactTextArea
              className='form-control'
              id=''
              cols='30'
              rows='8'
              placeholder='Your message'
              name='message'
            />
            <ContactButton
              type='submit'
              className='btn btn-info'
              value='Send Message'
            >
              Send Message
            </ContactButton>
          </ContactForm>
        </ContactFormWrapper>
      </ContactSectionBackground>
    </div>
  );
};

export default ContactSection;
