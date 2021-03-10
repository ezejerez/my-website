import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={onToggle}>
      <Icon onClick={onToggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='forrecruiters' onClick={onToggle}>
            For recruiters
          </SidebarLink>
          <SidebarLink to='about' onClick={onToggle}>
            About
          </SidebarLink>
          <SidebarLink to='contact' onClick={onToggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
