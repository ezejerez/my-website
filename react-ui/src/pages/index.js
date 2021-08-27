import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import FirstSection from '../components/FirstSection/index';
import AboutSection from '../components/AboutSection';
import { SocialFollowContainer } from './PagesElements';
import SocialFollow from '../components/SocialFollow/index';
import ContactSection from '../components/ContactSection/index';
import useWindowSize from '../useWindowSize';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const windowSize = useWindowSize();

  const onToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onToggle={onToggle} />

      <Navbar onToggle={onToggle} windowSize={windowSize} />
      <FirstSection />
      <AboutSection />
      <ContactSection />

      {windowSize.width > 767 ? (
        <SocialFollowContainer>
          <SocialFollow />
        </SocialFollowContainer>
      ) : null}
    </>
  );
};

export default Home;
