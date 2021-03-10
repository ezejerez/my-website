import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import FirstSection from '../components/FirstSection/index';
import AboutSection from '../components/AboutSection';

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
    </>
  );
};

export default Home;
