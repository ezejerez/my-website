import React from 'react';
import {
  SocialFollowIcon,
  SocialFollowIconsContainer,
} from './SocialFollowElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialFollow = () => {
  return (
    <SocialFollowIconsContainer>
      {
        // El target "_blank" hace que se habra el link en otra pestaña
      }
      <a
        href='https://www.linkedin.com/in/ezequiel-jerez-17b6581b7'
        target='_blank'
      >
        <FaLinkedin />
      </a>

      <a>
        <FaGithub href='https://github.com/ezejerez' />
      </a>
    </SocialFollowIconsContainer>
  );
};

export default SocialFollow;
