import React from 'react';
import {
  SocialFollowContainer,
  SocialFollowIcon,
} from './SocialFollowElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialFollow = () => {
  return (
    <SocialFollowContainer>
      <SocialFollowIcon>
        <FaLinkedin href='https://www.linkedin.com/in/ezequiel-jerez-17b6581b7' />
        <FaGithub href='https://github.com/ezejerez' />
      </SocialFollowIcon>
    </SocialFollowContainer>
  );
};

export default SocialFollow;
