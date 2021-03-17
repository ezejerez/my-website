import React from 'react';
import emailjs from 'emailjs-com';

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
    <div>
      <div className='container'>
        <form onSubmit={sendEmail}>
          <div className='row pt-5 max-auto'>
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

            <div className='col-8 pt-3 mx auto'>
              <input
                type='submit'
                className='btn btn-info'
                value='Send Message'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
