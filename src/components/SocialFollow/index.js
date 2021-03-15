import React from 'react';
import {
  SocialFollowIcon,
  SocialFollowIconsContainer,
} from './SocialFollowElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialFollow = () => {
  return (
    <SocialFollowIconsContainer>
      <SocialFollowIcon>
        <FaLinkedin href='https://www.linkedin.com/in/ezequiel-jerez-17b6581b7' />
      </SocialFollowIcon>
      <SocialFollowIcon>
        <FaGithub href='https://github.com/ezejerez' />
      </SocialFollowIcon>
    </SocialFollowIconsContainer>
  );
};

export default SocialFollow;
