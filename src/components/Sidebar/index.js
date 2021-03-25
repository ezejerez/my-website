import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarResume,
} from './SidebarElements';
import SocialFollow from '../SocialFollow/index';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={onToggle}>
      <Icon onClick={onToggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={onToggle}>
            About
          </SidebarLink>
          <SidebarLink to='contact' onClick={onToggle}>
            Contact
          </SidebarLink>
          <SidebarResume
            href='https://docs.google.com/document/d/1ra2k-wOx_JPcdLVE1-xdGhsCQGni4p7zbTwjjW5l1NM/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
            onClick={onToggle}
          >
            Resume
          </SidebarResume>
        </SidebarMenu>
        <SocialFollow />
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
