import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import FirstSection from '../components/FirstSection/index';
import AboutSection from '../components/AboutSection';
import { SocialFollowContainer } from './PagesElements';
import SocialFollow from '../components/SocialFollow/index';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <Navbar onToggle={onToggle} />
      <FirstSection />
      <AboutSection />
      <SocialFollowContainer>
        <SocialFollow />
      </SocialFollowContainer>
    </>
  );
};

export default Home;
