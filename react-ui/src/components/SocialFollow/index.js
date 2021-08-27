import React from 'react';
import { SocialFollowIconsContainer } from './SocialFollowElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialFollow = () => {
  return (
    <SocialFollowIconsContainer>
      <a
        href='https://www.linkedin.com/in/ezequiel-jerez-17b6581b7'
        target='_blank'
        rel='noreferrer'>
        <FaLinkedin />
      </a>

      <a href='https://github.com/ezejerez' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
    </SocialFollowIconsContainer>
  );
};

export default SocialFollow;
